const db = require("../db/dbConfig.js");

const getAllUsers = async () => {
    try {
        const allUsers = await db.any("SELECT * FROM users")
        return allUsers;
    } catch (error) {
        return error;
    }
};

const getUser = async (uid) => {
    try {
        const user = await db.one("SELECT * FROM users WHERE uid=$1", uid)
        return user;        
    } catch (error) {
        return error;
    }
};

const createUser = async (user) =>{
    try {
        const newUser = await db.one("INSERT INTO users (fname, lname, email, password) VALUES ($1, $2, $3, $4) RETURNING *", 
        [user.fname, user.lname, user.email, user.password]
        );
        return newUser;
    } catch (error) {
        return error;
    }
};

const deleteUser = async (uid) => {
    try {
        const deletedUser = await db.one("DELETE FROM users WHERE uid=$1 RETURNING *", uid);
        return deletedUser;
    } catch (error) {
        return error;
    }
};

const updateUser = async (uid, user) => {
    try {
        const updatedUser = await db.one(
            "UPDATE users SET fname=$1, lname=$2, email=$3, password=$4 WHERE uid=$5 RETURNING *",
            [user.fname, user.lname, user.email, user.password, uid]
        );
        return updatedUser;
    } catch (error) {
        return error;
    }
}


module.exports = {
    getAllUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser,
}