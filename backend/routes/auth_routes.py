from flask import Blueprint, request, jsonify
from services.auth_service import AuthService

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/signup', methods=['POST'])
def signup():
    """
    User Registration
    ---
    tags:
      - Authentication
    parameters:
      - in: body
        name: body
        required: true
        schema:
          type: object
          required:
            - username
            - email
            - password
          properties:
            username:
              type: string
              example: john_doe
            email:
              type: string
              example: john@example.com
            password:
              type: string
              example: securepassword123
    responses:
      201:
        description: Signup Successful
        schema:
          type: object
          properties:
            message:
              type: string
              example: Signup Successful
      400:
        description: Bad Request (Missing fields or user already exists)
    """
    data = request.get_json() or {}
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    response, status_code = AuthService.register_user(username, email, password)
    return jsonify(response), status_code

@auth_bp.route('/login', methods=['POST'])
def login():
    """
    User Login
    ---
    tags:
      - Authentication
    parameters:
      - in: body
        name: body
        required: true
        schema:
          type: object
          required:
            - email
            - password
          properties:
            email:
              type: string
              example: john@example.com
            password:
              type: string
              example: securepassword123
    responses:
      200:
        description: Login Successful
        schema:
          type: object
          properties:
            message:
              type: string
              example: Login Successful
            token:
              type: string
              example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
            username:
              type: string
              example: john_doe
      400:
        description: Missing fields
      401:
        description: Incorrect Password
      404:
        description: User not found
    """
    data = request.get_json() or {}
    email = data.get('email')
    password = data.get('password')

    response, status_code = AuthService.login_user(email, password)
    return jsonify(response), status_code

@auth_bp.route('/forgot-password', methods=['PUT'])
def forgot_password():
    """
    Forgot Password
    ---
    tags:
      - Authentication
    parameters:
      - in: body
        name: body
        required: true
        schema:
          type: object
          required:
            - email
            - new_password
          properties:
            email:
              type: string
              example: john@example.com
            new_password:
              type: string
              example: newsecurepassword456
    responses:
      200:
        description: Password Updated Successfully
        schema:
          type: object
          properties:
            message:
              type: string
              example: Password Updated Successfully
      400:
        description: Missing fields
      404:
        description: User not found
    """
    data = request.get_json() or {}
    email = data.get('email')
    new_password = data.get('new_password')

    response, status_code = AuthService.reset_password(email, new_password)
    return jsonify(response), status_code
