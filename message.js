//! Import myFunction
const myFunction = require('./functions');

//! Reply Message Setting 
//? Prefix for CMD 
let prefixReply = '!C '
let prefixYoutube = '!Y '

//? Basic Command Setup
function basicCmd(msg) {
    //# User message input
    let replyCmd = myFunction.makeUpperCase(msg.content)

    //# Reply from bot
    //* Test A
    if (replyCmd === prefixReply + 'PING') {
        msg.reply(replyCmd);
    }

    //* Test B
    if (replyCmd === prefixReply + 'PONG') {
        msg.reply(replyCmd);
    }
}

//? Youtube Command Setup
function youtubeCmd(msg){
    
}

//! Export module
module.exports = {
    basicCmd,
    youtubeCmd
}
