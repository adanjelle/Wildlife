# from flask_mail import Mail, Message
# import os
# from flask import Flask, request, jsonify, send_from_directory
# from flask_sqlalchemy import SQLAlchemy
# from flask_cors import CORS
# from marshmallow import Schema, fields, ValidationError
# from werkzeug.utils import secure_filename

# app = Flask(__name__)
# CORS(app)

# # Mail config
# app.config['MAIL_SERVER'] = 'smtp.gmail.com'
# app.config['MAIL_PORT'] = 465
# app.config['MAIL_USE_SSL'] = True
# app.config['MAIL_USERNAME'] = 'adanjelle4@gmail.com'
# app.config['MAIL_PASSWORD'] = 'bjaw jiwl tjak zaws'
# app.config['MAIL_DEFAULT_SENDER'] = 'no-reply@wilfierescuehub.com'
# mail = Mail(app)

# # DB config
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# app.config['UPLOAD_FOLDER'] = './uploads'
# os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
# db = SQLAlchemy(app)

# # Models
# class Contact(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(100), nullable=False)
#     email = db.Column(db.String(100), nullable=False)
#     phone = db.Column(db.String(15), nullable=True)
#     company = db.Column(db.String(100), nullable=True)
#     message = db.Column(db.Text, nullable=False)

# class Report(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     animal_type = db.Column(db.String(100), nullable=False)
#     damage_description = db.Column(db.Text, nullable=False)
#     sender_name = db.Column(db.String(100), nullable=False)
#     sender_email = db.Column(db.String(100), nullable=False)
#     sender_address = db.Column(db.String(200), nullable=False)
#     image_path = db.Column(db.String(300), nullable=True)

# # Schemas
# class ContactSchema(Schema):
#     id = fields.Int(dump_only=True)
#     name = fields.Str(required=True)
#     email = fields.Email(required=True)
#     phone = fields.Str()
#     company = fields.Str()
#     message = fields.Str(required=True)

# class ReportSchema(Schema):
#     id = fields.Int(dump_only=True)
#     animal_type = fields.Str(required=True)
#     damage_description = fields.Str(required=True)
#     sender_name = fields.Str(required=True)
#     sender_email = fields.Email(required=True)
#     sender_address = fields.Str(required=True)
#     image_path = fields.Str()

# contact_schema = ContactSchema()
# contacts_schema = ContactSchema(many=True)
# report_schema = ReportSchema()
# reports_schema = ReportSchema(many=True)

# # --- Routes ---
# @app.route('/api/contact', methods=['POST'])
# def create_contact():
#     try:
#         data = request.json
#         validated_data = contact_schema.load(data)
#         new_contact = Contact(**validated_data)
#         db.session.add(new_contact)
#         db.session.commit()
#         return jsonify(contact_schema.dump(new_contact)), 201
#     except ValidationError as err:
#         return jsonify(err.messages), 400

# @app.route('/report', methods=['POST'])
# def submit_report():
#     try:
#         data = request.form
#         validated_data = {
#             "animal_type": data.get('animal_type'),
#             "damage_description": data.get('damage_description'),
#             "sender_name": data.get('sender_name'),
#             "sender_email": data.get('sender_email'),
#             "sender_address": data.get('sender_address'),
#         }

#         file = request.files.get('image')
#         if file:
#             filename = secure_filename(file.filename)
#             file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
#             file.save(file_path)
#             validated_data["image_path"] = file_path

#         new_report = Report(**validated_data)
#         db.session.add(new_report)
#         db.session.commit()
#         return jsonify(report_schema.dump(new_report)), 201
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500

# @app.route('/reports', methods=['GET'])
# def get_reports():
#     reports = Report.query.all()
#     return jsonify(reports_schema.dump(reports)), 200

# @app.route('/reports/<int:id>', methods=['DELETE'])
# def delete_report(id):
#     report = Report.query.get(id)
#     if not report:
#         return jsonify({'error': 'Report not found'}), 404

#     if report.image_path:
#         try:
#             os.remove(report.image_path)
#         except Exception as e:
#             print(f"Failed to delete image: {e}")

#     db.session.delete(report)
#     db.session.commit()
#     return jsonify({'message': 'Report deleted successfully'}), 200

