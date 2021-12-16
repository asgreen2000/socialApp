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
  cookie: {maxAge:60000}})
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


const user = [];

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


const userRouter = require('./routes/auth');

app.use('/', userRouter);
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
