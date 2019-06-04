const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE,  { useNewUrlParser: true });
mongoose.connection
  .on('connected', () => {
    console.log(`Mongoose connection open`);
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

const app = require('./server');
