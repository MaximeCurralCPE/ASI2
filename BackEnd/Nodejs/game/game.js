const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { connect } = require('http2');
const Room = require('./class/Room.js');

app.use(cors());
httpServer = http.createServer(app);

connectedUserID = [];

RoomDict = {};
let RoomAvailiable;

function createRoom(io,IDplayer1) {
    let roomID = generateRoomID();
    let newRoom = new Room(io,roomID,IDplayer1);
    RoomDict[roomID] = newRoom;

    console.log("Created room with ID: "+roomID+"assigned to player: "+IDplayer1);
    return roomID;
}
function generateRoomID() {
    return Math.floor(Math.random() * 1000000);
}
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
    socket.on('disconnect', () => {
        console.log('A user disconnected');
        connectedUserID.splice(connectedUserID.indexOf(socket.id), 1);
    });
    console.log('A user is connected');
    connectedUserID.push(socket.id);
    
    console.log(RoomDict);
    if (RoomAvailiable == null) {
        RoomAvailiable = createRoom(io,socket.id);
        let jsonReply = {
            "roomID": RoomAvailiable
        };
        // send roomID to player1   
        io.to(socket.id).emit('RoomID', jsonReply);
    }
    else {
        RoomDict[RoomAvailiable].setIDplayer2(socket.id);
        let jsonReply = {
            "roomID": RoomAvailiable
        };
        // send roomID to player2   
        io.to(socket.id).emit('RoomID', jsonReply);
        console.log("Assigned "+socket.id+"to room: "+RoomAvailiable);
        RoomAvailiable = null;
    }
  });

io.listen(3001);

