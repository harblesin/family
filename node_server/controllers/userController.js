const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/mysql");
const userQueries = require("../Queries/userQueries");
const key = require("../config/key");
const toUnnamed = require("named-placeholders")();
const SALT = 12;
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, __dirname + '../farts');
  }
});
const upload2 = multer({ storage: storage });

const formidable = require("formidable");
// const WebSocket = require("ws");
// const wss = new WebSocket.Server({ noServer: true, clientTracking: true });

// const ws = require("ws");
// const client = new ws("ws://localhost:8080");

module.exports = {
    loginUser: (req, res, next) => {

        passport.authenticate("local", { session: false }, (error, user, info) => {
            if(error || !user) {
                return res.send({ error, auth: false });
            } else {
                const payload = {
                    id: user.id,
                    username: user.username,
                    expires: Date.now() + parseInt(3600000)
                };
                
                req.login(payload, { session: false }, error => {
                    if(error){
                        console.log(error)
                        res.send({ error, auth: false });
                    }

                    const token = jwt.sign(JSON.stringify(payload), key);

                    res.cookie("jwt", token, { secure: false });
                    res.status(200).send({ success: true });
                });
            }
        })(req, res, next);



        // let q = toUnnamed(userQueries.loginUser, { username: req.body.username, password: req.body.password });
        // db.query(q[0], q[1], (err, result) => {
        //     if( err ) { return res.json(err)};
        //     res.json(result.length ? true : false)
        // });
    },

    signUp: async (req, res) => {

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
        passport.authenticate('jwt', { sessions: false, successRedirect: "/home", failureRedirect: "http://localhost:3000/" }, (err, user, info) => { 
            if(err){ res.status(500).json(err)}
            else if (!user) {res.status(401).send(false)}
            else { res.status(200).json({user, info})};
        })(req, res, next);
    },
    findUser: (req, res) => {
        return new Promise ( (resolve, reject) => {
            let q = toUnnamed(userQueries.findUser, { username: req });
            db.query(q[0], q[1], (err, result) => {
                if(err) { return reject(err)};
                resolve(result);
            })            
        })

    },
    postStatus: (req, res, next) => {

        passport.authenticate('jwt', { sessions: false }, ( err, user, info) => {

            let q = toUnnamed(userQueries.postStatus, { status: req.body.status, user: user.id });

            db.query(q[0], q[1], (err, result) => {
                if(err) { return res.json(err)}
                res.json({ success: "Piss!" });
            })

        })(req, res, next);
    },
    getStatus: (req, res, next) => {


        console.log("yeah")

        // client.on("open", () => {
        //     client.send("Hello")
        // })


        res.json()




        // passport.authenticate('jwt', { sessions: false }, ( err, user, info) => {

        //     let q = toUnnamed(userQueries.getStatus, {userId: user.id });

        //     console.log("he")

        //     db.query(q[0], q[1], (err, result) => {
        //         console.log(err)
        //         if(err) { return res.json(err) };


        //         console.log(result)
        //         res.json(result);
        //     })
        // })(req, res, next)
    },
    sendMessage: (req, res, next) => {
//         passport.authenticate('jwt', {session: false }, (err, user, info) => {
//             wss.on("connection", socket => {
//                 socket.on('message', function incoming(message) {


//                     wss.clients.forEach( function each(client) {
//                         console.log(client)
//                         if(client.readyState === WebSocket.OPEN) {
//                             client.send(message)
//                         }
//                     })


//                     res.json()
//                     console.log("message", message);
// 		// console.log(socket)
// 		// socket.emit('heres your message'+message)
// 	});
// 	// socket.send('heres your message' + message)
// })
//         })(req, res, next)
    },
    upload: ( req, res, next) => {

        console.log(req.body.file);

        console.log(req.file)
        // let newThing = new Img;

        // newThing.img.data = fs.readFileSync(req.file.path);

        

        console.log("hello?")

        passport.authenticate('jwt', { sessions: false }, ( err, user, info) => {

            console.log(__dirname)
            


            upload2.single('newFile', (req, res) => {
                console.log(req);
                console.log(req.file)
            })




            // let form = new formidable.IncomingForm();
            // form.parse(req, function (err, fields, files) {
            //     console.log('req ===', req)
            //     console.log('files ==== ', files);
            //     console.log('fields ==== ', fields);
            //     res.end("ueaj")
            // });

            
            // console.log("what");
            // console.log(JSON.parse(req.body.file))
            // console.log(req.file);
            // console.log(req.file)

        res.end();
    })(req, res, next)
    }
}
