'use strict'

import SocketIO from 'socket.io'

export default class SocketManager {
  constructor (httpServer, eventEmitter) {
    this.clients = {}
    this.io = SocketIO(httpServer)
    this.eventEmitter = eventEmitter

    this.io.on('connection', this.handleConnect.bind(this))
  }

  initClientListeners (socket) {
    socket.on('typing', this.handleTyping)
    socket.on('chat', this.handleChat)
    socket.on('disconnect', this.handleDisconnect.bind(this))
  }

  handleConnect (socket) {
    console.log('socket connected ', socket.id)
    socket.emit('usersonline', 'bla')
    socket.broadcast.emit('userconnected', socket.id)
    this.initClientListeners(socket)
    this.clients[socket.id] = socket
  }

  handleTyping (conversationId) {
    this.broadcast.to(conversationId).emit('typing', this.id)
  }

  handleChat (message) {
    console.log('new message ', JSON.stringify(message))
    this.broadcast.to(message.conversationId).emit('chat', message)
  }

  handleDisconnect (socketId) {
    console.log('socket disconnected ', socketId)
    this.clients[socketId].broadcast.emit('disconnected', socketId)
    delete this.clients[socketId]
  }
}
