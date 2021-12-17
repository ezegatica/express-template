const functions = [];

functions.hello = (req, res) => {
    res.send('Hola Mundo');
}

module.exports = functions;