//! Import myFunction
const myFunction = require('./functions');

//! Reply Message Setting 
//? Basic Command Setup
function basicCmd(msg) {
    //# Substring message input
    let replyCmd = myFunction.getCommand(msg.content)

    //# Reply from bot
    //* Test A
    if (replyCmd === 'PING') {
        msg.reply(replyCmd);
    }

    //* Test B
    if (replyCmd === 'PONG') {
        msg.reply(replyCmd);
    }
}

//? Youtube Command Setup
function youtubeCmd(msg){
    //# Substring message input
    let replyCmd = myFunction.getCommand(msg.content)

    //* Test B
    if (replyCmd === 'PANG') {
        msg.reply(replyCmd);
    }
}

//! Export module
module.exports = {
    basicCmd,
    youtubeCmd
}
