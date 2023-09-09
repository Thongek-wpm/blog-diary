const express = require("express");
const cors = require("cors");
const User = require("./models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const app = express();
const jwt = require("jsonwebtoken");

const salt = bcrypt.genSaltSync(10);
const secret = "asdfe45we45w345wegw345werjktjwertkj";

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://BlogDiary:oGhfUYl5GyZeq460@cluster0.rnqxj91.mongodb.net/?retryWrites=true&w=majority"
);
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    // logged in
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.json("ok");
    });
  } else {
    res.status(400).json("wrong credentials");
  }
});

app.listen(4000);
