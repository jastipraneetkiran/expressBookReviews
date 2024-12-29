const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();
require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET;

let users = [];

const isValid = (username) => {
    //write code to check is the username is valid
    //returns boolean
    const filteredUser = users.filter(user => user.username === username)
    if (filteredUser.length > 0) {
        return true;
    }
    return false;
}

const authenticatedUser = (username, password) => { //returns boolean
    //write code to check if username and password match the one we have in records.
    const authenticatedUserFilter = users.filter(user => (user.username === username && user.password === password))
    if (authenticatedUserFilter.length > 0) {
        return true;
    }
    return false
}

//only registered users can login
regd_users.post("/login", (req, res) => {
    //Write your code here
    const username = req.body.username;
    const password = req.body.password;
    if (!username || (!password)) {
        return res.status(403).json({ error: ` username &/ password are not provided` })
    }
    if (authenticatedUser(username, password)) {
        let accessToken = jwt.sign({
            data: username
        }, 'access', { expiresIn: 60 * 60 });
        // Store access token in session
        req.session.authorization = {
            accessToken
        }
        return res.status(200).send("User successfully logged in");
    }
    return res.status(400).json({ error: "User doesn't exist" });
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
    //Write your code here
    return res.status(300).json({ message: "Yet to be implemented" });
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
