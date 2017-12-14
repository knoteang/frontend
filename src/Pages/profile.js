import React, { Component } from 'react'
import HeadFeed from '../Component/headfeed/headfeed';
import User from '../Component/Profile/user';



class Profile extends Component {


  render() {
    return (
      <div>
        <HeadFeed />
        <User />

      </div>
    );
  }
}
export default Profile;