import React, { Component } from 'react'
import Chat from '../stateful/chat'
import Sidebar from '../stateful/sidebar'

export default class Main extends Component {
  render () {
    return (
      <div className='row no-gutters'>
        <Sidebar />
        <Chat />
      </div>
    )
  }
}
