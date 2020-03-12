import express from "express";
import { stringify } from "querystring";

const app = express.Router();

const comments = [
];

app.post("/", (req, res) => {
  comments.push(req.body);
  res.json(200);
});

app.put("/", (req,res) => {
  const comment = comments.find(i => i.id === parseInt(req.params.id));
  comments.splice()
})

// const student = students.find(i => i.id === parseInt(req.params.id));


app.get("/", (req, res) => {
  res.json(comments);
});

export default app;
