const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
 
    try {
        
        
        const salt = await bcrypt.genSalt(15);
        
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
          });
      
        //save user and respond
        
        const user = await newUser.save();
       
        res.status(200).json({message: "Created", success: true, user: user});

    } catch (error) {
        
      res.status(500).json({message: "Fail", success: false});
    }


});

//LOGIN
router.post("/login", async (req, res) => {
    try {
      
      
      let statusCode = 200;
      let respData = null;
      req.session.isLogged = false;

      const user = await User.findOne({ username: req.body.username });
      
      // set session data
      req.session.user = user;
    

      if (!user) {
        statusCode = 401;
        respData = {message: "User not found"};
      }
      else {
        const validPassword = await bcrypt.compare(req.body.password, user.password);

        if (!validPassword)
        {
          statusCode = 401;
          respData = {message: "Wrong password"};
        }
        else {
          statusCode = 200;
          respData = user;
          req.session.isLogged = true;
        }
      }
      
      res.status(statusCode).json(respData);

    } catch (err) {
      
      res.status(500).json(err)
    }
});

router.get('/auth', (req, res) => {


  const data = {};

  data['isLogged'] = req.session.isLogged === undefined ? false : req.session.isLogged;
  data['user'] = req.session.user === undefined ? null: req.session.user;
  res.status(200).json(data);

});

module.exports = router;