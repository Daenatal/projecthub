function getMessages(req, res) {
    res.send('<ul><li>Hello Hunter!</li></ul>');
};

function postMessage(req, res) {
    console.log('Updating messages...');
}

//using named function, node can tell us the name where something went wrong in the log
module.exports = {
    getMessages,
    postMessage
}