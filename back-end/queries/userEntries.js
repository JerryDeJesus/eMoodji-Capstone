const db = require("../db/dbConfig.js");


const getUserEntries = async (userid) => {
    try {
        const allEntries = await db.any("SELECT * FROM entries WHERE userid=$1", userid);
        return allEntries
    } catch (err) {
        return err
    }
};

module.exports = { getUserEntries };