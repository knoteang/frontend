import React, { Component } from 'react';
import { Icon, Grid, Button, Divider, Container,Segment } from 'semantic-ui-react'

import pic from './steve.jpg'

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
        <div class="two column row">
          <div class="column">
           
          <div class="ui card">
  <a class="image" href="#link">
  <img class="ui medium image" src={pic}/>
  </a>
  <div class="content">
    <a class="header" href="#link">Username</a>
    <div class="meta">
      <a class="time">//////////</a>
    </div>
  </div>
</div> 
        
          </div>

          <div class="eight wide column">
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