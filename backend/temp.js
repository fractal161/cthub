require('dotenv').config({ path: '../.env' })
const { Client } = require('pg')
const servers = require('./public/servers.json')

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
      rejectUnauthorized: false
    }
});
client.connect();

client.query('SELECT * FROM servers', (err, res) => {
  console.log(err ? err.stack : res.rows[0]) // Hello World!
  client.end()
});