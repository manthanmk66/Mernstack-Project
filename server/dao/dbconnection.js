require("dotenv").config();
const mongoose = require("mongoose");

const mongoConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
  }
};

module.exports = mongoConnection;
