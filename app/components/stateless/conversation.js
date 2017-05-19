import React, { Component } from 'react'
import ProfilePicture from './profile-picture'

export default class Conversation extends Component {
  render () {
    const { profilePicture } = this.props
    const { name } = this.props
    const { lastMessage } = this.props
    return (
      <li>
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
