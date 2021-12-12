const express = require('express');
const app = express();





let serve = app.listen(3333, () => {


});



const io = require("socket.io")(serve, {
    cors: {
      origin: "http://localhost:3000",
    }
});

io.on("connection", (socket) => {
    //when ceonnect
    console.log("a user connected.");
  
    //take userId and socketId from user
    socket.on("message", (message) => {

        console.log(message);

    });
  });
