const express = require("express");
const userEntries = express.Router({mergeParams: true});
const { getUserEntries } = require("../queries/userEntries");

//get user entries
userEntries.get("/", async (req, res) => {
    const  { userid } = req.params;
    try{
        const allUserEntries = await getUserEntries(userid);
        res.status(200).json(allUserEntries);
    }catch(error){
        res.status(500).json({error: 'user entries not found'});
    }
});

module.exports = userEntries;