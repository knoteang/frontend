import React, { Component } from 'react'
import './headfeed.css'
import { Input, Menu, Dropdown, Button } from 'semantic-ui-react'


import ModalEdit from '../edit/edit'
class HeadFeed extends Component {

  signOut = event => {
    localStorage.clear()
    window.location.assign('/')
  }

  setTemUser(e) {
    localStorage.setItem('temUser', JSON.parse(localStorage.getItem('profileUser')).username)
  }

  render() {
    return (
      <div class="ui borderless huge menu">
        <div class="ui container grid">
          <div class="computer only row">
            <a class="header item" href="/Feed">PS POST <i class="small chat icon"></i></a>
            <div class="right menu">

              <a class="header item" href="/Profile" onClick={this.setTemUser}>{JSON.parse(localStorage.getItem('profileUser')).username}</a>
              <Dropdown text="Setting" pointing className='link item'>
                <Dropdown.Menu>

                  <Dropdown.Item><ModalEdit /></Dropdown.Item>

                </Dropdown.Menu>

              </Dropdown>

              <a class="item" onClick={this.signOut}>Log out</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HeadFeed;
