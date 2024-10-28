const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: /\S+@\S+\.\S+/ },
    sex: { type: String, enum: ['male', 'female'], required: true }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);