import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import localStorage from 'localStorage'

import Main from './Pages/main'
import SignUp from './Pages/SignUp'
import Feed from './Pages/feed'
import Profile from './Pages/profile'
import Admin from './Pages/admin'
import PostFeed from './Pages/postfeed'
import Facebook from './Component/choose/Facebook'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/Signup" component={SignUp} />
      <Route exact path="/Facebook" component={Facebook} />
      {!localStorage.getItem('profileUser') ? (
        <Redirect to="/" />
      ) : (
          <Switch>
            <Route exact path="/Feed" component={PostFeed} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/Comment" component={Feed} />
            {JSON.parse(localStorage.getItem('profileUser')).status == "user" ? (
              <Redirect to="/Feed" />
            ) : (
                <Route exact path="/Admin" component={Admin} />
              )}
          </Switch>
        )}
    </Switch>
  )
}

export default Routes