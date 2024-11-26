class Contact:
    def __init__(self, name, email, phone, company, message):
        self.name = name
        self.email = email
        self.phone = phone
        self.address = address
        self.message = message
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

db = SQLAlchemy()
bcrypt = Bcrypt()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
