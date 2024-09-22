const express = require("express");
const {
  registerUser,
  loginUser,
  addTodos,
} = require("../controllers/modelcontroller");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/addtodo", addTodos);
router.post("/homepage", auth, (req, res) => {
  res.json({ message: "Welcome to the homepage", user: req.user });
});

module.exports = router;
