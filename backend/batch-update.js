require('dotenv').config({ path: '../.env' });
const { Client } = require('pg');
const servers = require('./public/servers.json');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
client.connect();
servers.forEach((server) => {
  const query = `INSERT INTO servers
    (id, code, name, icon, members, description, date_added)
    VALUES($1, $2, $3, $4, $5, $6, $7)
    ON CONFLICT DO NOTHING`;
  let date = new Date();
  const args = [
    server.id,
    server.code,
    server.name,
    server.icon,
    server.members,
    server.description,
    date,
  ];
  client.query(query, args, (err, res) => {
    console.log(err ? err.stack : res.rows[0]); // Hello World!
  });
});
