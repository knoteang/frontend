import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import localStorage from 'localStorage'

import Main from './Pages/main'
import SignUp from './Pages/SignUp'
import Feed from './Pages/feed'
import Profile from './Pages/profile'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/Signup" component={SignUp} />
      {!localStorage.getItem('profileUser') ? (
        <Redirect to="/" />
      ) : (
          <Switch>
            <Route exact path="/Feed" component={Feed} />
            <Route exact path="/Profile" component={Profile} />
          </Switch>
        )}
    </Switch>
  )
}

export default Routes