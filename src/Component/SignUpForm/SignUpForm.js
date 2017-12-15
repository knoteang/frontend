import React, { Component } from 'react'
import { Button, Form, Header, Segment, Container, Icon ,Grid,Input } from 'semantic-ui-react'
import './SignUpForm.css'
import { register } from '../../api'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]

class SignUpForm extends Component {
    constructor() {
        super();
        this.state = { // set state can use in class component only
            firstName: '',
            lastName: '',
            gender: '',
            username: '',
            password: '',
            email: ''
        }
        this.onTextChange = this.onTextChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(e) {
        e.preventDefault()
        register(this.state).then(data => {
            if (data.status === 200) {
                window.location.assign('/')
            } else {
                window.location.reload()
            }
        })
    }

    onTextChange(e) {
        const name = e.target.name
        const value = e.target.value
        this.setState({ [name]: value })
    }

    render() {
        return (

            <div className="S">


<Grid>
    <Grid.Column width={2}>
      
    </Grid.Column>
    <Grid.Column width={12}>
                 <Form>
                    <Header as='h2' attached='top'>
                        SIGN UP WITH YOUR E-MAIL  <Icon name='add user' />
                    </Header>
                    <Segment attached>
                       
                                <Form.Input name="firstName" label='First Name' placeholder='First Name' type='text' onChange={this.onTextChange} required/>
                                <Form.Input name="lastName" label='Last Name' placeholder='Last Name' type='text' onChange={this.onTextChange} required/>
                                <Form.Input name="username" label='Username' placeholder='Username' type='text' onChange={this.onTextChange} required/>
                                <Form.Input name="password" label='Password' placeholder='Password' type='password' onChange={this.onTextChange} required/>
                                <Form.Input name="email" label='email' placeholder='xxxxx@.mail.com' type='email' onChange={this.onTextChange} required/>
                                <Form.Input name="phone" label='phone' placeholder='0XXXXXXXXX' type='text' onChange={this.onTextChange} required/>
                            
                            <a href="/"><Button color='red' type='sumbit' onClick={this.onSubmit}>Submit</Button></a>   </Segment>
                </Form >
    </Grid.Column>
    <Grid.Column width={2}>
    
    </Grid.Column>
  </Grid>



             
            </div>
        )
    }
}

export default SignUpForm