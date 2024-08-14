const bcrypt = require("bcrypt");
const Login = require("../model/loginmodel");

exports.registerUser = async (req, res) => {
  const { fullname, emailid, mobile, password } = req.body;

  try {
    const existingUser = await Login.findOne({ emailid });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Login({
      fullname,
      emailid,
      mobile,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error registering user", error: error.message });
  }
};

//for login

exports.loginUser = async (req, res) => {
  const { emailid, password } = req.body;

  try {
    const user = await Login.findOne({ emailid });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
};
