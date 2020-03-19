import express from 'express'
import comments from './comments.js';
import votes from './votes.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/comments', comments);

app.use('/votes', votes);
const port = process.env.PORT||5000;
app.listen(port, () => {
    console.log("listening");
});