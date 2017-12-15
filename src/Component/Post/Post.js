import React, { Component } from 'react'
import { Icon, Grid, Button, Divider, Container, Segment, Message } from 'semantic-ui-react'

import logo from '../Profile/steve.jpg';
import { publishPostComments, getComments, getTopic } from '../../api'
import PostLeft from './PostLeft'

import PostRight from './PostRight'

class Post extends Component {

    constructor() {
        super();
        this.state = { // set state can use in class component only
            content: '',
            allPosts: [],
            contentT: '',
            author: ''
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
        publishPostComments(this.state.content, "comment", ).then(() => { this.getComments() })
    }

    getComments = () => {
        getComments()
            .then(data => this.setState({ allPosts: data }))
            .catch(err => console.error('Something went wrong.'))
    }

    getTopic = () => {
        getTopic()
            .then(response => {
                this.state.contentT = response.content
                this.state.author = response.author
                this.getComments()
            })
            .catch(err => console.error('Something went wrong.'))
    }

    setTemUser(e) {
        localStorage.setItem('temUser', e.target.name)
        window.location.assign("/Profile")
    }

    componentWillMount() { // when render finish call is func
        this.getTopic()
    }

    render() {
        const comments = this.state.allPosts
        console.log(this.state)
        return (
            < Grid >

                <Grid.Column width={4}>
                    <center />
                    <PostLeft />
                </Grid.Column>


                <Grid.Column width={8} ><Segment raised>

                    <div class="ui form" >

                        <div class="field">
                            <div class="ui secondary segment">
                                <div className='getallpost'>
                                    <div class="ui comments">
                                        <div class="comment">

                                            <div class="content">
                                                <a class="author">{this.state.author} </a>
                                                <div class="text">
                                                    {this.state.contentT}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label>Comment</label>
                            <textarea rows="2" cols="50" name='content' value={this.state.content} onChange={this.onTextChange}></textarea>
                        </div>
                        <br />
                        <Container textAlign='right' >
                            <Button animated textAlign='right' onClick={this.onSubmit}>
                                <Button.Content visible >COMMENT</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='comment' />
                                </Button.Content>
                            </Button>
                        </Container>
                    </div>

                    <Divider />
                    {comments.length >= 0 ? //in { } is logic
                        comments.map(comment =>
                            <div className='getallpost'>
                                <div class="ui comments">
                                    <div class="comment">
                                        <a class="avatar">
                                            <img class="ui medium image" src={logo} />
                                        </a>
                                        <div class="content">
                                            <a class="author" name={comment.author} onClick={this.setTemUser}>{comment.author}</a>
                                            <div class="metadata">
                                                <span class="date">{comment.time}</span>
                                            </div>
                                            <div class="text">
                                                {comment.content}
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
                    <PostRight />
                </Grid.Column>

            </Grid >
        );
    }
}


export default Post
