const express = require('express');
const { UserModel } = require("../models/user.model");
const bcrypt = require('bcrypt');
const userRouter = express.Router();

// register

// get all registered users
userRouter.get('/', async (req, res) => {
    try {
        let users = await UserModel.find();
        res.status(200).send(users)
    } catch (error) {
        res.status(404).send(error.message);
    }
})

// register a new user
userRouter.post('/register', async (req, res) => {
    let userDetails = req.body;
    console.log({ userDetails });

    try {
        let user = await UserModel.find({ email: userDetails.email });
        if (user.length > 0) {
            res.status(404).send("user already exists")
        } else {
            bcrypt.hash(userDetails.password, 5, async (err, hash) => {
                if (hash) {
                    userDetails.password = hash;
                    const newUser = new UserModel(userDetails);
                    await newUser.save();
                    res.status(201).send("user registered successfully")
                }
            });
        }
    } catch (error) {
        res.status(400).send(error.message);
    }

})


// get all friends of particular user
userRouter.get('/:id/friends', async (req, res) => {
    let id = req.params.id;
    try {
        let user = await UserModel.findById(id);
        let friends = user.friends;
        console.log(user);
        res.status(201).send({friends,user})
    } catch (error) {
        res.status(404).send(error.message);
    }
})

// sending friend request
userRouter.post('/:id/friends/', async (req, res) => {

    let id = req.params.id; // id of user
    let friendId = req.body.userId; // id of friend coming from body
    console.log(friendId);
    try {
        // getting the users
        let user = await UserModel.findById(id);
        // push friends userId request to users friend request arr
        user.friendRequests.push(friendId);
        // updated user data
        console.log(user)
        // saved updated user data
        await user.save();
        res.status(201).send("friedn request sent");
    } catch (error) {
        res.status(404).send({ error: error.message });
    }
})


// adding friends to 
userRouter.patch('/:id/friends/:friendId', async (req, res) => {

    let id = req.params.id; // id of user
    let friendId = req.params.friendId; // id of friend
    try {
        // getting the users
        let user = await UserModel.findById(id);
        // if userid present in requests then push it in friend list
        if (user.friendRequests.includes(friendId)){
            user.friends.push(friendId)
        }else{
            res.send("no request found")
        }
        // showing updates
        console.log(user )
        //  saving updates  
        await user.save();
        res.status(201).send("friedn request sent");
    } catch (error) {
        res.status(404).send({error : error.message});
    }
})
module.exports = { userRouter }