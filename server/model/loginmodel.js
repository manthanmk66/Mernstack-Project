const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  emailid: { type: String, required: true, unique: true },
  mobile: { type: Number, required: true },
  password: { type: String, required: true },
});

const Login = mongoose.model("Login", loginSchema);

module.exports = Login;
