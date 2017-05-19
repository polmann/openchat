import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import Main from './components/pages/main'
// import Login from './components/pages/login'

ReactDOM.render(
  <BrowserRouter>
    <Route path='/' component={Main} />
  </BrowserRouter>,
    document.getElementById('app')
)
