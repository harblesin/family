const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userController = require("../../controllers/userController");
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, __dirname);
  }
});
const upload = multer({ storage: storage });


router.route("/login").post(userController.loginUser);

router.route("/signup").post(userController.signUp);

router.route("/auth").get(userController.authCheck);

router.route("/status").post(userController.postStatus);

router.route("/status").get(userController.getStatus);

router.route("/message").post(userController.sendMessage);

router.route("/upload").post( upload.single('file'), userController.upload);

module.exports = router;