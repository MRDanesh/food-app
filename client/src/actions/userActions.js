import axios from 'axios';

import history from '../history';
import {
    USER_REGISTER_FAIL,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_REQUEST
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
}