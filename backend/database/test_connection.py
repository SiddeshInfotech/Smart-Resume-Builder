import sys
import os

# Ensure the parent directory is in the path so we can import app and database
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from app import create_app
from database import db
from sqlalchemy import text

app = create_app()

print("Testing database connection...")
try:
    with app.app_context():
        # Execute a simple query
        result = db.session.execute(text("SELECT 1"))
        print(f"Connection Successful! Test query returned: {result.scalar()}")
except Exception as e:
    print(f"Connection failed: {e}", file=sys.stderr)
    sys.exit(1)
