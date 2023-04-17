const path = require('path'); 
// /folder/files.jpg \folder\files\.jpg

function getMessages(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'images', 'loophero.webp'));
};

function postMessage(req, res) {
    console.log('Updating messages...');
}

//using named function, node can tell us the name where something went wrong in the log
module.exports = {
    getMessages,
    postMessage
}