import React, { Component } from 'react'

export default class Navbar extends Component {
  render () {
    const { title } = this.props
    return (
      <nav className='navbar navbar-default'>
        { title }
      </nav>
    )
  }
}

Navbar.defaultProps = {
  title: ''
}
