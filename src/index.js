const app = require('./app');
require('./Database');

const server = app.listen(app.get('port'), () => console.info(`Servidor iniciado en el puerto ${app.get('port')}`));

module.exports = server;