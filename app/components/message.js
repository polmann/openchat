import React, { Component } from 'react'

export default class Message extends Component {
  render () {
    const { username, content } = this.props.message
    let messageContainerFlow = (username === 'me') ? 'd-flex flex-row flex-row-reverse mine' : 'd-flex flex-row'
    let messageClass = (username === 'me') ? 'message mine' : 'message'
    return (
      <div className={messageContainerFlow}>
        <div className={messageClass}>
          { content }
        </div>
      </div>
    )
  }
}
