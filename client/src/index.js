import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/App';
import 'semantic-ui-css/semantic.min.css'
import './scss/main.scss';
import store from './store';

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
    , 
    document.getElementById('root')
);