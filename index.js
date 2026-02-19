import express from 'express';
import bodyParser from 'body-parser';
import patientRoute from './routes/patients.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/patients', patientRoute);

app.get("/", (req, res)=> {
    res.send("Welcome to homepage dp /todo to visit todos");
});

app.listen(PORT, ()=> console.log(`Running on port http://localhost:${PORT}`));