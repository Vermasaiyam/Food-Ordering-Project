const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const homeRouter = require('./routes/homeRouter');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use('/', homeRouter);

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRoutes);

module.exports = {app};