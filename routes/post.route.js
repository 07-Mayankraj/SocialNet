const express = require('express');
const { PostModel } = require('../models/post.model');

const postRouter = express.Router();

// register

// get all registered users
postRouter.get('/', async (req, res) => {
    try {
        let post = await PostModel.find();
        res.status(200).send(post)
    } catch (error) {
        res.status(404).send(error.message);
    }
})

// register a new user
postRouter.post('/', async (req, res) => {
    let postdeteails = req.body;
    console.log({ postdeteails });

    try {
        let newpost = new PostModel(postdeteails);
        await newpost.save();
        res.status(201).send('post created successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }

})


// updating a post by id
postRouter.patch('/:id', async (req, res) => {
    let id = req.params.id;

    try {
        await PostModel.findByIdAndUpdate(id, req.body);
        res.status(204).send("post updated successfully")
    } catch (error) {
        res.status(404).send(error.message);
    }
})

// detail of spefic post by id 
postRouter.get('/:id', async (req, res) => {
    let id = req.params.id;

    try {
        let post = await PostModel.findById(id);
        res.status(200).send(post)
    } catch (error) {
        res.status(404).send(error.message);
    }
})
// updating a post by id
postRouter.delete('/:id', async (req, res) => {
    let id = req.params.id;

    try {
        await PostModel.findByIdAndDelete(id);
        res.status(202).send("post deleted successfully")
    } catch (error) {
        res.status(404).send(error.message);
    }
})

// like a particular post
postRouter.post('/:id/like', async (req, res) => {
    let id = req.params.id;
    let userId = req.body.userId;

    try {
        let post = await PostModel.findById(id);
        post.likes.push(userId);
        await post.save();

        res.status(202).send("Post liked ❤")
    } catch (error) {
        res.status(404).send(error.message);
    }
})


// adding comments 
postRouter.post('/:id/comment', async (req, res) => {
    let id = req.params.id;
    try {
        let post = await PostModel.findById(id);
        post.comments.push(req.body);
        await post.save();

        res.status(202).send("comment added ❤")
    } catch (error) {
        res.status(404).send(error.message);
    }
})




module.exports = { postRouter }