'use strict'

import SocketIO from 'socket.io'
import SocketClient from './socket-client'

export default class SocketManager {
  constructor (httpServer, eventEmitter) {
    this.clients = {}
    this.io = SocketIO(httpServer)
    this.eventEmitter = eventEmitter

    this.io.on('connection', this.handleConnect.bind(this))
  }

  handleConnect (socket) {
    console.log('user connected ', socket.id)
    socket.on('disconnect', this.handleClientDisconnect.bind(this, socket.id))
    this.clients[socket.id] = new SocketClient(socket)
  }

  handleClientDisconnect (socketId) {
    console.log('user disconnected ', socketId)
    delete this.clients[socketId]
  }
}
