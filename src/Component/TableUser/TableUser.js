import React, { Component } from 'react'
import { Table, Grid, Button, Modal, Header, Icon } from 'semantic-ui-react'

class TableUser extends Component {

    render() {
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

                                    <Modal trigger={<Button color="red"><i class="trash outline icon"></i> Delete</Button>} basic size='small'>
                                        <Header icon='archive' content='Archive Old Messages' />
                                        <Modal.Content>
                                            <p>Do you want to delete this user?</p>
                                        </Modal.Content>
                                        <Modal.Actions>
                                            <Button basic color='red' inverted  >
                                                <Icon name='remove' /> No
                                            </Button>
                                            <Button color='green' inverted>
                                                <Icon name='checkmark' /> Yes
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