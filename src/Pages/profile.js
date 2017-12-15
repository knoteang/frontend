import React, { Component } from 'react'
import HeadFeed from '../Component/headfeed/headfeed';
import User from '../Component/Profile/user';

import Pic from '../pic/grey2.jpg'
const sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: "url(" + Pic + ")"
 
};

class Profile extends Component {

  
  render() {
    return (
      <div><div style={sectionStyle}>
        <HeadFeed />
        <User />
        </div>
      </div>
    );
  }
}
export default Profile;