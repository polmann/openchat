import React, { Component } from 'react'
import ProfilePicture from './profile-picture'

export default class Conversation extends Component {
  handleClick (e) {
    e.preventDefault()
    // todo
  }

  render () {
    const { profilePicture, name, lastMessage } = this.props
    return (
      <li onClick={this.handleClick.bind(this)}>
        <a className='nav-link' href='#'>
          <ProfilePicture src={profilePicture} />
          <div className='conversation-info'>
            <div className='name'>
              { name }
            </div>
            <div className='last-message ellipsis'>
              { lastMessage }
            </div>
          </div>
        </a>
      </li>
    )
  }
}
