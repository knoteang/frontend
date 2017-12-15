import React, { Component } from 'react';
import { saveuser ,getUserOne} from '../../api'
import FacebookLogin from 'react-facebook-login';
import { log } from 'util';


class Facebook extends Component {

    responseFacebook(response) {
        //const data = response
        console.log(response);
        console.log(response.name);
        console.log(response.email+"sssss");
        saveuser(response.name,response.email).then(data => {
            console.log(data);
            if (data.status === 200) {
                getUserOne(response.name).then(data => {
                    localStorage.setItem('profileUser', JSON.stringify(data))
                    window.location.assign('/Feed')
                  })
            } else {
                if(response.name){
                getUserOne(response.name).then(data => {
                    localStorage.setItem('profileUser', JSON.stringify(data))
                    window.location.assign('/Feed')
                  })
                }else{
                    window.location.assign('/')
                }
            }
        })

    }

  render() {
    return (
      
      <div className="Facebook">
        <FacebookLogin 
                            appId="392267944559378"
                            autoLoad={true}
                            fields="name,email,picture"
                            scope="public_profile,user_friends,user_actions.books"
                            //onClick={this.componentClicked}
                            callback={this.responseFacebook} 
                            />
      </div>
    );
  }
}

export default Facebook;
