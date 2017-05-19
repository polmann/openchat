import React, { Component } from 'react'
import ChatHeader from '../stateless/chat-header'
import History from '../stateless/history'
import TypeMessage from '../stateless/type-message'

export default class Chat extends Component {
  constructor () {
    super()
    this.state = {
      conversation: {
        id: 1,
        name: 'Alice',
        profilePicture: 'img/default-profile.png',
        history: [
          {username: 'me', content: 'hi'},
          {username: 'Alice', content: 'hello'},
          {username: 'me', content: 'how are you?'},
          {username: 'Alice', content: 'fine'}
        ]
      }
    }
  }

  handleTypedMessage (typedMessage) {
    let history = this.state.conversation.history
    history.push({username: 'me', content: typedMessage})
    this.setState({history})
  }

  render () {
    const { name, history } = this.state.conversation
    return (
      <div className='col-sm-8 col-md-9'>
        <ChatHeader name={name} />
        <History history={history} />
        <TypeMessage onSubmit={this.handleTypedMessage.bind(this)} />
      </div>
    )
  }
}
