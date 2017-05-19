import React, { Component } from 'react'

export default class ProfilePicture extends Component {
  render () {
    return <img className='profile-picture' src={this.props.src} />
  }
}
