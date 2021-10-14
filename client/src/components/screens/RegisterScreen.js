import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Button, Header, Image, Modal, Form, Checkbox } from 'semantic-ui-react';

import {register} from '../../actions/userActions';


const RegisterScreen = () => {
  const [open, setOpen] = useState(true);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Redux

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo} = userLogin;

  useEffect(() => {
    if (userInfo) {
      setOpen(false);
    }
  }, [userInfo])
  

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (username && email && password) {
      dispatch(register(username, email, password));
    }
  }


  return (
    <Modal
      className='modalScreen'
      open={open}
    >
      <Modal.Content image>
        <Modal.Description>
          <Header className='large'>To continiue, you need to login first</Header>
          <Form onSubmit={onFormSubmit}>
            <Form.Field
            //error={{
            //  content: 'Please enter an email address',
            //  pointing: 'below',
            //}}
            >
              <label style={{fontSize: '14px'}}>Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} style={{fontSize: '14px'}} placeholder='Email' />
            </Form.Field>
            <Form.Field>
              <label style={{fontSize: '14px'}}>username</label>
              <input value={username} onChange={(e) => setUsername(e.target.value)} style={{fontSize: '14px'}} placeholder='username' />
            </Form.Field>
            <Form.Field>
              <label style={{fontSize: '14px'}}>Password</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} style={{fontSize: '14px'}} placeholder='Password' />
            </Form.Field>
            <Button style={{fontSize: '14px'}} type='submit'>Signup</Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default RegisterScreen;