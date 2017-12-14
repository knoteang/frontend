import React from 'react'
import { Divider } from 'semantic-ui-react'

import logo from './dog.jpg';
import './Post.css'

const PostLeft = () => (
  <div>
    <img class="ui medium rounded image" src={logo}/>
    <Divider />
    <h2>
      Username
    </h2>
  </div>
)
export default PostLeft