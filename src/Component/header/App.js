import React, { Component } from 'react'
import './App.css';
import { loginLocal, getUserOne } from '../../api'

class App extends Component {

  state = { // set state can use in class component only
    username: '',
    password: ''
  }

  onTextChange = event => { // can use for all that have name and value
    const name = event.target.name
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  onSubmit = event => {
    event.preventDefault() // no refresh
    loginLocal(this.state.username, this.state.password)
      .then(data => {
        if (data.status === 200) {
          localStorage.setItem('usernamePS', this.state.username)   //keep username to localstroage  
          this.getUser(this.state.username)
          //this.props.history.replace('/') // can use when import to file routes // redirect
          //console.log(localStorage.getItem('usernamePS') + "1234567")
          //window.location.assign('/Feed')
        }
      })
  }

  getUser = (username) => {
    getUserOne(username).then(data => {
      localStorage.setItem('profileUser', JSON.stringify(data))
      window.location.assign('/Feed')
    })
  }

  render() {
    return (
      <div className="App">
        <div class="ui massive fixed inverted borderless menu" >
          <div class="ui container">
            <form class="ui massive fixed inverted borderless menu" onSubmit={this.onSubmit}>
              <a class="header item" href="/">PS POST</a>
              <div class="right menu">
                <div class="ui form"><br />
                  <div class="inline fields">
                    <div class="field">
                      <input placeholder="Username" type="text" name="username" value={this.state.username} onChange={this.onTextChange}
                      />
                    </div>

                    <div class="field">
                      <input placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.onTextChange}
                      />
                    </div>

                    <div class="field">
                      <button type='submit' class="ui green button">
                        Log in
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
