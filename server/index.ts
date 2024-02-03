import express from 'express';
const exp = require('express');
const app = exp();
const cors = require('cors');

app.use(cors());

//const app = express();
const PORT = /*process.env.PORT ||*/ 3000;

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});