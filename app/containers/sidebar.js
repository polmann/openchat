import React, { Component } from 'react'
import Navbar from './navbar'
import ListConversations from './list-conversations'

export default class SidebarContainer extends Component {
  render () {
    const { conversations } = this.props
    return (
      <div className='col-sm-4 col-md-3 sidebar'>
        <Navbar />
        <ListConversations conversations={conversations} />
      </div>
    )
  }
}
