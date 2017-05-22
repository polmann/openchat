import React, { Component } from 'react'
import LoginForm from '../components/login-form'

export default class Login extends Component {
  render () {
    return (
      <div className='container-fluid row no-gutters justify-content-center'>
        <div className='login-wrap invert col-md-4 align-self-center'>
          <img className='logo' src='img/webchat-icon.png' />
          <h1 className='col-12'>WebChat</h1>
          <LoginForm />
        </div>
      </div>
    )
  }
}
