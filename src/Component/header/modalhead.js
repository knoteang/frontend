import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

const ModalHead = () => (
  <Modal
    trigger={<Button>Invalid</Button>}
    header='Cannot Log in !'
    content='Username or Password is invalid. Please try again '
    actions={[
      { key: 'done', content: 'Okay', positive: true },
    ]}
  />
)

export default ModalHead