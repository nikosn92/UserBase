# 👥 UserBase

![GitHub repo size](https://img.shields.io/github/repo-size/nikosn92/UserBase)
![GitHub contributors](https://img.shields.io/github/contributors/nikosn92/UserBase)
![GitHub stars](https://img.shields.io/github/stars/nikosn92/UserBase?style=social)
![GitHub forks](https://img.shields.io/github/forks/nikosn92/UserBase?style=social)

## 📌 Introduction

**UserBase** is a basic user management application built with Node.js, Express, and MongoDB. It provides functionality for creating, retrieving, and displaying user profiles. The application is designed with a focus on simplicity and ease of understanding, making it suitable for learning purposes or as a base for further expansion.

---

## 🚀 Features

- 📝 **User Creation**: Submit a form to create a new user profile, including fields like username, name, surname, email, and gender.
- 🔍 **Retrieve All Users**: View a list of all users stored in the database.
- 👤 **Retrieve Single User**: Search and retrieve a single user by username.
- 🎨 **Responsive Views**: Rendered using EJS templates for basic front-end representation.

---

## 🛠️ Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [EJS (Embedded JavaScript)](https://ejs.co/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 📦 Installation

To set up the project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/nikosn92/UserBase.git

# Navigate to the project directory
cd UserBase

# Install dependencies
npm install
```

### 🔧 Configure Environment Variables

Create a `.env` file in the root directory and add your MongoDB connection string:
```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>?retryWrites=true&w=majority
```
Replace `<username>`, `<password>`, and `<database>` with your actual MongoDB credentials.

### ▶️ Run the Application
```bash
npm start
```
By default, the application will be running at:
[http://localhost:3000](http://localhost:3000/)

---

## 📂 Project Structure

```
UserBase/
├── controllers/
│   └── user.controller.js     # Handles user-related requests
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

---

## 🔗 API Endpoints

- **`GET /users`** - Retrieves all users from the database and renders them in the `users` view.
- **`GET /users/:username`** - Retrieves a specific user by `username` and returns the user’s data in JSON format.
- **`POST /users/submit`** - Submits a new user form, creates a user in the database, and renders a success page.

---

 

## 📜 License

This project is licensed under the [MIT License](https://opensource.org/license/mit)

---
 
