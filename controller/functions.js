//! External Function 
//? Get Prefix for choose command section
function getPrefix(message){
    let prefix = message.substring(0,2);
    return prefix
}

//? Get Command for choose activity program
function getCommand(message){
    let data = message.toUpperCase();
    let command = data.substring(3);
    return command
}

//? Get Youtube URL for open song
function getLink(message){
    let url = message.substring(3);
    return url
}

//# Export Function
module.exports = {    
    getPrefix,
    getCommand,
    getLink
}