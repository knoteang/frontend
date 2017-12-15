import React, { Component } from 'react';
import './choose.css'
import { Icon, Button } from 'semantic-ui-react'
import { loginOauth } from '../../api'
import { log } from 'util';
import FacebookLogin from 'react-facebook-login';
import { saveuser } from '../../api'


class Choose extends Component {
    componentClicked = event => {
        console.log('component click', event.target.value)
      }

    responseFacebook(response) {
        const data = response
        console.log(data);
        console.log(data.name);
        console.log(data.email+"sssss");
        saveuser(this.data.name,this.data.email).then(data1 => {
            console.log(data1);
            if (data.status === 200) {
                window.location.assign('/')
            } else {
                window.location.reload()
            }
        })

    }

    state = { // set state can use in class component only
        pt: ''
    }

    logO = (e, { name }) => {
        e.preventDefault()
        this.state.pt = name
        console.log(this.state.pt)
        loginOauth(this.state.pt)
            .then(data => {
                console.log(data)
            })
    }

    render() {
        return (

            <div className="Choose">
                <div class="ui inverted vertical center aligned segment">

                    <div class="ui text container">
                        <h1 class="ui inverted header">
                            Welcome to PS POST <Icon name='comment' />
                        </h1>
                        <p>
                            PS POST community is a place where you can connect with others
                to find someone who interesting and share your opinion or experience.
             </p>
                        <a href="/SignUp"> <div class="ui inverted blue button" >
                            Sign up with e-mail
                </div></a><div class="ui divider horizontal">Or</div>
                        <FacebookLogin circular color='facebook' icon='facebook' name='facebook'
                            appId="392267944559378"
                            autoLoad={true}
                            fields="name,email,picture"
                            scope="public_profile,user_friends,user_actions.books"
                            onClick={this.componentClicked}
                            callback={this.responseFacebook} />
                        <Button circular color='twitter' icon='twitter' name='twitter'
                            onClick={this.logO} />
                        <Button circular color='instagram' icon='instagram' name='instagram'
                            onClick={this.logO} />
                        <Button circular color='google plus' icon='google plus' name='google'
                            onClick={this.logO} />
                    </div>
                </div>
            </div>


        );
    }
}
export default Choose;