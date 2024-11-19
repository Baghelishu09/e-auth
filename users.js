const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = mongoose.Schema({
    name: String,
    uname: String,
    email: String,
    mobileNo: Number,
    password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
