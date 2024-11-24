const express = require("express");
const path = require("path");
const app = express();
const userModel = require("./users");
const bcrypt = require("bcrypt");
require("dotenv").config();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Registration

app.post("/submit", async function (req, res) {
  const { name, uname, email, mobileNo, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new userModel({
    name,
    uname,
    email,
    mobileNo,
    password: hashedPassword,
  });
  try {
    if (await userModel.findOne({ email: email })) {
      console.log("Email already exists!");
      res.json({ status: "failed", message: "Email already exists!" });
      return;
    }
    await user.save();
    res.json({ status: "success", message: `${name} registered successfully` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "failed" });
  }
});

//Login

app.post("/login", async function (req, res) {
  const { uname_login, password_login } = req.body;
  const user = await userModel.findOne({ uname: uname_login });
  if (user) {
    const isMatch = await bcrypt.compare(password_login, user.password);
    if (!isMatch) {
      res.json({ status: "failed", message: "Something went wrong" });
    } else {
      res.json({
        status: "success",
        message: `${user.name} logged in successfully`,
      });
    }
  } else {
    res.json({ status: "failed", message: "User not found! Register" });
  }
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
