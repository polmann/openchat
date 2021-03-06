'use strict'

export default class SocketClient {
  constructor (socket) {
    this.socket = socket
    this.id = this.socket.id
    this.socket.broadcast.emit('chat.user.connected', this.socket.id)
    this.init()
    this.initListeners()
  }

  init () {
    this.socket.emit('chat.init', {
      123: {
        id: 123,
        name: 'Alice',
        history: [
          {username: 'me', content: 'hi'},
          {username: 'Alice', content: 'hello'},
          {username: 'me', content: 'how are you?'},
          {username: 'Alice', content: 'fine'}
        ]
      },
      456: {
        id: 456,
        name: 'Bob',
        history: [
          {username: 'me', content: 'yeaah'}
        ]
      }
    })
  }

  getId () {
    return this.socket.id
  }

  initListeners () {
    this.socket.on('chat.typing', this.handleTyping.bind(this))
    this.socket.on('chat.message', this.handleChat.bind(this))
  }

  handleTyping (conversationId) {
    this.socket.broadcast.to(conversationId).emit('chat.typing', this.getId())
  }

  handleChat (message) {
    console.log('got a message: ', JSON.stringify(message))
    this.socket.broadcast.to(message.conversationId).emit('chat.message', message)
  }
}