# @app.route('/reports/<int:id>', methods=['PUT'])
# def update_report(id):
#     report = Report.query.get(id)
#     if not report:
#         return jsonify({'error': 'Report not found'}), 404

#     if request.is_json:
#         data = request.get_json()
#     else:
#         data = request.form.to_dict()

#     report.animal_type = data.get('animal_type', report.animal_type)
#     report.damage_description = data.get('damage_description', report.damage_description)
#     report.sender_name = data.get('sender_name', report.sender_name)
#     report.sender_email = data.get('sender_email', report.sender_email)
#     report.sender_address = data.get('sender_address', report.sender_address)

#     if not request.is_json:  # Handle image if form-data
#         file = request.files.get('image')
#         if file:
#             filename = secure_filename(file.filename)
#             file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
#             file.save(file_path)

#             if report.image_path:
#                 try:
#                     os.remove(report.image_path)
#                 except Exception as e:
#                     print(f"Failed to delete old image: {e}")
#             report.image_path = file_path

#     db.session.commit()
#     return jsonify(report_schema.dump(report)), 200

# @app.route('/uploads/<filename>', methods=['GET'])
# def serve_image(filename):
#     return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# if __name__ == '__main__':
#     with app.app_context():
#         db.create_all()
#     app.run(debug=True)
# from flask_mail import Mail, Message
# import os
# from flask import Flask, request, jsonify, send_from_directory
# from flask_sqlalchemy import SQLAlchemy
# from flask_cors import CORS
# from marshmallow import Schema, fields, ValidationError
# from werkzeug.utils import secure_filename

# app = Flask(__name__)
# CORS(app)

# # ---------------- MAIL CONFIG ----------------
# app.config['MAIL_SERVER'] = 'smtp.gmail.com'
# app.config['MAIL_PORT'] = 465
# app.config['MAIL_USE_SSL'] = True
# app.config['MAIL_USE_TLS'] = False
# app.config['MAIL_USERNAME'] = 'adanjelle4@gmail.com'  # your Gmail
# app.config['MAIL_PASSWORD'] = 'qshfivzokjjmbog'   # App password (not Gmail password!)
# app.config['MAIL_DEFAULT_SENDER'] = ('Wildlife Rescue Hub', 'adanjelle4@gmail.com')

# mail = Mail(app)

# # ---------------- DB CONFIG ----------------
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# app.config['UPLOAD_FOLDER'] = './uploads'
# os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
# db = SQLAlchemy(app)

# # ---------------- MODELS ----------------
# class Contact(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(100), nullable=False)
#     email = db.Column(db.String(100), nullable=False)
#     phone = db.Column(db.String(15), nullable=True)
#     company = db.Column(db.String(100), nullable=True)
#     message = db.Column(db.Text, nullable=False)

# class Report(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     animal_type = db.Column(db.String(100), nullable=False)
#     damage_description = db.Column(db.Text, nullable=False)
#     sender_name = db.Column(db.String(100), nullable=False)
#     sender_email = db.Column(db.String(100), nullable=False)
#     sender_address = db.Column(db.String(200), nullable=False)
#     image_path = db.Column(db.String(300), nullable=True)

# # ---------------- SCHEMAS ----------------
# class ContactSchema(Schema):
#     id = fields.Int(dump_only=True)
#     name = fields.Str(required=True)
#     email = fields.Email(required=True)
#     phone = fields.Str()
#     company = fields.Str()
#     message = fields.Str(required=True)

# class ReportSchema(Schema):
#     id = fields.Int(dump_only=True)
#     animal_type = fields.Str(required=True)
#     damage_description = fields.Str(required=True)
#     sender_name = fields.Str(required=True)
#     sender_email = fields.Email(required=True)
#     sender_address = fields.Str(required=True)
#     image_path = fields.Str()

# contact_schema = ContactSchema()
# contacts_schema = ContactSchema(many=True)
# report_schema = ReportSchema()
# reports_schema = ReportSchema(many=True)

# # ---------------- ROUTES ----------------

# @app.route('/api/contact', methods=['POST'])
# def create_contact():
    
#     try:
#         data = request.json
#         validated_data = contact_schema.load(data)
#         new_contact = Contact(**validated_data)
#         db.session.add(new_contact)
#         db.session.commit()
#         return jsonify(contact_schema.dump(new_contact)), 201
#     except ValidationError as err:
#         return jsonify(err.messages), 400

