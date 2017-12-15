import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

const ModalSignUp = () => (
  <Modal
    trigger={<Button>Invalid</Button>}
    header='Cannot Log in !'
    content='Username '
    actions={[
      { key: 'done', content: 'Okay', positive: true },
    ]}
  />
)

export default ModalSignUp