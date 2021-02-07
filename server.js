var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

app.use(express.static("public"));

server.listen(3000);

app.get('/', function (request, respons) {
    respons.sendFile(__dirname + "/public/index.html");
});

io.sockets.on("connection", function(socket) {
    console.log("connect");
});