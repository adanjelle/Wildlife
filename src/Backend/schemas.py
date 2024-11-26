from marshmallow import Schema, fields

class ContactSchema(Schema):
    name = fields.String(required=True)
    email = fields.Email(required=True)
    phone = fields.String(required=False)
    address = fields.String(required=False)
    message = fields.String(required=True)
