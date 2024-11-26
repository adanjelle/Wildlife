import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import Flask, request, jsonify, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from marshmallow import Schema, fields, ValidationError
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)

# Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = './uploads'
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

db = SQLAlchemy(app)

# Models
class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(15), nullable=True)
    company = db.Column(db.String(100), nullable=True)
    message = db.Column(db.Text, nullable=False)

class Report(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    animal_type = db.Column(db.String(100), nullable=False)
    damage_description = db.Column(db.Text, nullable=False)
    sender_name = db.Column(db.String(100), nullable=False)
    sender_email = db.Column(db.String(100), nullable=False)
    sender_address = db.Column(db.String(200), nullable=False)
    image_path = db.Column(db.String(300), nullable=True)

# Schemas
class ContactSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    email = fields.Email(required=True)
    phone = fields.Str()
    company = fields.Str()
    message = fields.Str(required=True)

class ReportSchema(Schema):
    id = fields.Int(dump_only=True)
    animal_type = fields.Str(required=True)
    damage_description = fields.Str(required=True)
    sender_name = fields.Str(required=True)
    sender_email = fields.Email(required=True)
    sender_address = fields.Str(required=True)
    image_path = fields.Str()

contact_schema = ContactSchema()
contacts_schema = ContactSchema(many=True)

report_schema = ReportSchema()
reports_schema = ReportSchema(many=True)

# Email Sender Function
def send_email(contact_data):
    sender_email = "your-email@gmail.com"
    sender_password = "your-password"
    recipient_email = "recipient-email@gmail.com"

    subject = f"New Contact Form Submission from {contact_data['name']}"
    body = f"""
    Name: {contact_data['name']}
    Email: {contact_data['email']}
    Phone: {contact_data.get('phone', 'Not provided')}
    Company: {contact_data.get('company', 'Not provided')}
    Message: {contact_data['message']}
    """

    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = recipient_email
    message["Subject"] = subject
    message.attach(MIMEText(body, "plain"))

    try:
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(sender_email, sender_password)
            server.sendmail(sender_email, recipient_email, message.as_string())
            print("Email sent successfully!")
    except Exception as e:
        print(f"Failed to send email: {e}")

# Routes

## Contact Form Route
@app.route('/api/contact', methods=['POST', 'OPTIONS'])
def create_contact():
    if request.method == 'OPTIONS':
        return jsonify({'message': 'Preflight request successful'}), 200
    try:
        data = request.json
        validated_data = contact_schema.load(data)
        new_contact = Contact(**validated_data)
        db.session.add(new_contact)
        db.session.commit()

        send_email(validated_data)

        return jsonify(contact_schema.dump(new_contact)), 201
    except ValidationError as err:
        return jsonify(err.messages), 400

## Report Submission Route
@app.route('/report', methods=['POST'])
def submit_report():
    try:
        data = request.form
        validated_data = {
            "animal_type": data.get('animal_type'),
            "damage_description": data.get('damage_description'),
            "sender_name": data.get('sender_name'),
            "sender_email": data.get('sender_email'),
            "sender_address": data.get('sender_address'),
        }

        file = request.files.get('image')
        if file:
            filename = secure_filename(file.filename)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(file_path)
            validated_data["image_path"] = file_path

        new_report = Report(**validated_data)
        db.session.add(new_report)
        db.session.commit()

        return jsonify(report_schema.dump(new_report)), 201

    except ValidationError as err:
        return jsonify(err.messages), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500

## Get All Reports Route
@app.route('/reports', methods=['GET'])
def get_reports():
    reports = Report.query.all()
    return jsonify(reports_schema.dump(reports)), 200

## Delete Report Route
@app.route('/reports/<int:id>', methods=['DELETE'])
def delete_report(id):
    report = Report.query.get(id)
    if not report:
        return jsonify({'error': 'Report not found'}), 404

    if report.image_path:
        try:
            os.remove(report.image_path)
        except Exception as e:
            print(f"Failed to delete image: {e}")

    db.session.delete(report)
    db.session.commit()

    return jsonify({'message': 'Report deleted successfully'}), 200

## Update Report Route
@app.route('/reports/<int:id>', methods=['PUT'])
def update_report(id):
    report = Report.query.get(id)
    if not report:
        return jsonify({'error': 'Report not found'}), 404

    data = request.form
    report.animal_type = data.get('animal_type', report.animal_type)
    report.damage_description = data.get('damage_description', report.damage_description)
    report.sender_name = data.get('sender_name', report.sender_name)
    report.sender_email = data.get('sender_email', report.sender_email)
    report.sender_address = data.get('sender_address', report.sender_address)

    file = request.files.get('image')
    if file:
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)

        if report.image_path:
            try:
                os.remove(report.image_path)
            except Exception as e:
                print(f"Failed to delete old image: {e}")
        
        report.image_path = file_path

    db.session.commit()
    return jsonify(report_schema.dump(report)), 200

## Serve Image Files
@app.route('/uploads/<filename>', methods=['GET'])
def serve_image(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)