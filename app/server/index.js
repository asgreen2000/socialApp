const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

// app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session({
  resave: true, 
  saveUninitialized: true, 
  secret: 'somesecret', 
  cookie: {maxAge:86400000}})
);

var whitelist = ['http://localhost:3000', /** other domains if any */ ]
var corsOptions = {
  credentials: true,
  origin: function(origin, callback) {
    
    if (whitelist.indexOf(origin) !== -1) {
      
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));




const connectDB = async () => {
  try {
    mongoose.connect(
      process.env.URL,
      { 
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )

    console.log('Connected to mongoDB');

  } catch (error) {
    console.log(error)
    process.exit(1)
  }
};

connectDB();



app.get('/', (req, res) => {

  console.log(req.sessionID);
  res.send('fds');

});


const authRouter = require('./routes/auth');
const conversRouter = require('./routes/conversation');
const msgRouter = require('./routes/message');
const userRouter = require('./routes/user');

app.use('/message', msgRouter);
app.use('/conversation', conversRouter);
app.use('/', authRouter);
app.use('/user', userRouter);

let serve = app.listen(3333, () => {


});



let users = [];

const addUser = (userID, socketID) => {
  !users.some((user) => user.userID === userID) &&
    users.push({ userID, socketID });
    console.log(users);
};

const removeUser = (socketID) => {
  users = users.filter((user) => user.socketID !== socketID);
};

const getUser = (userID) => {
  return users.find((user) => user.userID === userID);
};

const io = require("socket.io")(serve, {
    cors: {
      origin: "http://localhost:3000",
    }
});

io.on("connection", (socket) => {
  
  
  socket.on("addUser", (userID) => {
    addUser(userID, socket.id);
    
    io.emit("getUsers", users);
  });
  
  socket.on("sendMessage", ({ senderID, receiverID, text }) => {
    const user = getUser(receiverID);
    console.log(user);
    user && io.to(user.socketID).emit("getMessage", {
      senderID,
      text
    });
  });

  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });

});
