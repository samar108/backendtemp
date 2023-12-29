require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 3000 ;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Welcome to twitter");
});

app.get("/twitter/profile", (req, res) => {
  res.send("welcome to your profile ");
});

app.get("/youtube", (req, res) => {
  res.send("welcome to youtube");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
