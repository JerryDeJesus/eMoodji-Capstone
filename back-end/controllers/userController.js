const express = require("express");
const users = express.Router({ mergeParams: true });
const { getAllUsers, getUser, createUser, deleteUser, updateUser } = require('../queries/users');

users.get('/', async (req, res) => {
    try{
        const allUsers = await getAllUsers();
        res.status(200).json(allUsers);
    }catch(error){
        res.status(500).json({error: "server error"})
    }
});

users.get("/:uid", async (req,res) => {

    try {
        const {uid} = req.params;
        const user = await getUser(uid);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({error: "user not found"})
    }
});

users.post("/", async (req,res) => {
    try {
        const {body} = req;
        const createdUser = await createUser(body);
        res.status(200).json(createdUser);
    } catch (error) {
        res.status(500).json({error: "user creation error"})
    }
});

users.delete("/:uid", async( req, res) => {
    try {
        const {uid} = req.params;
        const deletedUser = await deleteUser(uid);
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(404).json({error: "cannot delete user"})
    }
});

users.put("/:uid", async (req, res) => {
    try {
        const {uid} = req.params;
        const {body} = req;
        const updatedUser = await updateUser(uid, body);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(404).json({error: "cannot update user"})
    }
});


module.exports = users;