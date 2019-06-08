const { Pool, Client } = require('pg');
require('dotenv').config();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});


// This is what happens when you decide to switch databases and have to rewrite your backend
// mongoose.connect(process.env.DATABASE,  { useNewUrlParser: true });
// mongoose.Promise = global.Promise;
// mongoose.connection
//   .on('connected', () => {
//     console.log(`Mongoose connection open on ${process.env.DATABASE}`);
//   })
//   .on('error', (err) => {
//     console.log(`Connection error: ${err.message}`);
//   });

// pool.on('error', (err, client) => {
//   console.error('Unexpected error on idle client', err)
//   process.exit(-1)
// })

pool.connect(); // What's  this doing?

module.exports = pool;
// module.exports = {
//   query: (text, params) => pool.query(text, params)
// }