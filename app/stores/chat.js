
import { EventEmitter } from 'events'
import SocketIOClient from 'socket.io-client'

class ChatStore extends EventEmitter {
  constructor () {
    super()
    this.conversations = []
    this.initSocket()
  }

  initSocket () {
    this.socket = SocketIOClient('http://localhost:3000')
    this.socket.on('chat.init', (conversations) => {
      this.conversations = conversations
      this.emit('change')
      console.log('init.chat', JSON.stringify(this.getConversations()))
    })
  }

  getConversations () {
    return this.conversations
  }
}

const chatStore = new ChatStore()
window.chatStore = chatStore
export default chatStore
