const express = require("express");
const users = express.Router({ mergeParams: true });
const { getAllUsers, getUser, createUser, deleteUser, updateUser, userByEmail } = require('../queries/users');
const { getUserEntries } = require("../queries/entries.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtTokens = require('../utils/jwt-helpers');

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
        const { firstName, lastName, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const emailToLowerCase = email.toLowerCase();

        //validate password health
        // if(password.length < 6){
        //     throw({message: 'Password must be 6 characters or more!})
        // }

        const createdUser = await createUser(firstName, lastName, emailToLowerCase, hashedPassword);
        console.log(createdUser);
        if(createdUser){
            //Generate JWT token
            let token = jwtTokens(createdUser);
            console.log(token)
            res.status(200).json(token);
        }
    } catch (error) {
        res.status(500).json({error: "error while creating a user"})
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
    try {
        const { email, password } = req.body;
        const emailToLowerCase = email.toLowerCase();

        const user = await userByEmail(emailToLowerCase);
        
        if(!user){
            res.status(401).json({error: "Email is not correct"})
            return
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if(!validPassword){
            res.status(401).json({error: "Password is not valid"})
        }

        if(user && validPassword){
            let data = jwtTokens(user);
            res.status(200).json({"accessToken":data.accessToken,"refreshToken":data.refreshToken, "firstname":user.firstname, "lastname":user.lastname, "id":user.id, "email":user.email});
        }
        
    } catch (error) {
        return error
    }
});

module.exports = users;