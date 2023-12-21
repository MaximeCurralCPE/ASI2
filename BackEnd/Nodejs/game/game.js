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
let RoomAvailiable = null;

function createRoom(io,IDplayer1) {
    let roomID = generateRoomID();
    let newRoom = new Room(io,roomID,IDplayer1);
    RoomDict[roomID] = newRoom;

    console.log("Created room with ID: "+roomID+" assigned to player: "+IDplayer1);
    return roomID;
}
function findRoom(roomID) {
    return RoomDict[roomID];
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
    
    console.log('A user is connected');
    connectedUserID.push(socket.id);
    
    if (RoomAvailiable == null) {
        RoomAvailiable = createRoom(io,socket.id);
        let jsonReply = {
            "roomID": RoomAvailiable,
            "localplayer": "player1",
            "awayplayer": "player2"
        };
        // send roomID to player1   
        io.to(socket.id).emit('roomID', jsonReply);
    }
    else {
        RoomDict[RoomAvailiable].setIDplayer2(socket.id);
        let jsonReply = {
            "roomID": RoomAvailiable,
            "localplayer": "player2",
            "awayplayer": "player1"
        };
        // send roomID to player2   
        io.to(socket.id).emit('roomID', jsonReply);
        console.log("Assigned "+socket.id+"to room: "+RoomAvailiable);
        RoomAvailiable = null;
    }
    socket.on('Cards', (data) => {
        //data = JSON.parse(data);
        let room = RoomDict[data["roomID"]]
        if (data["Cards"] != null) {
            if (room) {
                room.setCards(socket.id, data["Cards"]);
                room.tryStartGame()
            } else {
                console.error(`Room with ID ${data["roomID"]} does not exist`);
            }
        }
    });
    socket.on('Attaque', (data) => {
        //data = JSON.parse(data);
        let room = RoomDict[data["roomID"]];
        if (room) {
            // Handle the attack logic here
            player1Cards = room.getCardsPlayer1()
            player2Cards = room.getCardsPlayer2()
           
            room.simulation(data["localplayer"],data["numberLocalCard"],data["numberAwayCard"])
            room.nextTurn()
            

        } else {
            console.error(`Room with ID ${data["roomID"]} does not exist`);
        }
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
        connectedUserID.splice(connectedUserID.indexOf(socket.id), 1);
    });

});

  

io.listen(3001);

