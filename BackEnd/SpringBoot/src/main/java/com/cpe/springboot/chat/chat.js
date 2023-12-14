const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io');
const ioServer = io(server);

app.get('/', function(req, res){
    res.sendfile('index.html');
});

ioServer.on('connection', function(socket){
    console.log('a user connected');
    socket.on('myEvent1', function(data) {
        // Do stuff
        socket.emit('myEvent2', data);
    });
});

server.listen(3000);