import React, { Component } from 'react'
import { Divider, Card ,Image,Reveal } from 'semantic-ui-react'

import logo from '../Profile/daniel.jpg';
import './Post.css'

class PostLeft extends Component {
  render() {
    return (

      <div className="Left">
      

        <img class="ui medium rounded image" src={logo} />

        <Card
          header='Share your day with others'
          meta='Welcome Back ! to PS Post'
           />


      </div>
    );
  }
}
export default PostLeft