const socket = require('socket.io-client')('http://localhost:3000');

socket.on('connect', () => {
    let data = {
        "message": 'Hello World!',
        "sender": 'zer0Dark14'
      };
    console.log('Connected to server');
    socket.emit('Message', data);
});

socket.on('message', (data) => {
    console.log('Received message from server:', data);
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

