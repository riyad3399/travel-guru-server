const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const travels = require('./data/travels.json');

app.use(cors())

app.get('/', (req, res) => {
    res.send('Travel is comming soon')
})

app.get('/travels', (req, res) => {
    res.send(travels)
})

app.listen(port, () => {
    console.log(`Travel api is running on port: ${port}`);
})