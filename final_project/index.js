require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session')
const customer_routes = require('./router/auth_users.js').authenticated;
const genl_routes = require('./router/general.js').general;
const jwtSecret = process.env.JWT_SECRET;

const app = express();

app.use(express.json());

app.use("/customer", session({ secret: "fingerprint_customer", resave: true, saveUninitialized: true }))

app.use("/customer/auth/*", function auth(req, res, next) {
    //Write the authenication mechanism here
    if (req.session.authorization) {
        const tkn = req.session.authorization['access_token'];
        if (!jwtSecret) {
            return res.status(500).json({ error: 'Server misconfiguration: JWT_SECRET is missing.' });
        }
        //Access token
        jwt.verify(tkn, jwtSecret, function (err, user) {
            if (err) {
                return res.status(401).json({ message: "User not authenticated" })
            }
            req.user = user;
            next()
        })
    }else{
        return res.status(403).json({message:"user not logged In"})
    }
});

const PORT = 5000;

app.use("/customer", customer_routes);
app.use("/", genl_routes);

app.listen(PORT, () => console.log("Server is running"));
