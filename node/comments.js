import express from "express";

const app = express.Router();

const comments = [];

app.post("/", (req, res) => {
  comments.push(req.body);
  comments.push();
  res.json(200);
});

app.get("/", (req, res) => {
  res.json(comments);
});

export default app;
