require('babel-register')
const Server = require('./server/server.js').default
const config = require('./server/config.json')

module.exports = new Server(config)