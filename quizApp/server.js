const express = require('express');
const bodyParser = require('body-parser');
const getQuizRoute = require('./routes/quiz.routes');

const app = express();

app.use('/api', getQuizRoute);
app.use(bodyParser);

module.exports = app;