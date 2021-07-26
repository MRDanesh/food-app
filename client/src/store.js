import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {shopsSearchReducer} from './reducers/shopReducers';

const reducer = combineReducers({
    shopsSearch: shopsSearchReducer
});

const initialState = {
    
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;