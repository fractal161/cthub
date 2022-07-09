require('dotenv').config({ path: '../.env' });
var { Client } = require('discord.js');
var db = require('./db');

const client = new Client({ intents: [] });

client.login(process.env.DISCORD_TOKEN);

const updateServer = (code) => {
  client.fetchInvite(code).then((invite) => {
    db.query(
      `UPDATE SERVERS
        SET (id, name, icon, members) = ($1, $2, $3, $4)
        WHERE code = $5
      `,
      [
        invite.guild.id,
        invite.guild.name,
        invite.guild.icon,
        invite.memberCount,
        invite.code,
      ],
      (err, result) => {
        if (err) {
          console.log(err.stack);
        }
      }
    );
  });
};

const updateAllServers = (codes) => {
  codes.forEach((item, i) => {
    updateServer(item.code);
  });
};

client.on('ready', () => {
  console.log('Connected to Discord API');
  setInterval(() => {
    db.query(`SELECT code from servers`, (err, result) => {
      if (err) {
        console.log(err.stack);
      } else {
        updateAllServers(result.rows);
      }
    });
  }, 10 * 1000);
});

// client.destroy()
