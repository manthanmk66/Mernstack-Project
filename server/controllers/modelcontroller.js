const bcrypt = require("bcrypt");
const Login = require("../model/loginmodel");
const jwt = require("jsonwebtoken");
const Todo = require("../model/ToDoModel");

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
  console.log("tsting login");

  try {
    const user = await Login.findOne({ emailid });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ token: token });
    // res.json({ message: "Login successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
    console.log(error);
  }
};


//for todo

exports.addTodos = async (req, res) => { 
  const { userId, title, description } = req.body;
  console.log("testing addTodos"); 
  try{
    const newTodo=new Todo({
      userId,
      title,
      description,
    })

    await newTodo.save();
    res.status(201).json({message: "Todo added successfully", newTodo});
  }
  catch(error){
    res.status(500).json({message: error.message});
  }
}
