import dispatcher from '../dispatcher'
import SocketIOClient from 'socket.io-client'

const path = window.location.origin
const socket = SocketIOClient(path)

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
