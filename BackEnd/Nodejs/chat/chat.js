const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', function(socket){
    console.log('a user is connected');
    socket.on('myEvent1', function(data) {
        console.log("Event1");
        socket.emit('myEvent2', data);
    });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});