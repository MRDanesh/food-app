import React, {useState} from 'react';
import {Route, Router, Redirect} from 'react-router-dom';

import history from '../history';
import Header from './screens/Header';
import Main from './screens/Main';
import ShopScreen from './screens/shopScreen';
import LoginScreen from './screens/LoginScreen';


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
                    <Main term={term} setTerm={setTerm} location={location} setLocation={setLocation}/>
                </Route>
                <Route path='/login' component={LoginScreen} />
                <Route path='/shop/:id' component={ShopScreen}/>
            </div>
        </Router>
    )
}

export default App;
