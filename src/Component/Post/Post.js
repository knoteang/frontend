import React from 'react'
import { Icon, Grid, Button, Divider, Container,Segment } from 'semantic-ui-react'

import GetAllPost from './GetAllPost'
import PostLeft from './PostLeft'
const Post = () => (

    <Grid >
        <Grid.Column width={4}>
        <center/>
            <PostLeft/>
        </Grid.Column>

    
        <Grid.Column width={8}>    <Segment raised>
            <div class="ui form">
                <div class="field">
                    <label>User Text</label>
                    <textarea autoHeight ></textarea>
                </div>
            </div>
            <br />
            <Container textAlign='right'>
                <Button animated textAlign='right'>
                    <Button.Content visible>POST</Button.Content>
                    <Button.Content hidden>
                        <Icon name='comment' />
                    </Button.Content>
                </Button>
            </Container>
            <Divider />
            <GetAllPost/></Segment>
        </Grid.Column>
  

        <Grid.Column width={4}>
            <p></p>
        </Grid.Column>
    </Grid>
)


export default Post
