require('babel-register')
const Server = require('./server.js').default
const config = require('./config.json')

module.exports = new Server(config)