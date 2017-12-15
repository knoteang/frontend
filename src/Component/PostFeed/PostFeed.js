import React, { Component } from 'react'
import { Icon, Grid, Button, Divider, Container, Segment, Form, Message, Input, Menu,Rating } from 'semantic-ui-react'
import { publishPost, getAllPosts, search } from '../../api'

import pic from '../Profile/daniel.jpg'
import PostLeft from '../Post/PostLeft'
import PostRight from '../Post/PostRight'
class PostCom extends Component {

    constructor() {
        super();
        this.state = { // set state can use in class component only
            content: '',
            sw: '',
            allPosts: []
        }
        this.onTextChange = this.onTextChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onSearch = this.onSearch.bind(this)
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

    onSearch(e) {
        const name = e.target.name
        const value = e.target.value
        this.setState({ [name]: value })
    }

    search = () => {
        search(this.state.sw)
            .then(data => this.setState({ allPosts: data }))
            .catch(err => console.error('Something went wrong.'))
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


                <Grid.Column width={8} >
                    <Menu.Item>
                    
                        <Input  size="large"  placeholder='Search...' name='sw' onChange={this.onSearch} />
                        <Button circular icon='search' />
                    </Menu.Item>
                    <Segment raised>
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

                            <Segment raised>
                                <div class="ui form">
                                    <div class="field">
                                        <div className='getallpost'>
                                            <div class="ui comments">
                                                <div class="comment">
                                                    <a class="avatar">
                                                        <img class="ui medium image" src={pic} />
                                                    </a>
                                                    <div class="content">
                                                        <a class="author">{post.author}</a>
                                                        <div class="text">
                                                            {post.content}

                                                            <Divider/>
                                                            <Button.Group basic size='mini' floated="right">
                                      <Button icon='delete' />
                                       <Button icon='eye' name={post._id} onClick={(e) => this.setID(post._id)} />
                                       </Button.Group> 
                                       <Rating icon='heart' defaultRating={1} maxRating={3} />

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                               

                            </Segment>

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