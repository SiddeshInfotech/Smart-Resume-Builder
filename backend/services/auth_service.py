from models.user import User
from database import db
from extensions import bcrypt
from flask_jwt_extended import create_access_token

class AuthService:
    @staticmethod
    def register_user(username, email, password):
        if not username or not email or not password:
            return {"message": "All fields are required"}, 400

        # Check if user already exists by email
        if User.query.filter_by(email=email).first():
            return {"message": "User already exists"}, 400
        
        # Check if username is taken
        if User.query.filter_by(username=username).first():
            return {"message": "Username already exists"}, 400

        # Hash password and create user
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        new_user = User(username=username, email=email, password_hash=hashed_password)

        db.session.add(new_user)
        db.session.commit()

        return {"message": "Signup Successful"}, 201

    @staticmethod
    def login_user(email, password):
        if not email or not password:
            return {"message": "Email and password are required"}, 400

        user = User.query.filter_by(email=email).first()
        if not user:
            return {"message": "User not found"}, 404

        if not bcrypt.check_password_hash(user.password_hash, password):
            return {"message": "Incorrect Password"}, 401

        # Generate JWT Token
        access_token = create_access_token(identity=str(user.id))
        return {
            "message": "Login Successful",
            "token": access_token,
            "username": user.username
        }, 200

    @staticmethod
    def reset_password(email, new_password):
        if not email or not new_password:
            return {"message": "Email and new password are required"}, 400

        user = User.query.filter_by(email=email).first()
        if not user:
            return {"message": "User not found"}, 404

        # Hash new password and update
        hashed_password = bcrypt.generate_password_hash(new_password).decode('utf-8')
        user.password_hash = hashed_password
        db.session.commit()

        return {"message": "Password Updated Successfully"}, 200
