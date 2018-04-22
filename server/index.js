require('ts-node/register');
const Server = require('./server').Server;
const server = new Server();
server.start((host, port) => {
    console.log(`server started at ${host}://${port}`);
})
.catch(err => {
    console.log(err);
})