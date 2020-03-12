import express from "express";

const app = express.Router();

const votes = [];

// app.post("/", (req, res) => {
//   votes.push();
//   res.json(200);
// });

app.get("/", (req, res) => {
  res.json(votes);
});

// updates the upvote and downvote count
app.put("/:applicationID", (req, res) => {
  const id = req.params.applicationID;
  votes.push(id);
  res.json(200);
});

export default app;
