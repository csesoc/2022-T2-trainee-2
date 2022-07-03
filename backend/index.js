import express from 'express';

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).json({ msg: "Inside get request" });
})

app.use(express.json());

app.post('/register', (req, res) => {
    console.log(req.body.Name);
    res.status(200).json(req.body);
})

app.listen(8000, () => { console.log('Server is running on port 8000!') });