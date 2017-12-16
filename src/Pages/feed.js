import React, { Component } from 'react';
import Post from '../Component/Post/Post'
import HeadFeed from '../Component/headfeed/headfeed';
import Pic from '../pic/grey.png'
const sectionStyle = {
  width: "100%",
  height: "750px",
  backgroundImage: "url(" + Pic + ")"
 
};

class Feed extends Component {
  render() {
    return (
      <div style={sectionStyle}>
      <div className="headfeed">

        <HeadFeed />
        <Post />
      </div>
</div>
    );
  }
}

export default Feed;