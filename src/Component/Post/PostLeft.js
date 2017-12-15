import React,{Component} from 'react'
import { Divider,Card } from 'semantic-ui-react'

import logo from '../Profile/steve.jpg';
import './Post.css'

class PostLeft extends Component {
  render() {
    return (
  
    <div className="Left">
    <img class="ui medium rounded image" src={logo}/>
    
    <Card
    
    header='Share your day with others'
    meta='default'
  />
  </div>
);
  }
}
export default PostLeft