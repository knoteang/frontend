import React, { Component } from 'react';
import './choose.css'
import { Icon, Button } from 'semantic-ui-react'
import { log } from 'util';



class Choose extends Component {
    // componentClicked = event => {
    //     console.log('component click', event.target.value)
    //   }
    gooo = () =>{
        window.location.assign("/facebook")
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

                        
                <Button circular color='twitter' icon='facebook' name='twitter'
                            onClick={this.gooo} />
                        {/* <Button circular color='twitter' icon='twitter' name='twitter'
                            onClick={this.logO} />
                        <Button circular color='instagram' icon='instagram' name='instagram'
                            onClick={this.logO} />
                        <Button circular color='google plus' icon='google plus' name='google'
                            onClick={this.logO} /> */}
                    </div>
                </div>
            </div>


        );
    }
}
export default Choose;