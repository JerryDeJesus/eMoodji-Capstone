const db = require("../db/dbConfig.js");

const getAllEntries = async () => {
    try {
        const allEntries = await db.any("SELECT * FROM entries");
        return allEntries;
    } catch (error) {
        return error;
    }
};

const getEntry = async (eid) => {
    try {
        const oneEntry = await db.one("SELECT * FROM entries WHERE eid = $1", eid);
        return oneEntry;
    } catch (error) {
        return error;
    }
};

const createEntry = async (entry) => {
    try {
        const newEntry = await db.one("INSERT INTO entries (userid, date_created, mood, interest, activity) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [entry.userid, entry.date_created, entry.mood, entry.interest, entry.activity]    
        );
        return newEntry
    } catch (error) {
        return error;
    }
};

const deleteEntry = async (eid) => {
    try {
        const deletedEntry = await db.one("DELETE FROM entries WHERE eid = $1 RETURNING *", eid);
        return deletedEntry;
    } catch (error) {
        return error;
    }
};

const updateEntry = async (eid, entry) => {
    try {
        const updatedEntry = await db.one("UPDATE entries SET userid = $1, date_created = $2, mood = $3, interest = $4, activity = $5 WHERE eid = $6 RETURNING * ", 
        [entry.userid, entry.date_created, entry.mood, entry.interest, entry.activity, eid]
        );
        return updatedEntry;
    } catch (error) {
        return error;
    }
};

module.exports = {
    getAllEntries,
    getEntry,
    createEntry,
    deleteEntry,
    updateEntry
}