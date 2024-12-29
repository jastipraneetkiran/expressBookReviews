const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req, res) => {
    //Write your code here
    return res.status(300).json({ message: "Yet to be implemented" });
});

// Get the book list available in the shop
public_users.get('/', function (req, res) {
    // Assuming `books` is a predefined object or array
    const getBooksList = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (books) {
                resolve(books); // Resolve with books if defined
            } else {
                reject(new Error("Books data not found")); // Reject if books is undefined or null
            }
        }, 1000);
    });

    getBooksList
        .then((booksVal) => res.json(booksVal)) // Directly send as JSON
        .catch((err) => {
            console.error(err.message); // Log error for debugging
            res.status(500).json({ error: "An error occurred while retrieving books" }); // User-friendly error message
        });
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
    //Write your code here
    const isbn = req.params.isbn;
    const getBookByIsbn = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!books[isbn]) {
                reject(new Error("For the given ISBN there is no book"))
            } else {
                const obj = {}
                obj[isbn] = books[isbn]
                resolve(obj)
            }
        }, 1000)
    })
    getBookByIsbn.then(book => res.send(JSON.stringify({ ...book }, null, 4))).catch((err) => {
        console.error(err.message); // Log error for debugging
        res.status(500).json({ error: err.message }); // User-friendly error message
    });
});

const filterBooksData = (keyComponet, comparValue) => {
    const filterObj = Object.fromEntries(Object.entries(books).filter(([key, value]) => value[keyComponet] == comparValue))
    return filterObj;
}
// Get book details based on author
public_users.get('/author/:author', function (req, res) {
    const authorValue = req.params.author;
    const filterAuthorPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const filteredBooks = filterBooksData('author', authorValue)
            if (!filteredBooks) {
                reject(new Error("No book match found for the given author"))
            } else {
                resolve(filteredBooks)
            }
        }, 1000)
    })
    filterAuthorPromise.then(bookvals => res.send(JSON.stringify({...bookvals},null,4))).catch((err)=>{
        res.status(400).json({ error: err.message }); // User-friendly error message
    })
});

// Get all books based on title
public_users.get('/title/:title', function (req, res) {
    //Write your code here
    return res.status(300).json({ message: "Yet to be implemented" });
});

//  Get book review
public_users.get('/review/:isbn', function (req, res) {
    //Write your code here
    return res.status(300).json({ message: "Yet to be implemented" });
});

module.exports.general = public_users;
