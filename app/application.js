import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

// import Chat from './pages/chat'
import Login from './pages/login'

ReactDOM.render(
  <BrowserRouter>
    <Route path='/' component={Login} />
  </BrowserRouter>,
    document.getElementById('app')
)