# @app.route('/report', methods=['POST'])
# def submit_report():
#     try:
#         data = request.form
#         validated_data = {
#             "animal_type": data.get('animal_type'),
#             "damage_description": data.get('damage_description'),
#             "sender_name": data.get('sender_name'),
#             "sender_email": data.get('sender_email'),
#             "sender_address": data.get('sender_address'),
#         }

#         # Save file if exists
#         file = request.files.get('image')
#         if file:
#             filename = secure_filename(file.filename)
#             file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
#             file.save(file_path)
#             validated_data["image_path"] = file_path

#         # Save to DB
#         new_report = Report(**validated_data)
#         db.session.add(new_report)
#         db.session.commit()

#         # -------------- SEND EMAIL --------------
#         try:
#             msg = Message(
#                 subject=f"🚨 New Animal Report - {validated_data['animal_type']}",
#                 recipients=["adanjelle4@gmail.com"],  # Where notifications go
#             )
#             msg.body = f"""
# A new animal incident report has been submitted.

# 📌 Reporter Info:
# - Name: {validated_data['sender_name']}
# - Email: {validated_data['sender_email']}
# - Address: {validated_data['sender_address']}

# 🐾 Report Details:
# - Animal Type: {validated_data['animal_type']}
# - Damage Description: {validated_data['damage_description']}

# """

#             # Attach image if available
#             if file:
#                 with open(file_path, "rb") as fp:
#                     msg.attach(filename, file.content_type, fp.read())

#             mail.send(msg)
#             print("✅ Email sent successfully!")

#         except Exception as e:
#             print("❌ Failed to send email:", str(e))


#         return jsonify(report_schema.dump(new_report)), 201

#     except Exception as e:
#         return jsonify({'error': str(e)}), 500
# # Send email when report is submitted
# def send_report_email(to_email, name, animal_type):
#     msg = Message(
#         'Report Successfully Submitted to Wilfie Rescue Hub',
#         recipients=[to_email]
#     )
#     msg.body = f"Dear {name},\n\nThank you for submitting a report regarding the animal: {animal_type}. We have received your report and will process it as soon as possible.\n\nBest regards,\nWilfie Rescue Hub Team"
    
#     try:
#         mail.send(msg)
#     except Exception as e:
#         print(f"Error sending email: {e}")

# ## Get All Reports Route

# @app.route('/reports', methods=['GET'])
# def get_reports():
#     reports = Report.query.all()
#     return jsonify(reports_schema.dump(reports)), 200

# @app.route('/reports/<int:id>', methods=['DELETE'])
# def delete_report(id):
#     report = Report.query.get(id)
#     if not report:
#         return jsonify({'error': 'Report not found'}), 404

#     if report.image_path:
#         try:
#             os.remove(report.image_path)
#         except Exception as e:
#             print(f"Failed to delete image: {e}")

#     db.session.delete(report)
#     db.session.commit()
#     return jsonify({'message': 'Report deleted successfully'}), 200

# @app.route('/reports/<int:id>', methods=['PUT'])
# def update_report(id):
#     report = Report.query.get(id)
#     if not report:
#         return jsonify({'error': 'Report not found'}), 404

#     if request.is_json:
#         data = request.get_json()
#     else:
#         data = request.form.to_dict()

#     report.animal_type = data.get('animal_type', report.animal_type)
#     report.damage_description = data.get('damage_description', report.damage_description)
#     report.sender_name = data.get('sender_name', report.sender_name)
#     report.sender_email = data.get('sender_email', report.sender_email)
#     report.sender_address = data.get('sender_address', report.sender_address)

#     if not request.is_json:  # Handle image if form-data
#         file = request.files.get('image')
#         if file:
#             filename = secure_filename(file.filename)
#             file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
#             file.save(file_path)

#             if report.image_path:
#                 try:
#                     os.remove(report.image_path)
#                 except Exception as e:
#                     print(f"Failed to delete old image: {e}")
#             report.image_path = file_path

#     db.session.commit()
#     return jsonify(report_schema.dump(report)), 200

