import React, { Component } from 'react';
import Post from '../Component/Post/Post'
import HeadFeed from '../Component/headfeed/headfeed';


class Feed extends Component {
  render() {
    return (

      <div className="headfeed">

        <HeadFeed />
        <Post />
      </div>

    );
  }
}

export default Feed;