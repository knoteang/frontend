import React, { Component } from 'react';
import { Icon, Grid, Button, Divider, Container, Segment, Popup, Modal, Header } from 'semantic-ui-react'
import { getMyPost } from '../../api'

import pic from './steve.jpg'
import './user.css'
class User extends Component {

  constructor() {
    super();
    this.state = {
      allPosts: []
    }
    this.setID = this.setID.bind(this)
  }
  setID(id) {
    localStorage.setItem('post_id', id)
    window.location.assign("/Comment")
  }

  getPosts = () => {
    getMyPost()
      .then(data => this.setState({ allPosts: data }))
      .catch(err => console.error('Something went wrong.'))
  }

  componentWillMount() { // when render finish call is func
    this.getPosts()
  }

  render() {
    const posts = this.state.allPosts

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
                    <a class="header" href="/Profile">{JSON.parse(localStorage.getItem('profileUser')).username}</a>
                    <div class="meta">

                    </div>
                  </div>

                  <div class="content">

                    <div class="description">
                      <p></p>
                    </div>
                  </div>
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
                                  <Button circular icon='eye' floated='right' name={post._id} onClick={(e) => this.setID(post._id)} />
                                </div>
                                <Divider />
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