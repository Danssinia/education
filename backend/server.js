require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/user");

const app = express();
app.use(cors());
app.use(express.json());
mongoose
  .connect("mongodb://127.0.0.1:27017/masterstudy")
  .then(() => console.log("Connected To Database"))
  .catch(() => console.log("Something went wrong to connect the database"));
app.use("/user", userRouter);

app.listen(process.env.PORT, () => console.log("Server is running..."));
