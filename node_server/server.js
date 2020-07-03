require("dotenv").config();

const express = require("express");
const path = require("path");
const PORT = process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: true, limit: '1mb' }));
app.use(express.json({ limit: '1mb' }));

app.use(express.static(path.join(__dirname, "../build")));

//PUT ROUTERS HERE ( ALSO NEED TO CREATE ROUTES AND QUERIES INDEX)
const musicRouter = require("./Routes/music");


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, "/../build/index.html"));
});





//PUT API HERE, BUT ALSO NEED INDEX

app.use("/api/music", musicRouter);



app.listen(8080, () => {
	console.log(`Server is running on ${PORT}`)
});