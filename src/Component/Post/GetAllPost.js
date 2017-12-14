import React from 'react'
import { Divider } from 'semantic-ui-react'

import logo from './dog.jpg';
import Reply from './Reply/Reply';

const GetAllPost = () => (
  <div className='getallpost'>
    <div class="ui comments">
      <div class="comment">
        <a class="avatar">
          <img class="ui medium image" src={logo}/>
        </a>
        <div class="content">
          <a class="author">Christian Rocha</a>
          <div class="metadata">
            <span class="date">2 days ago</span>
          </div>
          <div class="text">
            I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket?
          </div>
          <Divider />
          <Reply />
        </div>
      </div>
    </div>
    <Divider />
  </div>
)

export default GetAllPost