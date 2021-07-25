import React from 'react';
import {Route, Router} from 'react-router-dom';

import history from '../history';
import Header from './screens/Header';
import Main from './screens/Main';


const App = () => {
    return (
        <Router history={history}>
            <div className='container'>
                <Header/>
                <Route path='/' component={Main} />
            </div>
        </Router>
    )
}

export default App;
