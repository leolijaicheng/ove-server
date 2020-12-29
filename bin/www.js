const Server = require('../src/app.js')

const argv = JSON.parse(process.argv[2])

console.log('argv::',argv)


const server = new Server(argv)

server.startServer()