import CONFIG from './config.json' assert { type: 'json' };
import bodyParser from "body-parser";
import express from 'express'
import http from 'http'
import { Server } from 'socket.io';
//import PingRouter from "./app/routers/PingRouter.js";
//import UserRouter from "./app/routers/UserRouter.js";
//import AppMiddleware from "./app/middleware/AppMiddleware.js";
global.CONFIG = CONFIG;

//const express = require('express');
//const http = require('http');
//const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Ressources statiques
app.use(express.static(CONFIG.www));
app.get('/', function(req, res){
    res.sendfile('./index.html');
    });

// Gestion des connexions socket.io
io.on('connection', (socket) => {
  console.log('Utilisateur connecté');

  // Gestion des messages
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  socket.on('myEvent1', function(data) {
    // Do stuff
    socket.emit('myEvent2', data);
    });

  // Gestion de la déconnexion
  socket.on('disconnect', () => {
    console.log('Utilisateur déconnecté');
  });
});

// Serveur HTTP écoutant sur le port 3000
server.listen(3000, () => {
  console.log('Serveur écoutant sur le port http://localhost:3000');
});



// Démarrage de l'application
//app.listen(CONFIG.port, () => console.log(`Listening http://localhost:${CONFIG.port}`));