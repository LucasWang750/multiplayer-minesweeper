'use strict';

const async = require('async');
const clone = require('clone');
const path = require('path');
const { uniqueNamesGenerator, adjectives, colors, animals, names } = require('unique-names-generator');

//make the server
const express = require('express');
const app = express();
// const http = require('http').Server(app);
const PORT = process.env.port || 3001;


const server = app.listen(PORT, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Listening on %s', port)
});
const io = require('socket.io')(server);


//file
// const index = require("../routes/index")

//make the game
// const Games = require('./games');

// app.get("/", (req, res) => {
//     res.send('{message: "Hello from server!"}');
// });

// //open a connection
// io.on('connection', (socket) => {
//     console.log("New client connected");
//     console.log(`User ${socket.handshake.address}, ID ${socket.id}`);
// });



// http.listen(PORT, () => {
//     console.log(`Multiplayer Minesweeper started on ${PORT}`);
// })