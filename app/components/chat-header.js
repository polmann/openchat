import React, { Component } from 'react'

export default class ChatHeader extends Component {
  render () {
    const { name } = this.props
    return (
      <nav className='navbar navbar-default'>
        { name }
      </nav>
    )
  }
}

ChatHeader.defaultProps = {
  name: ''
}
