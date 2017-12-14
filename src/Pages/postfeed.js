import React, { Component } from 'react';

import HeadFeed from '../Component/headfeed/headfeed';
import PostCom from '../Component/PostFeed/PostFeed'

class PostF extends Component {
  render() {
    return (
      
      <div className="PostFeed">
      <HeadFeed />
      <PostCom/>
      </div>
    );
  }
}

export default PostF;
