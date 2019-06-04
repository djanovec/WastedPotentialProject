const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE,  { useNewUrlParser: true });
// mongoose.Promise = global.Promise;
mongoose.connection
  .on('connected', () => {
    console.log(`Mongoose connection open on ${process.env.DATABASE}`);
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

const app = require('./server');
const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});