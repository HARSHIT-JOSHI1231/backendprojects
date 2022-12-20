const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    }
},{
    timestams: true
});

const user = mongoose.model('User', userSchema);
module.exports = User;