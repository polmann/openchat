import React, { Component } from 'react'
import ChatContainer from '../containers/chat'
import SidebarContainer from '../containers/sidebar'

export default class Chat extends Component {
  constructor () {
    super()
    this.state = {
      conversations: [
        {
          id: 1,
          name: 'Alice',
          profilePicture: 'img/default-profile.png',
          history: [
            {username: 'me', content: 'hi'},
            {username: 'Alice', content: 'hello'},
            {username: 'me', content: 'how are you?'},
            {username: 'Alice', content: 'fine'}
          ]
        },
        {
          id: 2,
          name: 'Bob',
          profilePicture: 'img/default-profile.png',
          history: [
            {username: 'me', content: 'hi'},
            {username: 'Bob', content: 'hello'},
            {username: 'me', content: 'how are you?'},
            {username: 'Bob', content: 'good'}
          ]
        }
      ]
    }
  }

  render () {
    return (
      <div className='row no-gutters'>
        <SidebarContainer />
        <ChatContainer />
      </div>
    )
  }
}
