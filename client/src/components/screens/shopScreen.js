import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import RegisterScreen from './RegisterScreen';
import {searchShopById} from '../../actions/shopActions';
import GoogleMapItem from '../GoogleMapItem';

const ShopScreen = ({match}) => {
    const shopId = match.params.id;
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(searchShopById(shopId));
    },[shopId])
    
    return (
        <div className='shop'>
            <RegisterScreen/>
            <img className='shop__image' />
            <div className='shop__information'>
                <div className='shop__information__top'>
                    <p className='shop__information__item'>price</p>
                    <p className='shop__information__item'>categories</p>
                </div>
                <div className='shop__information__bottom'>
                    <p className='shop__information__item'>Address</p>
                    <p className='shop__information__item'>More</p>
                </div>
            </div>
            <div className='shop__gallery'>

            </div>
        </div>
    )
}

export default ShopScreen;
