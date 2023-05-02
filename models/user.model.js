const mongoose = require('mongoose');
const userschema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    dob: Date,
    bio: String,
    posts: [{ type: mongoose.Schema.ObjectId, ref: 'Post' }],
    friends: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    friendRequests: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]

}) 

const UserModel = new mongoose.model('User',userschema)
module.exports = { UserModel };