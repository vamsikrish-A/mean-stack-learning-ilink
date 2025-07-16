require('dotenv').config();
const express = require('express');
const inderRouter = require('./routes/index.route');
const workshopRouter = require('./routes/workshop.route');

const app = express();

app.use( inderRouter );
app.use( workshopRouter );

const PORT = process.env.PORT || 3000;

app.listen(PORT);