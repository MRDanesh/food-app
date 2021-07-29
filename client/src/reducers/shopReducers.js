import {
    SHOPS_SEARCH_FAIL,
    SHOPS_SEARCH_REQUEST,
    SHOPS_SEARCH_SUCCESS
} from '../constants/shopConstants';

export const shopsSearchReducer = (state = {shops: [], loading: false, error: false}, action) => {
    switch (action.type) {
        case SHOPS_SEARCH_REQUEST:
            return {...state, loading: true};
        case SHOPS_SEARCH_SUCCESS:
            return {...state, loading: false, shops: action.payload};
        case SHOPS_SEARCH_FAIL:
            return {...state, loading:false, error: true};
        default: 
            return state;
    }
};
