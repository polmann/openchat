import React, { Component } from 'react'
import config from '../config/default.json'

import Navbar from '../components/navbar'
import ConversationItem from '../components/conversation-item'

import ChatHeader from '../components/chat-header'
import History from '../components/history'
import MessageInput from '../components/message-input'

import * as ChatActions from '../actions/chat'
import ChatStore from '../stores/chat'

export default class Chat extends Component {
  constructor () {
    super()
    this.state = {
      activeConversationId: -1,
      conversations: ChatStore.getConversations()
    }
  }

  componentWillMount () {
    ChatStore.on('change', this.setConversations.bind(this))
  }

  componentWillUnmount () {
    ChatStore.removeListener('change', this.setConversations.bind(this))
  }

  setConversations () {
    this.setState({conversations: ChatStore.getConversations()})
  }

  getActiveConversation () {
    return this.state.conversations[this.state.activeConversationId] || null
  }

  handleActivateConversation (conversationId) {
    this.setState({activeConversationId: conversationId})
  }

  handleMessageInput (messageContent) {
    let message = {
      conversationId: this.state.activeConversationId,
      data: {username: 'me', content: messageContent}
    }
    ChatActions.message(message)
  }

  renderEachConversation (conversationId) {
    let conversation = this.state.conversations[conversationId]
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
    const { conversations } = this.state
    let activeConversation = this.getActiveConversation()

    return (
      <div className='row no-gutters'>
        <div className='col-sm-4 col-md-3 sidebar'>
          <Navbar title={appName} />
          <ul className='nav flex-column' id='coversations'>
            { Object.keys(conversations).map(this.renderEachConversation, this) }
          </ul>
        </div>
        { (activeConversation) ? this.renderActiveConversation(activeConversation) : this.renderEmptyConversation() }
      </div>
    )
  }
}
