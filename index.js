//! Import DISCORD
const Discord = require('discord.js');
const client = new Discord.Client();


//! Import Feature Function
const myFunction = require('./controller/functions.js');
const messaging = require('./controller/message.js');


//! Console log Display
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

//! Discord Text Channel
client.on('message', message => {
    let getPrefix = myFunction.getPrefix(message.content)

    switch (getPrefix) {
        //# Basic Command
        case '!c':
            messaging.basicCmd(message)
            break;

            //# Youtube Command
        case '!y':
            messaging.youtubeCmd(message)
            break;        
    }
    //# Basic Command

});

//! Discord Voice Channel
client.on('message', async message => {    
    if (!message.guild) return;

    if (message.content === '!join') {        
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            message.reply('Tutorial Bot has been connect to your discord')
        } else {
            message.reply('Please enter some room and then use command "!join" ');
        }
    }

    if (message.content === '!leave') {
        const disconnection = message.member.voice.channel.leave();
        message.reply('Tutorial Bot has been disconnect from your discord, Thank you')
    }    
});

//! Bot Identify
client.login('Njk5ODc4ODExMDk2ODQyMjkx.XpbctA.ImGzubQ_NmigqyCpjRV8SfzBQJc');