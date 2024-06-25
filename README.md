# login_using_JWT
JWT Authentication Project
This project demonstrates a simple login/logout system using JSON Web Tokens (JWT) for authentication. Users can register, login, and logout securely using JWT tokens stored as HTTP-only cookies.

To run this project locally, follow these steps:

Clone the repository:

git clone https://github.com/your-username/auth-system.git
Navigate to the project directory:

cd auth-system
Install dependencies:

npm install express mongoose bcryptjs jsonwebtoken cookie-parser ejs

Set up MongoDB:

Make sure MongoDB is installed and running on your system.
Create a database named auth-system or adjust the MongoDB connection URL in config/db.js as needed.
Set environment variables:

Create a .env file in the root directory with the following content:

JWT_SECRET=your_jwt_secret_key
Replace your_jwt_secret_key with your own secret key for JWT token encryption.

Start the server:

node server.js
Access the application:

Open your web browser and navigate to http://localhost:3000 to view the application.

Usage
Register: Navigate to /register to create a new user account.
Login: Navigate to /login to enter your credentials and log in.
Logout: Click the "Logout" button on the home page (/) to log out.
Dependencies
Express: Fast, unopinionated, minimalist web framework for Node.js.
Mongoose: Elegant MongoDB object modeling for Node.js.
bcryptjs: Library for hashing passwords.
jsonwebtoken: JSON Web Token implementation for Node.js.
cookie-parser: Middleware to parse cookies.
EJS: Embedded JavaScript templating.
Contributing
Contributions are welcome! Feel free to fork this repository, create pull requests, and suggest improvements. Please adhere to the Contributor Covenant code of conduct.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Notes:
Ensure MongoDB is running and accessible.
Replace your_jwt_secret_key with a secure key in production environments.
Modify routes and views (views/) as per your project requirements.
This README file provides clear instructions for downloading, installing dependencies, setting up MongoDB, starting the server, and accessing the application. It also outlines basic usage and dependencies used in the project. Adjust the instructions and details according to any specific configurations or additional features your project may have.
