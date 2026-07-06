from flask import Flask, request, jsonify

app = Flask(__name__)

# Temporary storage
users = {}

# Home API
@app.route('/')
def home():
    return jsonify({"message": "Authentication API is running"})

# Signup API
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()

    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    if email in users:
        return jsonify({"message": "User already exists"}), 400

    users[email] = {
        "username": username,
        "password": password
    }

    return jsonify({"message": "Signup Successful"}), 201

# Login API
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    if email not in users:
        return jsonify({"message": "User not found"}), 404

    if users[email]["password"] != password:
        return jsonify({"message": "Incorrect Password"}), 401

    return jsonify({
        "message": "Login Successful",
        "username": users[email]["username"]
    }), 200

# Forgot Password API
@app.route('/forgot-password', methods=['PUT'])
def forgot_password():
    data = request.get_json()

    email = data.get("email")
    new_password = data.get("new_password")

    if email not in users:
        return jsonify({"message": "User not found"}), 404

    users[email]["password"] = new_password

    return jsonify({"message": "Password Updated Successfully"}), 200

if __name__ == '__main__':
    app.run(debug=True)