//! External Function 
//? Make String to upper case
function makeUpperCase(msg){
    let data = msg.toUpperCase();
    return data
}

function getPrefix(msg){
    let prefix = msg.substring(0,2);
    return prefix
}

function getCommand(msg){
    let data = msg.toUpperCase();
    let command = data.substring(3);
    return command
}

//# Export Function
module.exports = {
    makeUpperCase,
    getPrefix,
    getCommand
}