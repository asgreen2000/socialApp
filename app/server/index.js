const express = require('express');
const app = express();
const db = require('mongoose');

const url = 'mongodb+srv://cluster0.f5i6j.mongodb.net/social-app?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority';
const user = [];

db.connect(url, () => {

});

let serve = app.listen(3333, () => {


});



const io = require("socket.io")(serve, {
    cors: {
      origin: "http://localhost:3000",
    }
});

io.on("connection", (socket) => {
    
    socket.on("message", (message) => {

        console.log(message);

    });
    
  });
