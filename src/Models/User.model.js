const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    contraseña:{
        type: String,
        required: true
    }
});
const User = mongoose.model('User', userSchema);
module.exports = User;