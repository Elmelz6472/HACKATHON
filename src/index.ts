import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all routes

app.get('/', (req, res) => {
    res.send('Hello, world! aaaaa');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
