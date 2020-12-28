const Server = require('../src/app.js')

const argv = JSON.stringify(process.argv[2])

console.log(argv)


const server = new Server(argv)

server.startServer()