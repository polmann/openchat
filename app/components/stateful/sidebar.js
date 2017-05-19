import React, { Component } from 'react'
import Navbar from '../stateless/navbar'
import ListConversations from '../stateless/list-conversations'

export default class Sidebar extends Component {
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
      <div className='col-sm-4 col-md-3 sidebar'>
        <Navbar />
        <ListConversations conversations={this.state.conversations} />
      </div>
    )
  }
}
