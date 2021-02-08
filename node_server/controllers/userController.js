const db = require("../config/mysql");
const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userQueries = require("../Queries/userQueries");
const key = require("../config/key");
const toUnnamed = require("named-placeholders")();

module.exports = {
    loginUser: (req, res) => {
        let q = toUnnamed(userQueries.loginUser, { username: req.body.username, password: req.body.password });
        db.query(q[0], q[1], (err, result) => {
            if( err ) { return res.json(err)};
            res.json(result.length ? true : false)
        });
    },

    createUser: (req, res) => {

        console.log("sure");
        res.json();

    },
    authCheck: (req, res, next) => {
        let result = db.query(userQueries.getUsers);
        res.json(result);
    }
}
