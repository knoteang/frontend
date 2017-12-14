import React, { Component } from 'react';
import { Icon, Grid, Button, Divider, Container,Segment } from 'semantic-ui-react'



class postUser extends Component {
  render() {
    return (
     <div className="postUser">
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
    );
  }
}

export default postUser;