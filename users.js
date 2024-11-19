const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/userDB');

const userSchema = mongoose.Schema({
    name: String,
    uname: String,
    email: String,
    mobileNo: Number,
    password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
