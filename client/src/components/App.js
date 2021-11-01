import React, {useState} from 'react';
import {Route, Router, Redirect} from 'react-router-dom';

import history from '../history';
import Header from './screens/Header';
import LoginScreen from './screens/LoginScreen';
import Main from './screens/Main';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShopScreen from './screens/shopScreen';


const App = () => {
    const [term, setTerm] = useState('meat');
    const [location, setLocation] = useState('Montreal');

    const PrivateRoutes = ({authed, component: Component, path, ...rest}) => {
        return (
          <Route
            {...rest}
            path = {path}
            render = { (props) => 
              authed ? <Component {...props} /> : <Redirect to={{pathname: '/login', state: null}}/>
            }
          />
        )
      }


    return (
        <Router history={history}>
            <div className='container'>
                <Header term={term} setTerm={setTerm} location={location} setLocation={setLocation}/>
                <Route path='/' exact>
                    <Main term={term} location={location} setLocation={setLocation}/>
                </Route>
                <Route path='/shop/:id' component={ShopScreen}/>
                <Route path='/user/register' component={RegisterScreen} />
                <Route path='/user/login' component={LoginScreen} />
                <Route path='/user/profile' component={ProfileScreen} />
            </div>
        </Router>
    )
}

export default App;
