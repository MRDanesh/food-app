import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Button, Header, Image, Modal, Form, Checkbox } from 'semantic-ui-react';

import {login} from '../../actions/userActions';


const LoginScreen = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Redux

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo} = userLogin;
  

  useEffect(() => {
    if (!userInfo) {
      const timer = () => setTimeout(() => setOpen(true), 1000);    
      const timerId = timer();
      return () => {
        clearTimeout(timerId);
    }} 
    setOpen(false);
  }, [userLogin]);
  


  const onFormSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login(email, password));
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

export default LoginScreen;