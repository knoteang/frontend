import React, { Component } from 'react';

import { Icon, Button, Modal, Header, Form ,Grid } from 'semantic-ui-react'
import { postEdit } from '../../api'



class ModalEdit extends Component {

  constructor() {
    super();
    this.state = {
      modalOpen: false,
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onTextChange = this.onTextChange.bind(this)
  }


  onTextChange(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value })
  }

  onSubmit(e) {
    e.preventDefault()
    console.log(this.state)
    postEdit(this.state.firstName, this.state.lastName, this.state.email, this.state.phone)
      .then(this.handleClose)
  }

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
        <Grid>
    <Grid.Column width={2}>
      
    </Grid.Column>
    <Grid.Column width={12}>
         <Form>
            <Form.Input name="firstName" label='First Name' placeholder='First Name' type='text' value={this.state.firstName} onChange={this.onTextChange} />
            <Form.Input name="lastName" label='Last Name' placeholder='Last Name' type='text' value={this.state.lastName} onChange={this.onTextChange} />
            <Form.Input name="email" label='email' placeholder='xxxxx@.mail.com' type='text' value={this.state.email} onChange={this.onTextChange} />
            <Form.Input name="phone" label='phone' placeholder='0XXXXXXXXX' type='text' value={this.state.phone} onChange={this.onTextChange} />
          </Form> 
          </Grid.Column>
    <Grid.Column width={2}>
    
    </Grid.Column>
  </Grid>
  
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.onSubmit} inverted>
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