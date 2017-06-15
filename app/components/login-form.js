import React, { Component } from 'react'

export default class LoginForm extends Component {
  render () {
    return (
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          name='email'
          id='email'
          placeholder='Enter email' />
        <input
          type='password'
          className='form-control'
          name='password'
          id='password' />
        <button
          className='btn btn-default'
          id='enter-btn'>
          ENTER
        </button>
      </div>
    )
  }
}
