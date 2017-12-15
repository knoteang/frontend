import React, { Component } from 'react'
import { Icon, Grid, Button, Divider, Container, Segment, Form, Message } from 'semantic-ui-react'
import { publishPost, getAllPosts } from '../../api'

import PostLeft from '../Post/PostLeft'
import PostRight from '../Post/PostRight'
class PostCom extends Component {

    constructor() {
        super();
        this.state = { // set state can use in class component only
            content: '',
            allPosts: []
        }
        this.onTextChange = this.onTextChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.setID = this.setID.bind(this)
    }
    onTextChange(e) {
        const name = e.target.name
        const value = e.target.value

        this.setState({ [name]: value })
    }

    setID(id) {
        localStorage.setItem('post_id', id)
        //this.props.history.replace('/Comment')
        console.log(localStorage.getItem("post_id"))
        window.location.assign("/Comment")
    }

    onSubmit(e) {
        e.preventDefault()
        publishPost(this.state.content, "topic").then(() => { this.getPosts() })
    }

    getPosts = () => {
        getAllPosts()
            .then(data => this.setState({ allPosts: data }))
            .catch(err => console.error('Something went wrong.'))
    }

    componentDidMount() { // when render finish call is func
        this.getPosts()
    }

    render() {
        const posts = this.state.allPosts
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
                </Segment>

                    {posts.length >= 0 ? //in { } is logic
                        posts.map(post =>
                            <Message color='teal' size='big'>

                                <Button.Group basic size='small' floated='right'>
                                    <Button icon='delete' />
                                    <Button icon='eye' name={post._id} onClick={(e) => this.setID(post._id)} />
                                </Button.Group>


                                <Message.Header>{post.author}</Message.Header>

                                <p>{post.content}</p>

                            </Message>
                        )
                        : null
                    }
                </Grid.Column>


                <Grid.Column width={4}>
                    <PostRight />
                </Grid.Column>

            </Grid >

        );
    }
}
export default PostCom