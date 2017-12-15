import React, { Component } from 'react';
import { Icon, Grid, Rating, Button, Divider, Container, Segment, Popup, Modal, Header, List } from 'semantic-ui-react'
import { getMyPost, getUserOne } from '../../api'

import pic from './daniel.jpg'
import './user.css'
class User extends Component {

  constructor() {
    super();
    this.state = {
      allPosts: [],
      user: []
    }
    this.setID = this.setID.bind(this)
  }
  setID(id) {
    localStorage.setItem('post_id', id)
    window.location.assign("/Comment")
  }

  getUser = () => {
    //alert(localStorage.getItem('temUser'))
    getUserOne(localStorage.getItem('temUser'))
      .then(data => console.log)
      .then(this.getPosts())
  }

  getPosts = () => {
    getMyPost()
      .then(data => this.setState({ allPosts: data }))
      .catch(err => console.error('Something went wrong.'))
  }

  componentWillMount() { // when render finish call is func
    this.getUser()
  }

  render() {
    const posts = this.state.allPosts
    const userW = this.state.user
    return (

      <div className="Profile">

       
        <div class="ui hidden divider"></div>
        <div class="ui container">
          <div class="ui stackable grid">
            <div class="three column row">
              <div class="column">

                <div class="ui card">



                  <Popup
                    trigger={<a class="image" href="#link">
                      <img class="ui medium image" src={pic} />
                    </a>}
                    content='Hello! welcome to my profile'
                    size='large'
                  />
                  <div class="content">
                    <a class="header" href="/Profile">{localStorage.getItem('temUser')}</a>
                  </div>
                  {userW.length >= 0 ? //in { } is logic
                    userW.map(userQ =>
                      <div class="content">
                        <div class="meta">{userQ.firstName} {userQ.lastName}</div>
                        <div class="description">


                          <List>
                            <List.Item>
                              <List.Icon name='users' />
                              <List.Content>{userQ.username}</List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Icon name='mail' />
                              <List.Content>{userQ.mail}</List.Content>
                            </List.Item>

                            <List.Item>
                              <List.Icon name='phone' />
                              <List.Content>{userQ.phone}</List.Content>
                            </List.Item>
                          </List>

                        </div>
                      </div>
                    )
                    : null
                  }
                </div>

              </div>


              <div class="nine wide column">
                <Segment raised>
                  <div class="ui form">
                    <div class="field">
                      <div className='getallpost'>


                        <div class="ui comments">
                          <h1>All {localStorage.getItem('temUser')} Post</h1>  <Divider />
                          {posts.length >= 0 ? //in { } is logic
                            posts.map(post =>
                              <div class="comment">
                                <a class="avatar">
                                  <img class="ui medium image" src={pic} />
                                </a>
                                <div class="content">
                                  <a class="author">{post.author}</a>
                                  <div class="text">
                                    {post.content}
                                  </div>
                                  <Rating icon='heart' defaultRating={1} maxRating={3} />
                                  <Button circular icon='eye' size="mini" name={post._id} onClick={(e) => this.setID(post._id)} />

                                  <Divider /></div>
                              </div>

                            )
                            : null
                          }



                        </div>

                      </div>
                    </div>
                  </div>



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