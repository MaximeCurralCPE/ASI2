const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
//const io = new Server(server);

const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

io.on('connection', function(socket){
    console.log('[NODE] a user is connected on socket', socket.id);
    socket.on('msgToServer', function(data) {
        console.log('[NODE] a message has been received:', data);
        socket.emit('myEvent2', data);
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});