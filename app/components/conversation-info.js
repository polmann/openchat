import React, { Component } from 'react'

export default class ConversationInfo extends Component {
  render () {
    const { name, lastMessage } = this.props
    let lastMessageDiv = (lastMessage) ? <div className='last-message ellipsis'>{lastMessage}</div> : ''
    return (
      <div className='conversation-info'>
        <div className='name'>
          { name }
        </div>
        { lastMessageDiv }
      </div>
    )
  }
}

ConversationInfo.defaultProps = {
  name: '',
  lastMessage: ''
}
