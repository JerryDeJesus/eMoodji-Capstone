const express = require("express");
const users = express.Router({ mergeParams: true });
const { getAllUsers, getUser, createUser, deleteUser, updateUser } = require('../queries/users');

users.get('/', async (req, res) => {
    const allUsers = await getAllUsers();

    try{

    }catch(err){
        console.log(err);
    }
});