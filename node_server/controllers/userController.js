const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userQueries = require("../Queries/userQueries");
const key = require("../config/key");
const e = require("express");
const toUnnamed = require("named-placeholders")();

module.exports = {
    loginUser: (req, res, next) => {

        passport.authenticate("local", { session: false }, (error, user, info) => {
            console.log(user);
            if(error || !user) {
                res.send({ error, auth: false });
            } else {
                const payload = {
                    id: user.id,
                    username: user.username,
                    expires: Date.now() + parseInt(3600000)
                };
                
                req.login(payload, { session: false }, error => {
                    if(error){
                        res.send({ error, auth: false });
                    }

                    const token = jwt.sign(JSON.stringify(payload), keys);

                    res.cookie("jwt", token, { secure: false });
                    res.statis(200).send({ user });
                });
            }
        })(req, res, next);



        // let q = toUnnamed(userQueries.loginUser, { username: req.body.username, password: req.body.password });
        // db.query(q[0], q[1], (err, result) => {
        //     if( err ) { return res.json(err)};
        //     res.json(result.length ? true : false)
        // });
    },

    createUser: (req, res) => {

        console.log("sure");
        res.json();

    },
    authCheck: (req, res, next) => {
        let result = db.query(userQueries.getUsers);
        res.json(result);
    },
    findUser: (req, res) => {
        let q = toUnnamed(userQueries.findUser, { email: req.query });
        db.query(q[0], q[1], (err, result) => {
            if(err) { return res.json(err)};
            res.json(result)
        })
    }
}
