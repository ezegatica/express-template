const express = require('express');
const cors = require('cors');

const AppRutas = require("./Routes/App.routes")
const config = require('./Config');
const initSetup = require('./Libs/ServerStartup')

initSetup();
const app = express();
app.set("port", config.PORT);
app.use(express.json())
app.use(cors());

app.use('/app', AppRutas);

app.all('*', function (req, res) {
    res.status(404).send('No se pudo obtener la ruta ' + req.url);
});
module.exports = app;