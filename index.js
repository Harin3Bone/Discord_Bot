//! Import DISCORD
const Discord = require('discord.js');
const client = new Discord.Client();


//! Import Feature Function
const messaging = require('./message.js');

//! Console log Display
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

//! Discord reply
client.on('message', msg => {
    //# Basic Command
    messaging.basicCmd(msg)        
});

//! Token Identify
client.login('Njk5ODc4ODExMDk2ODQyMjkx.Xpa4lQ.8jvA46EmkQ6PFARltAH7pUJA4pE');

//! Invite Link
//? https://discordapp.com/api/oauth2/authorize?client_id=699878811096842291&permissions=8&scope=bot