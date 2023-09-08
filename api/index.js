const express = require("express");
const app = express();

app.post("/register", (req, res) => {
  res.json("test pass");
});

app.listen(4000);
