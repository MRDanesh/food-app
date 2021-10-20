import axios from 'axios';

import history from '../history';
import {
    USER_REGISTER_FAIL,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_REQUEST,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS
} from '../constants/userConstants';

export const register = (username, email, password) => async (dispatch, getState) => {
    try {
        dispatch({type: USER_REGISTER_REQUEST});

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const {data} = await axios.post(
            '/api/users/',
            {username, email, password},
            config
        );

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        });

        localStorage.setItem('userInfo', JSON.stringify(data));
        history.push('/');

    } catch (err) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: err.response ? err.response.data.message : err.message
        })
    }
};

export const login = (email, password) => async (dispatch, getState) => {
    try{
        dispatch ({type: USER_LOGIN_REQUEST});

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const {data} = await axios.post(
            '/api/users/login',
            {email, password},
            config
        );

        dispatch ({
            type: USER_LOGIN_SUCCESS,
            payload: data
        });

        localStorage.setItem('userInfo', JSON.stringify(data));
        history.push('/');

    } catch (err) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: err.response ? err.response.data.message : err.message
        })
    }
};

export const logout = () => (dispatch) => {
    dispatch({type: USER_LOGOUT});
    localStorage.removeItem('userInfo');
    //history.push('/');
};

export const fetchUser = () => async (dispatch, getState) => {
    try{
        dispatch({type: USER_DETAILS_REQUEST});

        const {userLogin: {userInfo}} = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const {data} = await axios.get('/api/users/profile', config);

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        });

    } catch (err) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: err.response ? err.response.data.message : err.message
        })
    }
};

export const updateUserLikes = (likedShop) => async (dispatch, getState) => {
    const {userLogin: {userInfo}} = getState();

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`
        }
    };

    const userInfoFromStorage = localStorage.getItem('userInfo') 
    ?JSON.parse(localStorage.getItem('userInfo')) 
    : null;

    const favorites = userInfoFromStorage.favorites;
    console.log(favorites);
    const updatedLikedShops = [...favorites, likedShop];
    console.log('done!');

    const {data} = await axios.put(
        '/api/users/profile/likes',
        {favorites: updatedLikedShops},
        config
    );

    localStorage.setItem('userInfo', JSON.stringify(data));

};