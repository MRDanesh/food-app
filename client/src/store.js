import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {shopsSearchReducer, shopSearchByIdReducer} from './reducers/shopReducers';
import {userDetailsReducer, userLoginReducer, userRegisterReducer} from './reducers/userReducers';

const reducer = combineReducers({
    shopsSearch: shopsSearchReducer,
    shopSearchById: shopSearchByIdReducer,
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    userDetails: userDetailsReducer
});

const userInfoFromStorage = localStorage.getItem('userInfo') 
?JSON.parse(localStorage.getItem('userInfo')) 
: null;

const initialState = {
    userLogin: {
        userInfo: userInfoFromStorage  
    }
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;