import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, BrowserRouter, Route, Switch } from 'react-router-dom'

import Chat from './pages/chat'
import Login from './pages/login'

ReactDOM.render(
  <BrowserRouter history={browserHistory}>
    <Switch>
      <Route name='login' exact path='/' component={Login} />
      <Route name='chat' path='/c' component={Chat} />
    </Switch>
  </BrowserRouter>,
    document.getElementById('app')
)
