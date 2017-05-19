import React, { Component } from 'react'
import Message from './message'

export default class History extends Component {
  scrollToBottom () {
    const { history } = this.refs
    history.scrollTop = history.scrollHeight
  }

  componentDidMount () {
    this.scrollToBottom()
  }

  componentDidUpdate () {
    this.scrollToBottom()
  }

  render () {
    const { history } = this.props

    console.log('rendering history', history)

    return (
      <div id='history' ref='history'>
        {history.map((message, i) => <Message key={i} message={message} />)}
      </div>
    )
  }
}

History.defaultProps = {
  history: []
}
