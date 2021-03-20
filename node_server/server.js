require("dotenv").config();
const express = require("express")
const bodyParser = require("body-parser");
const passport = require("passport");
const cookies = require("cookie-parser");
const path = require("path");
const WebSocket = require("ws");
const multer = require("multer");

const WebSocketServer = WebSocket.Server,
	wss = new WebSocketServer({ noServer: true, clientTracking: true });
wss.on("connection", socket => {
	socket.on('message', function incoming(message) {
		wss.clients.forEach( function each(client) {
			if(client.readyState === WebSocket.OPEN) {
				client.send(message)
			}
		})
	});
})

const router = require("./Routes");
const app = express();
const PORT = process.env.NODE_SERVER_PORT;
require("./config/authSetup.js")(passport);

app.use(express.static(path.join(__dirname, "../build/")));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json({ limit: '10mb' }));
// app.use(multer);
app.use(passport.initialize());
app.use(cookies());
app.use(router);

let server = app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`)
});

server.on('upgrade', (req, socket, head) => {
	wss.handleUpgrade(req, socket, head, socket => {
		wss.emit('connection', socket, req);
	})
})


