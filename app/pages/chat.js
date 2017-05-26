import React, { Component } from 'react'
import SocketIOClient from 'socket.io-client'
import config from '../config/default.json'

import Navbar from '../components/navbar'
import ConversationItem from '../components/conversation-item'

import ChatHeader from '../components/chat-header'
import History from '../components/history'
import MessageInput from '../components/message-input'

export default class Chat extends Component {
  constructor () {
    super()
    this.state = {
      activeConversationId: -1,
      conversations: []
    }
    this.initSocket()
  }

  initSocket () {
    this.socket = SocketIOClient('http://localhost:3000')
    this.socket.on('chat.init', (conversations) => {
      this.setState({conversations})
      console.log('init.chat', JSON.stringify(this.state))
    })
  }

  getConversation (conversationId) {
    let conversation = this.state.conversations.find((conversation) => {
      return conversation.id === conversationId
    })
    return conversation || null
  }

  handleActivateConversation (conversationId) {
    this.setState({activeConversationId: conversationId})
  }

  handleMessageInput (messageContent) {
    let message = {username: 'me', content: messageContent}
    let conversation = this.getConversation(this.state.activeConversationId)
    conversation.history.push(message)
    let conversations = this.state.conversations
    this.setState({conversations})
  }

  renderEachConversation (conversation) {
    return <ConversationItem
      key={conversation.id}
      conversation={conversation}
      isActive={(conversation.id === this.state.activeConversationId)}
      onClick={this.handleActivateConversation.bind(this, conversation.id)}
      />
  }

  renderActiveConversation (activeConversation) {
    let name = (activeConversation && activeConversation.name) ? activeConversation.name : ''
    let history = (activeConversation && activeConversation.history) ? activeConversation.history : []
    return (
      <div className='col-sm-8 col-md-9'>
        <ChatHeader name={name} />
        <History history={history} />
        <MessageInput onSubmit={this.handleMessageInput.bind(this)} />
      </div>
    )
  }

  renderEmptyConversation () {
    return (
      <div className='col-sm-8 col-md-9'>
        <ChatHeader />
      </div>
    )
  }

  render () {
    const { appName } = config
    const { activeConversationId, conversations } = this.state
    let activeConversation = this.getConversation(activeConversationId)

    return (
      <div className='row no-gutters'>
        <div className='col-sm-4 col-md-3 sidebar'>
          <Navbar title={appName} />
          <ul className='nav flex-column' id='coversations'>
            { conversations.map(this.renderEachConversation, this) }
          </ul>
        </div>
        { (activeConversation) ? this.renderActiveConversation(activeConversation) : this.renderEmptyConversation() }
      </div>
    )
  }
}
