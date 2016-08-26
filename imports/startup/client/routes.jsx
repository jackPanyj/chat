import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Chat from '../../ui/Chat.jsx';
import SignUp from '../../ui/auth/SignUp.jsx'
import Login from '../../ui/auth/Login.jsx'
import Home from '../../ui/Home.jsx'
import App from '../../ui/App.jsx'
import Account from '../../ui/Account.jsx';
export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path = "/" component = {App}>
      <IndexRoute component = {Home}/>
      <Route path = "/" component = {Home}/>
      <Route path = "/login" component = {Login} />
      <Route path = "/signup" component = {SignUp} />
      <Route path="/account" component={Account} />
      <Route path="/chat" component={Chat} />
    </Route>
  </Router>
)
