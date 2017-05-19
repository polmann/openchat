import React, { Component } from 'react'
import ProfilePicture from './profile-picture'

export default class ConversationItem extends Component {
  renderLastMessage (history) {
    let lastMessage = (history && history.length > 0) ? history[history.length - 1].content : ''
    return !lastMessage || <div className='last-message ellipsis'>{lastMessage}</div>
  }

  render () {
    const { conversation, isActive, onClick } = this.props
    let activeClass = (isActive) ? 'nav-link active' : 'nav-link'
    return (
      <li className={activeClass} onClick={onClick}>
        <ProfilePicture src={conversation.profilePicture} />
        <div className='conversation-info'>
          <div className='name'>
            { conversation.name }
          </div>
          { this.renderLastMessage(conversation.history) }
        </div>
      </li>
    )
  }
}

ConversationItem.defaultProps = {
  conversation: {
    profilePicture: 'img/default-profile.png',
    name: 'Anonymous',
    history: []
  },
  isActive: false,
  onClick: function () {}
}
