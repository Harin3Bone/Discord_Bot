const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('Njk5ODc4ODExMDk2ODQyMjkx.Xpa4lQ.8jvA46EmkQ6PFARltAH7pUJA4pE');