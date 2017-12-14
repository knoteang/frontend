import React from 'react';
import './choose.css'
import { Icon,Button} from 'semantic-ui-react'

const Choose = () => (

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
                <Button circular color='facebook' icon='facebook' />
                <Button circular color='twitter' icon='twitter' />
                <Button circular color='instagram' icon='instagram' />
                <Button circular color='google plus' icon='google plus' />
            </div>
        </div>
</div>

    
)

export default Choose;