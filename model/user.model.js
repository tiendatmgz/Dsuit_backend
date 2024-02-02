const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fullName: {
        type: String, required: true
    },
    phoneNum: {
        type: Number, required: true
    },
    email: {
        type: String, required: true
    },
    password: {
        type: String, required: true
    },
    address: {
        type: String
    },
    order: {
        type: [String]
    },
}, {
    timestamps: true
});

const User = mongoose.model('users', userSchema);
module.exports = { User } 