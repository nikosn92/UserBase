    const User = require('../models/user.model');

    exports.findAll = async (req, res) => {
        try {
            const users = await User.find();
            res.render('users', { users });
        } catch (err) {
            res.json({ status: false, message: err });
        }
    };

    exports.findOne = async (req, res) => {
        const username = req.params.username;
        try {
            const user = await User.findOne({ username });
            res.json({ status: true, data: user });
        } catch (err) {
            res.json({ status: false, message: err });
        }
    };

    exports.create = async (req, res) => {
        const { username, password, name, surname, email, sex } = req.body;
        console.log('Received data:', req.body);  // Log received data
        try {
            const user = new User({ username, password, name, surname, email, sex });
            await user.save();
            res.render('submitted', { name, surname, email, sex });
        } catch (err) {
            console.error('Error saving user:', err);  // Log the error for debugging
            res.json({ status: false, message: err });
        }
    };