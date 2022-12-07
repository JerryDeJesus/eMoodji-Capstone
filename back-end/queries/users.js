const db = require("../db/dbConfig.js");
const bcrypt = require("bcrypt");

//login query
const userByEmail = async (email) => {
    try {
        const user = await db.one("SELECT * FROM users WHERE email=$1", email);
        return user
    } catch (error) {
        return error
    }
};

const getAllUsers = async () => {
    try {
        const allUsers = await db.any("SELECT * FROM users");

        return allUsers;
    } catch (error) {
        return error;
    }
};

const getUser = async (id) => {
    try {
        const user = await db.one("SELECT * FROM users WHERE id=$1", id);
        // console.log(user)
        return user;        
    } catch (error) {
        return error;
    }
};

const createUser = async (firstname, lastname, email, password) =>{
        try {
            const newUser = await db.one("INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING id, firstname, lastname, email", 
            [firstname, lastname, email, password]
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
    let hashedPassword = await bcrypt.hash(user.password, 10);
    console.log(user.password, hashedPassword);

    try {
        const updatedUser = db.one(
            "UPDATE users SET firstName=$1, lastName=$2, email=$3, password=$4 WHERE id=$5 RETURNING *",
            [user.firstName, user.lastName, user.email, hashedPassword, id]
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
    userByEmail,
}