const express = require("express");
const { registerUser, loginUser } = require("../controllers/modelcontroller");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/homepage", auth, (req, res) => {
    res.json({ message: "Welcome to the homepage", user: req.user });
});

module.exports = router;
