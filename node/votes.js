import express from "express";

const app = express.Router();

const votes = [];

app.post("/", (req, res) => {
  // need to push the up or down vote from vote-comment component
  votes.push();
  res.json(200);
});

// updates the upvote and downvote count
app.put("/:id", (req, res) => {

    
});

export default app;
