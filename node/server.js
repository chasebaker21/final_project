const express = require ('express');
const comments = require ('./comments.js');
const votes = require ('./votes.js');
const cors = require ('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/comments', comments);

app.use('/votes', votes);
const port = process.env.PORT||5000;
app.listen(port, () => {
    console.log("listening");
});