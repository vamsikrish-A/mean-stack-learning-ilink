require('dotenv').config();
const express = require('express');
const inderRouter = require('./routes/index.route');

const app = express();

app.use( inderRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT);