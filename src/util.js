let axios = require('axios');
let serverList = require('../backend/public/serverCodes.json')
// stolen from https://github.com/hugonun/discordid2date/blob/master/main.js
// discord uses the snowflake format to generate all ids
function getCreationDate(id) {
  /* Note: id has to be str */
  let bin = (+id).toString(2);
  let unixbin = bin.substring(0, bin.length - 22);
  return parseInt(unixbin, 2) + 1420070400000;
}

async function makeApiCall(code) {
  const res = await axios(
    `https://discord.com/api/v10/invites/${code}?with_counts=true`,
  );
  const guild = res.data.guild;
  let server = {};
  server.id = guild.id;
  server.code = code;
  server.name = guild.name;
  server.icon = guild.icon;
  server.members =  res.data.approximate_member_count;
  return server;
}

module.exports = { getCreationDate, makeApiCall };