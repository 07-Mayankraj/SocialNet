const mongoose = require('mongoose');
const postchema = mongoose.Schema({


    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    text: String,
    image: String,
    createdAt: Date,
    likes: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    comments: [{
        user: { type: mongoose.Schema.ObjectId, ref: 'User' },
        text: String,
        createdAt: Date
    }]

})

const PostModel = new mongoose.model('Post', postchema)
module.exports = { PostModel };