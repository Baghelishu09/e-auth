const express = require("express");
const path = require("path");
const app = express();
const userModel = require("./users");
require('dotenv').config();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.post("/submit", async function (req, res) {
  const { name, uname, email, mobileNo, password } = req.body;
  const user = new userModel({
    name,
    uname,
    email,
    mobileNo,
    password,
  });

  try {
    await user.save();
    console.log(`${name} registered successfully!`)
    res.send("User registered successfully");
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
