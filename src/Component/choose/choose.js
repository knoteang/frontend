import React, { Component } from 'react';
import './choose.css'
import { Icon, Button } from 'semantic-ui-react'
import { loginOauth } from '../../api'
import { log } from 'util';


class Choose extends Component {

    state = { // set state can use in class component only
        pt: ''
    }

    logO = (e, { name }) => {
        e.preventDefault()
        this.state.pt = name
        console.log(this.state.pt)
        loginOauth(this.state.pt)
            .then(response => {
                console.log(response)
            })
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
                        <Button circular color='facebook' icon='facebook' name='facebook'
                            onClick={this.logO} />
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