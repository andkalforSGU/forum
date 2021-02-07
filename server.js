var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

app.use(express.static("public"));

server.listen(3000);

app.get('/', function (request, respons) {
    respons.sendFile(__dirname + "/public/index.html");
});

themesIDArr = [];

io.sockets.on("connection", (socket) => {
    console.log("connect");

    socket.on("addTheme", (data) => {
        console.log("add: " + data);
        themesIDArr.push(data);
        console.log(themesIDArr);
    });

    socket.on("deleteTheme", (data) => {
        console.log("delete: " + data);
        themesIDArr.splice(themesIDArr.indexOf(data), 1);
        console.log(themesIDArr);
    });
});