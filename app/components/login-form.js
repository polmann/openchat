import React, { Component } from 'react'

export default class LoginForm extends Component {
  render () {
    return (
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          name='username'
          id='username'
          placeholder='Enter username' />
        <button
          className='btn btn-default'
          id='enter-btn'>
          ENTER
        </button>
      </div>
    )
  }
}
