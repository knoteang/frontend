import React, { Component } from 'react'
import { Table, Grid, Button, Modal, Header, Icon } from 'semantic-ui-react'

class TableUser extends Component {

    constructor() {
        super();
        this.state = {
            modalOpen: false,
        }
        //this.onSubmit = this.onSubmit.bind(this)
        // this.onTextChange = this.onTextChange.bind(this)
    }
    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })


    // onSubmit(e) {
    //     e.preventDefault()
    //     console.log(this.state)
    //     postEdit(this.state.firstName, this.state.lastName, this.state.email, this.state.phone)
    //       .then(this.handleClose)
    //   }



    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })

    render() {
        const { open, dimmer } = this.state

        return (
            <Grid>
                <Grid.Column width={4}>

                </Grid.Column>

                <Grid.Column width={8}>
                    <Table unstackable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>User</Table.HeaderCell>
                                <Table.HeaderCell textAlign='right'>Status</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body >
                            <Table.Row>
                                <Table.Cell>John</Table.Cell>
                                <Table.Cell textAlign='right'>



                                    <Modal
                                        trigger={<Button color="red" onClick={this.handleOpen}>Delete</Button>}
                                        open={this.state.modalOpen}
                                        onClose={this.handleClose}

                                    >
                                        <Modal.Header>
                                            Delete This Account
                                            </Modal.Header>
                                        <Modal.Content>
                                            <p>Are you sure you want to delete this account</p>
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

                                </Table.Cell>
                            </Table.Row>

                        </Table.Body>

                    </Table>
                </Grid.Column>

                <Grid.Column width={4}>

                </Grid.Column>
            </Grid>
        );
    }
}
export default TableUser