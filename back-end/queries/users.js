const db = require("../db/dbConfig.js");

const getAllUsers = async () => {
    try {
        const allUsers = await db.any("SELECT * FROM users")
        return allUsers;
    } catch (error) {
        return error;
    }
};

const getUser = async (id) => {
    try {
        const user = await db.one("SELECT * FROM users WHERE id=$1", id)
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

const deleteUser = async (id) => {
    try {
        const deletedUser = await db.one("DELETE FROM users WHERE id=$1 RETURNING *", id);
        return deletedUser;
    } catch (error) {
        return error;
    }
};

const updateUser = async (id, user) => {
    try {
        const updatedUser = await db.one(
            "UPDATE users SET fname=$1, lname=$2, email=$3, password=$4 WHERE id=$5 RETURNING *",
            [user.fname, user.lname, user.email, user.password, id]
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