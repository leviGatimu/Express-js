import express from 'express';
import bodyParser from 'body-parser';
import cars from './routes/cars.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/cars', cars);


app.get('/', (req, res)=> {
    res.send("Hell from homepage");
});


app.listen(PORT , ()=>{
    console.log(`Server is running on port: http://localhost:${PORT}`);
});
