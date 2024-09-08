require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/route");
const dbconnection = require("./dao/dbconnection");

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api/auth", routes);

dbconnection();

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
