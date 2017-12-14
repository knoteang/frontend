import React, { Component } from 'react';
import { Icon, Grid, Button, Divider, Container,Segment,Popup } from 'semantic-ui-react'

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
      <a class="ui header" href="#link">Link Header</a>
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
                    <label>User Text</label>
                 
                </div>
            </div>
            <br />
          
            <Divider />
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