import React, { Component } from 'react';

import { Icon, Button, Modal, Header, Form } from 'semantic-ui-react'



class ModalEdit extends Component {

  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (

      <Modal
        trigger={<Button onClick={this.handleOpen}>Edit Profile</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}

      >
        <Header icon='browser' content='Edit Your Profile' />
        <Modal.Content>

<Form>
         
            <Form.Input name="firstName" label='First Name' placeholder='First Name' type='text'  />
            <Form.Input name="lastName" label='Last Name' placeholder='Last Name' type='text' />
            <Form.Input name="username" label='Username' placeholder='Username' type='text'/>
       

        
            <Form.Input name="password" label='Password' placeholder='Password' type='password'  />
            <Form.Input name="email" label='email' placeholder='xxxxx@.mail.com' type='text' />
            <Form.Input name="phone" label='phone' placeholder='0XXXXXXXXX' type='text'/>
         

</Form>



        </Modal.Content>
        <Modal.Actions>
          <Button color='green' inverted>
            <Icon name='checkmark' /> Confirm
        </Button>
          <Button color='red' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Cancel
        </Button>
        </Modal.Actions>
      </Modal>

    );
  }
}
export default ModalEdit;