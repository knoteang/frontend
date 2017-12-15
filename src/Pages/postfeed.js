import React, { Component } from 'react';

import HeadFeed from '../Component/headfeed/headfeed'
import PostCom from '../Component/PostFeed/PostFeed'
import Pic from '../pic/grey.png'
const sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: "url(" + Pic + ")"
 
};

class PostF extends Component {
  render() {
    return (
      <div style={sectionStyle}>
      
      <div className="PostFeed">
      <HeadFeed />
      <PostCom/>
      </div>
      </div>
    );
  }
}

export default PostF;
