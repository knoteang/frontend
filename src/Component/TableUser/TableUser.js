import React, { Component } from 'react'
import { Table, Grid, Button, Modal, Header, Icon } from 'semantic-ui-react'

class TableUser extends Component {

    state = { open: false }
    
      show = size => () => this.setState({ size, open: true })
      close = () => this.setState({ open: false })

    render() {
        const { open, size } = this.state

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

                                <div>
                                <Button color="red" onClick={this.show('tiny')}>Delete</Button>
                        
                                <Modal size={size} open={open} onClose={this.close}>
                                  <Modal.Header>
                                    Delete This Account
                                  </Modal.Header>
                                  <Modal.Content>
                                    <p>Are you sure you want to delete this account</p>
                                  </Modal.Content>
                                  <Modal.Actions>
                                    <Button negative>
                                      No
                                    </Button>
                                    <Button positive icon='checkmark' labelPosition='right' content='Yes' />
                                  </Modal.Actions>
                                </Modal>
                              </div>

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