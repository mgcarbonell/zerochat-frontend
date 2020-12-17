import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Chat from '../pages/Chat'
import Join from '../pages/Join'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = localStorage.getItem('id')
  return  <Route { ...rest } render={ props => {
            return currentUser ? <Component { ...rest } { ...props } /> : <Redirect to="/login" />
          }} 
  />
}

const Routes = (props) => (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/register' component={ Register } />
    <Route path='/login' render={ (routeComponentProps) => {
      return  <Login 
                {...routeComponentProps}
                currentUser={ props.currentUser }
                storeUser={ props.storeUser }
                currentUsername={ props.currentUsername }
                storeUsername={ props.storeUsername }
              />
              
    } } />
    <PrivateRoute path='/profile' component={ Profile } currentUser={ props.currentUser } />
    <PrivateRoute path='/join' component={ Join } currentUser={ props.currentUser } />
    <PrivateRoute path='/chat' component={ Chat } currentUser={ props.currentUser } />
  </Switch>
)

export default Routes;