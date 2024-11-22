const express = require("express");
const path = require("path");
const app = express();
const userModel = require("./users");
//const bcrypt = require("bcrypt");
require('dotenv').config();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/submit", async function (req, res) {
  const { name, uname, email, mobileNo, password } = req.body;
//  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new userModel({
    name,
    uname,
    email,
    mobileNo,
    password//: hashedPassword
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

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
