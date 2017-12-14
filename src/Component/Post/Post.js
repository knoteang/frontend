import React, { Component } from 'react'
import { Icon, Grid, Button, Divider, Container, Segment } from 'semantic-ui-react'

import logo from '../Profile/steve.jpg';
import { publishPost, getAllPosts } from '../../api'
import PostLeft from './PostLeft'

import PostRight from './PostRight'

class Post extends Component {

    constructor() {
        super();
        this.state = { // set state can use in class component only
            content: '',
            allPosts: []
        }
        this.onTextChange = this.onTextChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onTextChange(e) {
        const name = e.target.name
        const value = e.target.value

        this.setState({ [name]: value })
    }

    onSubmit(e) {
        e.preventDefault()
        publishPost(this.state.content).then(() => { this.getPosts() })
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

                        <div class="ui message">
               <div class="header">Your Post </div>
               <div class="content">
                   <p></p>
                   </div>
                  </div>



                            <label>Comment</label>
                            <textarea rows="2" cols="50" name='content' value={this.state.content} onChange={this.onTextChange}></textarea>
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
                    {posts.length >= 0 ? //in { } is logic
                        posts.map(post =>
                            <div className='getallpost'>
                                <div class="ui comments">
                                    <div class="comment">
                                        <a class="avatar">
                                            <img class="ui medium image" src={logo} />
                                        </a>
                                        <div class="content">
                                            <a class="author">{post.author}</a>
                                            <div class="metadata">
                                                <span class="date">{post.time}</span>
                                            </div>
                                            <div class="text">
                                                {post.content}
                                            </div>


                                        </div>
                                    </div>
                                </div>

                                <Divider />
                            </div>
                        )
                        : null
                    }
                </Segment>
                </Grid.Column>


                <Grid.Column width={4}>
                <PostRight/>
                </Grid.Column>

            </Grid >
        );
    }
}


export default Post
