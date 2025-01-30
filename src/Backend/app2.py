from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token
from flask_mail import Mail, Message
from flask_cors import CORS
import traceback
import os

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Secret keys and configurations
app.config['SECRET_KEY'] = 'your_secret_key'
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'

# SQLAlchemy database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Flask-Mail configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = 'adanjelle4@gmail.com'  # Your email address
app.config['MAIL_PASSWORD'] = 'bjaw jiwl tjak zaws'   # Your app password
app.config['MAIL_DEFAULT_SENDER'] = 'wildliferescue18@gmail.co'  # Optional, but good to have

# Initialize extensions
db = SQLAlchemy(app)
ma = Marshmallow(app)
jwt = JWTManager(app)
mail = Mail(app)

# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100))
    last_name = db.Column(db.String(100))
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200))
    country = db.Column(db.String(100))
    phone_number = db.Column(db.String(100))

    def __init__(self, first_name, last_name, username, email, password, country, phone_number):
        self.first_name = first_name
        self.last_name = last_name
        self.username = username
        self.email = email
        self.password = password
        self.country = country
        self.phone_number = phone_number

# User schema for serialization
class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User
        load_instance = True

# Sign-up route
@app.route('/signup', methods=['POST'])
def sign_up():
    data = request.get_json()
    print("Received data:", data)

    # Check for missing fields
    required_fields = ['firstName', 'lastName', 'username', 'email', 'password', 'country', 'phoneNumber']
    missing_fields = [field for field in required_fields if field not in data]
    if missing_fields:
        return jsonify({'message': f'Missing fields: {", ".join(missing_fields)}'}), 400

    try:
        # Check if username or email already exists
        user_exists = User.query.filter((User.email == data['email']) | (User.username == data['username'])).first()
        if user_exists:
            return jsonify({'message': 'User with this email or username already exists'}), 400

        # Hash the password
        hashed_password = generate_password_hash(data['password'])

        # Create new user
        new_user = User(
            first_name=data['firstName'],
            last_name=data['lastName'],
            username=data['username'],
            email=data['email'],
            password=hashed_password,
            country=data['country'],
            phone_number=data['phoneNumber']
        )
        db.session.add(new_user)
        db.session.commit()

        # Serialize user data
        user_schema = UserSchema()
        result = user_schema.dump(new_user)

        return jsonify({'success': True, 'user': result}), 201
    except Exception as e:
        print("An error occurred:", str(e))
        print(traceback.format_exc())
        return jsonify({'message': 'An error occurred during sign-up'}), 400

# Login route
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    # Check for missing fields
    if 'email' not in data or 'password' not in data:
        return jsonify({'message': 'Missing email or password'}), 400

    email = data['email']
    password = data['password']

    try:
        # Check if the user exists
        user = User.query.filter_by(email=email).first()
        if not user:
            return jsonify({'message': 'User not found'}), 404

        # Check if password is correct
        if not check_password_hash(user.password, password):
            return jsonify({'message': 'Invalid password'}), 401

        # Generate JWT token
        access_token = create_access_token(identity=user.id)
        return jsonify({
            'message': 'Login successful',
            'access_token': access_token
        }), 200
    except Exception as e:
        print("An error occurred:", str(e))
        print(traceback.format_exc())
        return jsonify({'message': 'An error occurred during login'}), 400

# Forgot password route
@app.route('/forgot-password', methods=['POST'])
def forgot_password():
    data = request.get_json()

    # Check if email is provided
    if 'email' not in data:
        return jsonify({'message': 'Email is required'}), 400

    email = data['email']

    try:
        # Check if the user exists
        user = User.query.filter_by(email=email).first()
        if not user:
            return jsonify({'message': 'User with this email does not exist'}), 404

        # Generate a reset link or token (for simplicity, sending a token here)
        reset_token = create_access_token(identity=user.id)

        # Construct the email
        subject = "Password Reset Request"
        reset_link = f"http://your-frontend-url/reset-password/{reset_token}"
        body = f"""
        Hi {user.first_name},

        You recently requested to reset your password. Click the link below to reset it:

        {reset_link}

        If you did not request this, please ignore this email.

        Best,
        Wildlife Rescue Team
        """

        # Send email
        msg = Message(subject, recipients=[email], body=body)
        mail.send(msg)

        return jsonify({'message': 'Password reset email sent successfully'}), 200

    except Exception as e:
        print("Error:", str(e))
        return jsonify({'message': 'An error occurred while processing the request'}), 500

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Ensure the database and tables are created
    app.run(debug=True, port=5001)
