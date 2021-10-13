const express = require("express");
const app = express();
const mongoose = require("mongoose");
//import routes//
const postsRoute = require("./routes/posts");
//middle ware//
app.use("/posts", postsRoute);
app.use(express.urlencoded());
app.use(express.json());
//dotenv config//
require("dotenv/config");

// connecting to my database//
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParses: true }, () => {
  console.log("connected to db");
});
app.listen(3000);
