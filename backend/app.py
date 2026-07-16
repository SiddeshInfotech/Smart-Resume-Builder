from flask import Flask, jsonify
from flasgger import Swagger
from config import Config
from database import db
from extensions import bcrypt, jwt
from routes import auth_bp

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # Initialize extensions
    db.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)
    
    # Initialize Swagger
    swagger = Swagger(app)

    # Register blueprints
    app.register_blueprint(auth_bp, url_prefix='/api/auth')

    # Basic Home route for health check
    @app.route('/')
    def home():
        return jsonify({
            "message": "Smart Resume Builder Backend API is running",
            "status": "success",
            "docs": "/apidocs"
        }), 200

    # Ensure tables are created
    with app.app_context():
        import models  # Force registration of models
        db.create_all()

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
