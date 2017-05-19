import React, { Component } from 'react'
import Conversation from './conversation'

export default class ListCoversation extends Component {
  render () {
    const { conversations } = this.props
    return (
      <ul className='nav flex-column' id='coversations'>
        {conversations.map((conversation, i) => {
          let lastMessage = conversation.history[conversation.history.length - 1].content
          return <Conversation
            key={conversation.id}
            profilePicture={conversation.profilePicture}
            name={conversation.name}
            lastMessage={lastMessage}
            />
        })}
      </ul>
    )
  }
}
