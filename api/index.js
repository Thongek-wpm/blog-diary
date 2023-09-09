import express, { json } from "express";
import cors from "cors";
import { connection } from "mongoose";
import { create } from "./models/user";
const app = express();

app.use(cors());
app.use(json());

connection(
  "mongodb+srv://BlogDiary:oGhfUYl5GyZeq460@cluster0.rnqxj91.mongodb.net/"
);
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await create({ username, password });
  res.json(userDoc);
});

app.listen(4000)
//oGhfUYl5GyZeq460
//mongodb+srv://BlogDiary:oGhfUYl5GyZeq460@cluster0.rnqxj91.mongodb.net/?retryWrites=true&w=