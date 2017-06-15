import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class ChatStore extends EventEmitter {
  constructor () {
    super()
    this.conversations = {}
  }

  getConversations () {
    return this.conversations
  }

  init (conversations) {
    this.conversations = conversations
    this.emit('change')
  }

  message (message) {
    this.conversations[message.conversationId].history.push(message.data)
    this.emit('change')
  }

  handleActions (action) {
    switch (action.type) {
      case 'chat.init': this.init(action.data)
        break
      case 'chat.message': this.message(action.data)
        break
    }
  }
}

const chatStore = new ChatStore()
dispatcher.register(chatStore.handleActions.bind(chatStore))
export default chatStore
