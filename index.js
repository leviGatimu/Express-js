import express from 'express';
import bodyParser from 'body-parser';
import todoRoutes from ''


const app = express();
const PORT = 5000;

app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.send("Hello from homepage");

});

app.listen(PORT, () => console.log(`Running on : http://127.0.0.1:${PORT}`));