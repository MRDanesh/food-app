import React, {useState, useEffect} from 'react'
import { Button, Header, Image, Modal, Form, Checkbox } from 'semantic-ui-react';

const ModalExampleModal = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    //setTimeout(() => setOpen(true), 10000);
  }, []);


  return (
    <Modal
      className='modalScreen'
      open={open}
    >
      <Modal.Content image>
        <Modal.Description>
          <Header className='large'>To continiue, you need to login first</Header>
          <Form>
            <Form.Field>
              <label style={{fontSize: '14px'}}>Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} style={{fontSize: '14px'}} placeholder='Email' />
            </Form.Field>
            <Form.Field>
              <label style={{fontSize: '14px'}}>Password</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} style={{fontSize: '14px'}} placeholder='Password' />
            </Form.Field>
            <Button style={{fontSize: '14px'}} type='submit'>Submit</Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default ModalExampleModal;