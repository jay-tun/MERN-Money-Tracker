const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Transcation = require('./models/transcation.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());
app.get('/api/test', (req, res) => {
    res.json('test ok1');
});

app.post('/api/transcation', async (req, res) =>{
    await mongoose.connect(process.env.MONGO_URL);
    const {name, price, description, datetime} = req.body;
    const transcation = await Transcation.create({name, price, description, datetime});
    res.json(transcation);
});

app.get('/api/transcations', async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const transcations = await Transcation.find();
    res.json(transcations);
});

app.listen(4040);