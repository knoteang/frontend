import React, { Component } from 'react'
import { Icon, Grid, Button, Divider, Container, Segment } from 'semantic-ui-react'


import { publishPost, getAllPosts } from '../../api'
import GetAllPost from './GetAllPost'
import PostLeft from './PostLeft'
class Post extends Component {

    constructor() {
        super();
        this.state = { // set state can use in class component only
            content: ''
        }
        this.onTextChange = this.onTextChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onTextChange(e) {
        const name = e.target.name
        const value = e.target.value

        this.setState({ [name]: value })
        console.log(value)
    }

    onSubmit(e) {
        e.preventDefault()

        publishPost(this.state.content)
    }

    render() {
        return (
            < Grid >

                <Grid.Column width={4}>
                    <center />
                    <PostLeft />
                </Grid.Column>


                <Grid.Column width={8} ><Segment raised>

                    <div class="ui form" >

                        <div class="field">
                            <label>User Text</label>
                            <textarea autoHeight name='content' value={this.state.content} onChange={this.onTextChange}></textarea>
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

                    <Divider />
                    <GetAllPost /></Segment>
                </Grid.Column>


                <Grid.Column width={4}>
                    <p></p>
                </Grid.Column>

            </Grid >
        );
    }
}


export default Post
