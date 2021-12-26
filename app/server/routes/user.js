const User = require("../models/User");
const router = require("express").Router();

router.get("/", async (req, res) => {
    const userID = req.query.userID;
    const username = req.query.username;
    try {
      const user = userID
        ? await User.findById(userID)
        : await User.findOne({ username: username });
      const { password, updatedAt, ...other } = user._doc;
      res.status(200).json(other);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;