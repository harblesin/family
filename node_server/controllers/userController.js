const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/mysql");
const userQueries = require("../Queries/userQueries");
const key = require("../config/key");
const toUnnamed = require("named-placeholders")();
const SALT = 12;

module.exports = {
    loginUser: (req, res, next) => {

        passport.authenticate("local", { session: false }, (error, user, info) => {
            console.log("0000000", user);
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



        let q = toUnnamed(userQueries.loginUser, { username: req.body.username, password: req.body.password });
        db.query(q[0], q[1], (err, result) => {
            if( err ) { return res.json(err)};
            res.json(result.length ? true : false)
        });
    },

    signUp: async (req, res) => {

        console.log('hell')

        let { email, username, password } = req.body;
        let q = toUnnamed(userQueries.checkForExistingUser, { email, username });

        db.query(q[0], q[1], async (err, result) => {

            if(err){
               return res.json(err);
            } else if(result.length){
                return res.json("Email or Username already in use.")
            } else {

                const hashedPass = async (password, SALT) => {
                        const salt = await bcrypt.genSalt(SALT);
                        return password =  await bcrypt.hash(password, salt);                        
                }

                password = await hashedPass(password, SALT)

                let q = toUnnamed(userQueries.createUser, { email, username, password })
                db.query(q[0], q[1], (err, result) => {
                    if(err) {
                        return res.json(err);
                    }
                    res.json({success: true, msg: `Congrats ${username}, you dumb bitch, you made an account`});
                })
            }
        } );
    },
    authCheck: (req, res, next) => {
        let result = db.query(userQueries.getUsers);
        res.json(result);
    },
    findUser: (req, res) => {
        let q = toUnnamed(userQueries.findUser, { email: req.query });
        db.query(q[0], q[1], (err, result) => {
            console.log(err)
            console.log(result)
            if(err) { return res.json(err)};
            res.json(result)
        })
    }
}
