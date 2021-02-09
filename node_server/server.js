require("dotenv").config();
const express = require("express")
const bodyParser = require("body-parser");
const passport = require("passport");
const cookies = require("cookie-parser");
const path = require("path");

const router = require("./Routes");
const app = express();
const PORT = process.env.NODE_SERVER_PORT;

// if(process.env.NODE_ENV === "production") {
// 	app.use(express.static("../build"));
// }

app.use(express.static(path.join(__dirname, "build/")));
app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }));
app.use(bodyParser.json({ limit: '1mb' }));
app.use(passport.initialize());
// require("./config/authSetup.js")(passport);
app.use(cookies());
app.use(router);



//PUT ROUTERS HERE ( ALSO NEED TO CREATE ROUTES AND QUERIES INDEX)
// const musicRouter = require("./Routes/music");

console.log(__dirname)

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, "../build/index.html"));
});





//PUT API HERE, BUT ALSO NEED INDEX

// app.use("/api/music", musicRouter);



app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`)
});