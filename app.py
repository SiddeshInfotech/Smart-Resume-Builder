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

# Temporary resume storage
resumes = {}
resume_id_counter = 1

# Create Resume API
@app.route('/create-resume', methods=['POST'])
def create_resume():
    global resume_id_counter
    data = request.get_json() or {}
    
    name = data.get("name")
    email = data.get("email")
    phone = data.get("phone")
    summary = data.get("summary")

    if not name or not email:
        return jsonify({"message": "Name and Email are required fields"}), 400

    resume_id = str(resume_id_counter)
    resumes[resume_id] = {
        "id": resume_id,
        "name": name,
        "email": email,
        "phone": phone or "",
        "summary": summary or "",
        "education": [],
        "skills": [],
        "projects": [],
        "experience": [],
        "profile_photo": ""
    }
    resume_id_counter += 1

    return jsonify({
        "message": "Resume Created Successfully",
        "resume": resumes[resume_id]
    }), 201

# Get Resume by ID API
@app.route('/get-resume/<id>', methods=['GET'])
def get_resume(id):
    if id not in resumes:
        return jsonify({"message": "Resume not found"}), 404
    return jsonify(resumes[id]), 200

# Update Resume API
@app.route('/update-resume/<id>', methods=['PUT'])
def update_resume(id):
    if id not in resumes:
        return jsonify({"message": "Resume not found"}), 404
    
    data = request.get_json() or {}
    
    # Update fields if provided in request
    if "name" in data:
        resumes[id]["name"] = data["name"]
    if "email" in data:
        resumes[id]["email"] = data["email"]
    if "phone" in data:
        resumes[id]["phone"] = data["phone"]
    if "summary" in data:
        resumes[id]["summary"] = data["summary"]

    return jsonify({
        "message": "Resume Updated Successfully",
        "resume": resumes[id]
    }), 200

# Delete Resume API
@app.route('/delete-resume/<id>', methods=['DELETE'])
def delete_resume(id):
    if id not in resumes:
        return jsonify({"message": "Resume not found"}), 404
    
    del resumes[id]
    return jsonify({"message": "Resume Deleted Successfully"}), 200

# List All Resumes API
@app.route('/list-resumes', methods=['GET'])
def list_resumes():
    return jsonify(list(resumes.values())), 200

# Add Education API
@app.route('/add-education', methods=['POST'])
def add_education():
    data = request.get_json() or {}
    resume_id = data.get("resume_id")
    school = data.get("school")
    degree = data.get("degree")
    year = data.get("year")

    if not resume_id or not school or not degree or not year:
        return jsonify({"message": "resume_id, school, degree, and year are required fields"}), 400

    resume_id = str(resume_id)
    if resume_id not in resumes:
        return jsonify({"message": "Resume not found"}), 404

    education_entry = {
        "school": school,
        "degree": degree,
        "year": year
    }
    resumes[resume_id]["education"].append(education_entry)

    return jsonify({
        "message": "Education Added Successfully",
        "resume": resumes[resume_id]
    }), 201

# Add Skills API
@app.route('/add-skills', methods=['POST'])
def add_skills():
    data = request.get_json() or {}
    resume_id = data.get("resume_id")
    skills = data.get("skills")

    if not resume_id or not isinstance(skills, list):
        return jsonify({"message": "resume_id and a list of skills are required fields"}), 400

    resume_id = str(resume_id)
    if resume_id not in resumes:
        return jsonify({"message": "Resume not found"}), 404

    # Append new skills without duplicates
    for skill in skills:
        if skill not in resumes[resume_id]["skills"]:
            resumes[resume_id]["skills"].append(skill)

    return jsonify({
        "message": "Skills Added Successfully",
        "resume": resumes[resume_id]
    }), 201

# Add Projects API
@app.route('/add-project', methods=['POST'])
def add_project():
    data = request.get_json() or {}
    resume_id = data.get("resume_id")
    title = data.get("title")
    description = data.get("description")
    technologies = data.get("technologies")

    if not resume_id or not title:
        return jsonify({"message": "resume_id and title are required fields"}), 400

    resume_id = str(resume_id)
    if resume_id not in resumes:
        return jsonify({"message": "Resume not found"}), 404

    project_entry = {
        "title": title,
        "description": description or "",
        "technologies": technologies or []
    }
    resumes[resume_id]["projects"].append(project_entry)

    return jsonify({
        "message": "Project Added Successfully",
        "resume": resumes[resume_id]
    }), 201

# Add Experience API
@app.route('/add-experience', methods=['POST'])
def add_experience():
    data = request.get_json() or {}
    resume_id = data.get("resume_id")
    company = data.get("company")
    role = data.get("role")
    duration = data.get("duration")
    description = data.get("description")

    if not resume_id or not company or not role or not duration:
        return jsonify({"message": "resume_id, company, role, and duration are required fields"}), 400

    resume_id = str(resume_id)
    if resume_id not in resumes:
        return jsonify({"message": "Resume not found"}), 404

    experience_entry = {
        "company": company,
        "role": role,
        "duration": duration,
        "description": description or ""
    }
    resumes[resume_id]["experience"].append(experience_entry)

    return jsonify({
        "message": "Experience Added Successfully",
        "resume": resumes[resume_id]
    }), 201

# Upload Profile Photo API (Mock)
@app.route('/upload-profile-photo', methods=['POST'])
def upload_profile_photo():
    data = request.get_json() or {}
    resume_id = data.get("resume_id")
    photo_url = data.get("photo_url")

    if not resume_id or not photo_url:
        return jsonify({"message": "resume_id and photo_url are required fields"}), 400

    resume_id = str(resume_id)
    if resume_id not in resumes:
        return jsonify({"message": "Resume not found"}), 404

    resumes[resume_id]["profile_photo"] = photo_url

    return jsonify({
        "message": "Profile Photo Uploaded Successfully (Mock)",
        "resume": resumes[resume_id]
    }), 201

# Generate Resume PDF API (Dummy)
@app.route('/generate-resume-pdf/<id>', methods=['GET'])
def generate_resume_pdf(id):
    if id not in resumes:
        return jsonify({"message": "Resume not found"}), 404
    
    dummy_pdf_url = f"http://127.0.0.1:5000/downloads/resume_{id}.pdf"
    
    return jsonify({
        "message": "PDF Generated Successfully (Dummy)",
        "download_url": dummy_pdf_url
    }), 200

# Search Resume by Name API
@app.route('/search-resume', methods=['GET'])
def search_resume():
    name_query = request.args.get("name", "").strip().lower()
    
    if not name_query:
        return jsonify({"message": "name query parameter is required"}), 400

    results = []
    for r in resumes.values():
        if name_query in r["name"].lower():
            results.append(r)

    return jsonify(results), 200

# Change Password API
@app.route('/change-password', methods=['PUT'])
def change_password():
    data = request.get_json() or {}
    email = data.get("email")
    old_password = data.get("old_password")
    new_password = data.get("new_password")

    if not email or not old_password or not new_password:
        return jsonify({"message": "email, old_password, and new_password are required fields"}), 400

    if email not in users:
        return jsonify({"message": "User not found"}), 404

    if users[email]["password"] != old_password:
        return jsonify({"message": "Incorrect Old Password"}), 401

    users[email]["password"] = new_password
    return jsonify({"message": "Password Changed Successfully"}), 200

# Logout API (Mock)
@app.route('/logout', methods=['POST'])
def logout():
    return jsonify({"message": "Logout successful"}), 200

if __name__ == '__main__':
    app.run(debug=True)