require("dotenv").config();
const express = require("express")
const bodyParser = require("body-parser");
const passport = require("passport");
const cookies = require("cookie-parser");
const path = require("path");

const router = require("./Routes");
const app = express();
const PORT = process.env.NODE_SERVER_PORT;

app.use(express.static(path.join(__dirname, "../build/")));
app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }));
app.use(bodyParser.json({ limit: '1mb' }));
app.use(passport.initialize());
// require("./config/authSetup.js")(passport);
app.use(cookies());
app.use(router);

app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`)
});