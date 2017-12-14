import React, { Component } from 'react'
import { Button, Form, Header, Segment, Container, Icon } from 'semantic-ui-react'
import './SignUpForm.css'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]

class SignUpForm extends Component {
    state = {}

    render() {
        return (

            <div className="S">

                <Form>
                    <Header as='h2' attached='top'>
                        SIGN UP WITH YOUR E-MAIL  <Icon name='add user' />
                    </Header>
                    <Segment attached>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
      <Container text>


                            <Form.Group>
                                <Form.Input label='First Name' placeholder='First Name' type='text' />
                                <Form.Input label='Last Name' placeholder='Last Name' type='text' />
                                <Form.Input label='Username' placeholder='Username' type='text' />
                            </Form.Group>

                            <Form.Group>

                                <Form.Input label='Password' placeholder='Password' type='password' />
                                <Form.Input label='Confirm Password' placeholder='Confirm Password' type='password' />
                                <Form.Input label='email' placeholder='xxxxx@.mail.com' type='text' />
                            </Form.Group>

                            <Form.Group>

                                <Form.Input label='phone' placeholder='0XXXXXXXXX' type='password' />
                                <Form.Select label='Gender' options={options} placeholder='Gender' />
                            </Form.Group>



                            <a href="/"><Button color='red' type='sumbit'>Submit</Button></a>  </Container> </Segment>
                </Form >

            </div>
        )
    }
}

export default SignUpForm