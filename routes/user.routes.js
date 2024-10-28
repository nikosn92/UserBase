const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Get all users
router.get('/', userController.findAll);

// Get user by username
router.get('/:username', userController.findOne);

// Handle form submission (POST /submit)
router.post('/submit', userController.create);

module.exports = router;
