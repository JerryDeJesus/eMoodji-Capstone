const cors = require("cors");
const express = require("express");
const userController = require("./controllers/userController.js");
const entryController = require("./controllers/entryController.js");
const jwt = require("jsonwebtoken");
const app = express();
app.use(cors());
app.use(express.json()); 

require('dotenv').config();

app.get("/", (req, res) => {
    res.send("welcome to backend");
});

app.use('/users', userController);
app.use('/entries', entryController);

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
    });
    
module.exports = app;