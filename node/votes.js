import express from "express";

const app = express.Router();

const votes = {};

app.get("/", (req, res) => {
  res.json(votes);
  res.json(200);
});

// updates the upvote and downvote count in the server
app.put("/:applicationID", (req, res) => {
  const id = req.params.applicationID;
  if (!votes[id]) {
    votes[id] = { upVote: 0, downVote: 0 };
  }
  if (req.body.upVote) {
    votes[id].upVote += parseInt(req.body.upVote);
  }

  if (req.body.downVote) {
    votes[id].downVote += parseInt(req.body.downVote);
  }

  res.json(200);
});

export default app;
