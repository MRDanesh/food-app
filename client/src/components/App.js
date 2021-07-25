import React, {useState} from 'react';
import {Route, Router} from 'react-router-dom';

import history from '../history';
import Header from './screens/Header';
import Main from './screens/Main';


const App = () => {
    const [term, setTerm] = useState('meat');
    const [location, setLocation] = useState('Montreal');


    return (
        <Router history={history}>
            <div className='container'>
                <Header term={term} setTerm={setTerm} location={location} setLocation={setLocation}/>
                <Route path='/' exact>
                    <Main term={term} setTerm={setTerm} location={location} setLocation={setLocation}/>
                </Route>
            </div>
        </Router>
    )
}

export default App;
