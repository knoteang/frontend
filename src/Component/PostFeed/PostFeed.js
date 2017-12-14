import React, { Component } from 'react'
import { Icon, Grid, Button, Divider, Container, Segment,Form,Message } from 'semantic-ui-react'

import PostLeft from '../Post/PostLeft'
import PostRight from '../Post/PostRight'
class PostCom extends Component {

render(){
    return (

      < Grid >
      
                      <Grid.Column width={4}>
                          <center />
                          <PostLeft />
                      </Grid.Column>


                      <Grid.Column width={8} ><Segment raised>
                          <div class="ui form" >
                              <div class="field">
                                  <label>What's new?</label>
                                  <textarea autoHeight ></textarea>
                              </div>
      
                              <br />

                              <Container textAlign='right' >
                                  <Button animated textAlign='right' onClick={this.onSubmit}>
                                      <Button.Content visible >POST</Button.Content>
                                      <Button.Content hidden>
                                          <Icon name='comment' />
                                      </Button.Content>
                                  </Button>
                              </Container>
                          </div>
                      </Segment>

                      <Message color='teal' size='big'>

                      <Button.Group basic size='small'floated='right'>
                            <Button icon='delete' />
                            <Button icon='eye' href="" />
                   </Button.Group>
                     

                     <Message.Header>///username///</Message.Header>
                    
                     <p>-------------------- content---------------</p>

                   </Message>
                    
                      </Grid.Column>


                      <Grid.Column width={4}>
                      <PostRight/>
                      </Grid.Column>
      
                  </Grid >
                 
    );
   }
}
export default PostCom