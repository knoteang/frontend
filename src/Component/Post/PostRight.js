import React,{Component} from 'react'
import { Divider,Card } from 'semantic-ui-react'

import logo from '../Profile/steve.jpg';


class PostRight extends Component {
  render() {
    return (
  <div>
    <div className="Right">
    
    <Card
    
    header={JSON.parse(localStorage.getItem('profileUser')).username}
    meta='default'
  />
  </div></div>
);
  }
}
export default PostRight