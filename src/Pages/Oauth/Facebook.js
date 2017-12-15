import React,{Component} from 'react';
  import FacebookLogin from 'react-facebook-login';
 
  class Facebook extends Component {
    responseFacebook(response) {
      console.log(response);
    }
 
    render() {
      return (
        <FacebookLogin
          appId="1740364465996430"
          autoLoad={true}
          fields="name,email,picture"
          scope="public_profile,user_friends,user_actions.books"
          callback={this.responseFacebook}
        />
      )
    }
  }
 
  export default Facebook;