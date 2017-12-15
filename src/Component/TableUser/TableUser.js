import React, { Component } from 'react'
import { Table, Grid, Button, Modal, Header, Icon } from 'semantic-ui-react'
import { getAllUsers, deleteUser } from '../../api'

class TableUser extends Component {

    constructor() {
        super();
        this.state = {
            modalOpen: false,
            allUsers: []
        }
        this.getUsers = this.getUsers.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(e) {
        deleteUser(e.target.name)
            .then(this.getUsers())
    }

    getUsers = () => {
        getAllUsers()
            .then(data => this.setState({ allUsers: data }))
            .catch(err => console.error('Something went wrong.'))
    }

    componentDidMount() { // when render finish call is func
        this.getUsers()
    }

    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })
    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })

    render() {
        const { open, dimmer } = this.state
        const users = this.state.allUsers
        return (
            <Grid>
                <Grid.Column width={4}>

                </Grid.Column>

                <Grid.Column width={8}>
                    <Table unstackable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>User</Table.HeaderCell>
                                <Table.HeaderCell>Firstname</Table.HeaderCell>
                                <Table.HeaderCell>Lastname</Table.HeaderCell>
                                <Table.HeaderCell textAlign='center'>Status</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body >
                            {users.length >= 0 ? //in { } is logic
                                users.map(user =>
                                    <Table.Row>
                                        <Table.Cell>{user.username}</Table.Cell>
                                        <Table.Cell>{user.firstName}</Table.Cell>
                                        <Table.Cell>{user.lastName}</Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <Button name={user._id} color='red' onClick={this.onSubmit} inverted>
                                                <Icon name='cancel' /> Delete
                                        </Button>

                                        </Table.Cell>
                                    </Table.Row>
                                )
                                : null
                            }
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