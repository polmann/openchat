import dispatcher from '../dispatcher'
import SocketIOClient from 'socket.io-client'

const socket = SocketIOClient('http://localhost:3000')

export function init (conversations) {
  dispatcher.dispatch({
    type: 'chat.init',
    data: conversations
  })
}

export function message (message) {
  dispatcher.dispatch({
    type: 'chat.message',
    data: message
  })
  socket.emit('chat.message', message)
}

socket.on('chat.init', init)
socket.on('chat.message', message)
