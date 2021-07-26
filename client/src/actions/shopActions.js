import yelp from '../utils/yelp';
import {
    SHOPS_SEARCH_FAIL,
    SHOPS_SEARCH_REQUEST,
    SHOPS_SEARCH_SUCCESS
} from '../constants/shopConstants';

export const searchShop = (term, location, limit) => async (dispatch, getState) => {
    try{
        dispatch({type: SHOPS_SEARCH_REQUEST});

        const {data} = await yelp.get('/search', {
            params: {limit,term,location}
        });

        dispatch({
            type: SHOPS_SEARCH_SUCCESS,
            payload: data.businesses
        });

    } catch (err) {
        dispatch({
            type: SHOPS_SEARCH_FAIL,
            payload: err.response ? err.response.data.message : err.message
        });
    }
}