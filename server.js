const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyparser = require('body-parser');
app.use(bodyparser.json());

app.get('/',(req,res) => {
    res.send("hello i am vishw");
})

const personRoutes = require('./routes/PersonRoutes.js');

app.use('/person',personRoutes);

const port = process.env.PORT;

app.listen(port);