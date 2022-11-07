const express = require("express");
const users = express.Router({ mergeParams: true });
const { getAllUsers, getUser, createUser, deleteUser, updateUser, userByEmail } = require('../queries/users');
const {getUserEntries} = require("../queries/entries.js");

users.get('/', async (req, res) => {
    try{
        const allUsers = await getAllUsers();
        res.status(200).json(allUsers);
    }catch(error){
        res.status(500).json({error: "server error"})
    }
});

users.get("/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const user = await getUser(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({error: "user not found"})
    }
});

//get all of a single user's entries
users.get("/:id/entries", async (req,res) => {
    const  { id } = req.params;
    try{
        const allUserEntries = await getUserEntries(id);
        res.status(200).json(allUserEntries);
    }catch(error){
        res.status(500).json({error: 'user entries not found'});
    }
})

//create new user
users.post("/", async (req,res) => {

    try {
        const {body} = req;
        const createdUser = await createUser(body);
        res.status(200).json(createdUser);
    } catch (error) {
        res.status(500).json({error: "user creation error"})
    }
});

users.delete("/:id", async( req, res) => {
    try {
        const {id} = req.params;
        const deletedUser = await deleteUser(id);
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(404).json({error: "cannot delete user"})
    }
});

users.put("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {body} = req;
        const updatedUser = await updateUser(id, body);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(404).json({error: "cannot update user"})
    }
});

//login
users.post("/loginpage", async (req, res) => {
    const { email, password } = req.body;
    const user = await userByEmail(email, password);
    
    if(user){
            res.status(200).json(user);
    }else{
        res.status(404).json({error: "invalid email and/or password"})
    }
});

module.exports = users;