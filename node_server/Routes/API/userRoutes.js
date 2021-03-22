const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userController = require("../../controllers/userController");
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, process.env.NODE_ENV === "production" ? __dirname+"../../../../" : __dirname+'../../../../../../post_images');
  },
  filename: (req, file, cb) => {
    console.log(req.files)
    console.log(file)
      cb(null, file.originalname)
  }
});
const upload = multer({ storage: storage });



router.route("/login").post(userController.loginUser);

router.route("/signup").post(userController.signUp);

router.route("/auth").get(userController.authCheck);

router.route("/post").post(userController.createPost);

router.route("/status").get(userController.getStatus);

router.route("/message").post(userController.sendMessage);

router.route("/posts").get(userController.getPosts);

router.route("/upload").post( upload.any(), userController.upload);

module.exports = router;