# UserBase

UserBase is a basic user management application built with Node.js, Express, and MongoDB. It provides functionality for creating, retrieving, and displaying user profiles. The application is designed with a focus on simplicity and ease of understanding, making it suitable for learning purposes or as a base for further expansion.


## Features
- **User Creation**: Submit a form to create a new user profile, including fields like username, name, surname, email, and gender.
- **Retrieve All Users**: View a list of all users stored in the database.
- **Retrieve Single User**: Search and retrieve a single user by username.
- **Responsive Views**: Rendered using EJS templates for basic front-end representation.

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/UserBase.git
   cd UserBase
   
### 2. Install Dependencies
Ensure you have Node.js installed on your system, then install the required dependencies by running:

```bash
npm install
```
### 3. Configure Environment Variables
To set up your MongoDB connection securely, create a `.env` file in the root directory of your project and add the MongoDB URI as shown below:

```plaintext
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>?retryWrites=true&w=majority
```
Replace <username>, <password>, and <database> with your actual MongoDB credentials and database name. This setup keeps sensitive information out of your codebase.

### 4. Run the Application
To start the server, use the following command:

```bash
npm start
```
By default, the application will be running at http://localhost:3000, where you can access and interact with the app.

### 5. Project Structure
The project follows a structured layout to organize files efficiently:

```plaintext
UserBase/
├── controllers/
│   └── user.controller.js     # Logic for handling user-related requests
├── models/
│   └── user.model.js          # Mongoose schema for user profiles
├── routes/
│   └── user.routes.js         # API endpoints for user operations
├── views/
│   ├── index.ejs              # Form for creating new users
│   ├── submitted.ejs          # Success page after user creation
│   └── users.ejs              # Page to display all users
├── .env                       # Environment variables (MongoDB URI)
├── .gitignore                 # Git ignored files (node_modules, .env)
├── package.json               # Project metadata and scripts
└── index.js                   # Main server file
```
### API Endpoints
The application provides the following API endpoints to interact with user data:

- **`GET /users`** - Retrieves all users from the database and renders them in the `users` view.

- **`GET /users/:username`** - Retrieves a specific user by `username` and returns the user’s data in JSON format.

- **`POST /users/submit`** - Submits a new user form, creates a user in the database, and renders a success page showing the user’s information.

Each endpoint is designed to handle requests for user management, providing responses either in JSON format or by rendering a view, depending on the purpose of the request.

### Technologies Used
This project was built using the following technologies:

- **Node.js**: JavaScript runtime environment for server-side programming.
- **Express**: Web framework for Node.js to manage routes, middleware, and server-side logic.
- **MongoDB & Mongoose**: Database and ORM (Object-Relational Mapping) tool for managing and interacting with user data.
- **EJS (Embedded JavaScript)**: Template engine used to render views and pass dynamic data to the front end.
- **dotenv**: Environment variable management to securely configure and store sensitive information like the MongoDB URI.

