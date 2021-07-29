import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {shopsSearchReducer} from './reducers/shopReducers';
import {userRegisterReducer} from './reducers/userReducers';

const reducer = combineReducers({
    shopsSearch: shopsSearchReducer,
    userRegister: userRegisterReducer
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