# @app.route('/uploads/<filename>', methods=['GET'])
# def serve_image(filename):
#     return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# # ---------------- MAIN ----------------
# if __name__ == '__main__':
#     with app.app_context():
#         db.create_all()
#     app.run(debug=True)
from flask_mail import Mail, Message
import os
from flask import Flask, request, jsonify, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from marshmallow import Schema, fields, ValidationError
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)

# ---------------- MAIL CONFIG ----------------
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USERNAME'] = 'adanjelle4@gmail.com'  # your Gmail
app.config['MAIL_PASSWORD'] = 'clel oizd ofsy jytu'       # Gmail App Password
app.config['MAIL_DEFAULT_SENDER'] = ('Wildlife Rescue Hub', 'adanjelle4@gmail.com')

mail = Mail(app)

# ---------------- DB CONFIG ----------------
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = './uploads'
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
db = SQLAlchemy(app)

# ---------------- MODELS ----------------
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

# ---------------- SCHEMAS ----------------
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

# ---------------- EMAIL HELPER ----------------
def send_report_email(to_email, name, animal_type):
    """Send confirmation email to the reporter"""
    msg = Message(
        '✅ Report Successfully Submitted - Wildlife Rescue Hub',
        recipients=[to_email]
    )
    msg.body = f"""
Dear {name},

Thank you for submitting a report regarding the animal: {animal_type}.
We have received your report and our team will review it as soon as possible.

Best regards,
Wildlife Rescue Hub Team
"""
    try:
        mail.send(msg)
        print(f"✅ Confirmation email sent to reporter: {to_email}")
    except Exception as e:
        print(f"❌ Failed to send confirmation email: {e}")

# ---------------- ROUTES ----------------

@app.route('/api/contact', methods=['POST'])
def create_contact():
    try:
        data = request.json
        validated_data = contact_schema.load(data)
        new_contact = Contact(**validated_data)
        db.session.add(new_contact)
        db.session.commit()
        return jsonify(contact_schema.dump(new_contact)), 201
    except ValidationError as err:
        return jsonify(err.messages), 400

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

        # Save file if exists
        file = request.files.get('image')
        if file:
            filename = secure_filename(file.filename)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(file_path)
            validated_data["image_path"] = file_path

        # Save to DB
        new_report = Report(**validated_data)
        db.session.add(new_report)
        db.session.commit()

        # -------- Send Admin Email --------
        try:
            msg = Message(
                subject=f"🚨 New Animal Report - {validated_data['animal_type']}",
                recipients=["adanjelle4@gmail.com"],  # Admin email
            )
            msg.body = f"""
A new animal incident report has been submitted.

📌 Reporter Info:
- Name: {validated_data['sender_name']}
- Email: {validated_data['sender_email']}
- Address: {validated_data['sender_address']}

🐾 Report Details:
- Animal Type: {validated_data['animal_type']}
- Damage Description: {validated_data['damage_description']}
"""
            if file:
                with open(file_path, "rb") as fp:
                    msg.attach(filename, file.content_type, fp.read())

            mail.send(msg)
            print("✅ Admin notification email sent!")

            # -------- Send Reporter Confirmation --------
            send_report_email(
                validated_data['sender_email'],
                validated_data['sender_name'],
                validated_data['animal_type']
            )

        except Exception as e:
            print("❌ Failed to send admin email:", str(e))

        return jsonify(report_schema.dump(new_report)), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500

# ---------------- REPORT ROUTES ----------------

@app.route('/reports', methods=['GET'])
def get_reports():
    reports = Report.query.all()
    return jsonify(reports_schema.dump(reports)), 200

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

@app.route('/reports/<int:id>', methods=['PUT'])
def update_report(id):
    report = Report.query.get(id)
    if not report:
        return jsonify({'error': 'Report not found'}), 404

    if request.is_json:
        data = request.get_json()
    else:
        data = request.form.to_dict()

    report.animal_type = data.get('animal_type', report.animal_type)
    report.damage_description = data.get('damage_description', report.damage_description)
    report.sender_name = data.get('sender_name', report.sender_name)
    report.sender_email = data.get('sender_email', report.sender_email)
    report.sender_address = data.get('sender_address', report.sender_address)

    if not request.is_json:  # Handle image if form-data
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

@app.route('/uploads/<filename>', methods=['GET'])
def serve_image(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# ---------------- MAIN ----------------
if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
