const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { connect } = require('http2');

app.use(cors());
httpServer = http.createServer(app);

connectedUserID = [];

const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log('a user is connected');
  connectedUserID.push(socket.id);
  console.log(socket.id);
});

io.on('connect', (socket) => {
  socket.on('Message', (data) => {
    currentSocket = socket.id;
    console.log("Received Message from "+socket.id, data);
    connectedUserID.forEach(socketID => {
      if(socketID != currentSocket){
        socket.to(socketID).emit('MessageReply', data);
        console.log("Sent Message to "+socketID, data);
      }
    });
    
  });

  socket.on('ReceiveChat', (data) => {
    console.log("Sent:", data);
  })
})

io.listen(3000);