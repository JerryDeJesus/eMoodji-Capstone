const db = require("../db/dbConfig.js");

//get every entry for every user
const getAllEntries = async () => {
    try {
        const allEntries = await db.any("SELECT * FROM entries");
        return allEntries;
    } catch (error) {
        return error;
    }
};

//get a single entry 
const getEntry = async (id) => {
    try {
        const oneEntry = await db.one("SELECT * FROM entries WHERE id = $1", id);
        return oneEntry;
    } catch (error) {
        return error;
    }
};

const createEntry = async (entry) => {
    let date_created = new Date(Date.now());
    console.log(date_created);
    try {
        const newEntry = await db.one("INSERT INTO entries (userid, date_created, mood, interest, activity) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [entry.userid, date_created, entry.mood, entry.interest, entry.activity]    
        );
        return newEntry
    } catch (error) {
        return error;
    }
};

const deleteEntry = async (id) => {
    try {
        const deletedEntry = await db.one("DELETE FROM entries WHERE id = $1 RETURNING *", id);
        return deletedEntry;
    } catch (error) {
        return error;
    }
};

const updateEntry = async (id, entry) => {
    try {
        const updatedEntry = await db.one("UPDATE entries SET userid = $1, date_created = $2, mood = $3, interest = $4, activity = $5 WHERE id = $6 RETURNING * ", 
        [entry.userid, entry.date_created, entry.mood, entry.interest, entry.activity, id]
        );
        return updatedEntry;
    } catch (error) {
        return error;
    }
};

//get all of a single user's entries
const getUserEntries = async (userid) => {
    try {
        const allEntries = await db.any("SELECT * FROM entries WHERE userid=$1", userid);
        return allEntries
    } catch (err) {
        return err
    }
};

module.exports = {
    getAllEntries,
    getEntry,
    createEntry,
    deleteEntry,
    updateEntry,
    getUserEntries
}