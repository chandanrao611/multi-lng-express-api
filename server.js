const http = require('http');
require('./constant');
const app = require('./app');
const port = 9595;
const server = http.createServer(app);
server.listen(port, _ => console.log(port));
