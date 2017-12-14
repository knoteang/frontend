import React,{Component} from 'react'
import { Divider,Card } from 'semantic-ui-react'

import logo from '../Profile/steve.jpg';
import './Post.css'

class PostLeft extends Component {
  render() {
    return (
  <div>
    <div className="Left">
    <img class="ui medium rounded image" src={logo}/>
    <Card
    link
    header={JSON.parse(localStorage.getItem('profileUser')).username}
    meta='default'
  />
  </div></div>
);
  }
}
export default PostLeft