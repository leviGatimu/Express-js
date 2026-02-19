import express from 'express';
import bodyParser from 'body-parser';
import todoRoute from './routes/todo.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/todo', todoRoute);

app.get("/", (req, res)=> {
    res.send("Welcome to homepage dp /todo to visit todos");
});

app.listen(PORT, ()=> console.log(`Running on port hhtp://localhost:${PORT}`));