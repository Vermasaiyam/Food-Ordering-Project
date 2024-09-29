const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const homeRouter = require('./routes/homeRouter');

const app = express();

app.use('/', homeRouter);

app.use(cors());
app.use(bodyParser.json());

module.exports = {app};