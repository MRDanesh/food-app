import {
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS, 
    USER_LOGOUT,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL
} from '../constants/userConstants';

export const userRegisterReducer = (state = {loading: false, userInfo:null, error:false}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {...state, loading: true};
        case USER_REGISTER_SUCCESS: 
            return {...state, loading: false, userInfo: action.payload};
        case USER_REGISTER_FAIL:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    };
};

export const userLoginReducer = (state = {loading:false, userInfo:null, error:false}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {...state, loading:true};
        case USER_LOGIN_SUCCESS:
            return {...state, loading:false, userInfo: action.payload};
        case USER_LOGIN_FAIL:
            return {...state, loading: false, error: action.payload};
        case USER_LOGOUT:
            return {...state, loading: false, userInfo:null, error:false};
        default:
            return state;
    }
};

export const userDetailsReducer = (state = {loading:false, user:null, error:false}, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return {...state, loading:true};
        case USER_DETAILS_SUCCESS:
            return {...state, loading:false, user: action.payload};
        case USER_DETAILS_FAIL:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

