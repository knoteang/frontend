import React, { Component } from 'react';
import { Icon, Grid, Button, Divider, Container,Segment,Popup ,Modal,Header} from 'semantic-ui-react'

import ModalEdit from '../edit/edit'
import pic from './steve.jpg'
import './user.css'
class User extends Component {

  

  render() {
    return (
      
     <div className="Profile">
       
       <div class="ui grid massive message">
      <div class="ui container">
        <div class="row">
          <div class="h1 ui huge header">
            Hello, world!
          </div>
          
   
        </div>
      </div>
    </div>
    <div class="ui hidden divider"></div>
    <div class="ui container">
      <div class="ui stackable grid">
        <div class="three column row">
          <div class="column">
           
          <div class="ui card">

 

    <Popup
          trigger={ <a class="image" href="#link">
       <img class="ui medium image" src={pic}/>
         </a>}
           content='Hello! welcome to my profile'
           size='large'
    />
  <div class="content">
    <a class="header" href="/Profile">{JSON.parse(localStorage.getItem('profileUser')).username}</a>
    <div class="meta">
   
    </div>
  </div>

  <div class="content">

      
        <ModalEdit/>
      


      <div class="description">
        <p></p>
      </div>
    </div>
</div> 
        
          </div>

          <div class="nine wide column">
          <Segment raised>
            <div class="ui form">
                <div class="field">
                <div className='getallpost'>


    <div class="ui comments">
      <h1>All Your Post</h1>  <Divider />
      <div class="comment">
        <a class="avatar">
          <img class="ui medium image" src={pic}/>
        </a>
        <div class="content">
          <a class="author">Christian Rocha</a>
          <div class="text">
            I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket?
          </div>
        </div>
      </div>
     

     

    </div>
   <Divider />
  </div>
                 
                </div>
            </div>
           
          
            
         </Segment>
          </div>
        
        </div>
        <div class="row">
          <div class="column">
            <div class="ui divider"></div>
            <footer>
              &copy; 2017 Company, Inc.
            </footer>
          </div>
        </div>
      </div>
    </div>
       </div>
    );
  }
}

export default User;