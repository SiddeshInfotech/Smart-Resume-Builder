# Smart Resume Builder - Backend

This is the Flask backend for the Smart Resume Builder application. It is structured to connect to a MySQL database using SQLAlchemy ORM.

## Project Structure

```text
backend/
├── app.py              # Application entry point & factory
├── config.py           # Configuration manager
├── requirements.txt    # Python dependencies
├── .env                # Local environment variables
├── database/           # Database initialization and connection tests
│   ├── __init__.py
│   └── test_connection.py
├── models/             # SQLAlchemy ORM database models
│   └── __init__.py
├── routes/             # API route controllers (blueprints)
│   └── __init__.py
├── services/           # Business logic layer
│   └── __init__.py
└── utils/              # Helper utilities
    └── __init__.py
```

## Setup & Run Instructions

### 1. Create a Virtual Environment

```bash
python -m venv venv
venv\Scripts\activate      # Windows (Command Prompt)
# or
# venv\Scripts\Activate.ps1 # Windows (PowerShell)
# or
# source venv/bin/activate  # macOS / Linux
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Database Configuration

Create/update your `backend/.env` file with the correct MySQL credentials:

```env
FLASK_APP=app.py
FLASK_ENV=development
SECRET_KEY=dev-secret-key-12345
DATABASE_URL=mysql+pymysql://<user>:<password>@<host>:<port>/<db_name>
JWT_SECRET_KEY=dev-jwt-secret-key-12345
```

### 4. Test Database Connection

Verify that SQLAlchemy can connect to the database:

```bash
python database/test_connection.py
```

### 5. Run the Server

```bash
flask run --debug
```
