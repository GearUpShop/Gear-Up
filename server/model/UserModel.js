const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    profileImage: { type: String },
    role: { type: String, enum: ['user', 'admin'], default: 'admin' },
    isDeleted: { type: Boolean, default: false, required: true  },

});

const User = mongoose.model('User', userSchema);

module.exports = User;
