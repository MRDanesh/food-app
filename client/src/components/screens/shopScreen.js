import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import RegisterScreen from './RegisterScreen';
import {searchShopById} from '../../actions/shopActions';
import GoogleMapItem from '../GoogleMapItem';
import { Item } from 'semantic-ui-react';

const ShopScreen = ({match}) => {
    const shopId = match.params.id;
    
    const dispatch = useDispatch();
    const {shop} = useSelector((state) => state.shopSearchById);
    console.log(shop);

    useEffect(() => {
        dispatch(searchShopById(shopId));
    },[shopId])

   const {categories} = shop; 
   
    
    return (
        <div className='shop'>
            <RegisterScreen/>
            <div className='shop__image'>
                <img className='shop__image__open' src={shop.image_url}  />
            </div>
            <div className='shop__name'>
                {shop.name}
                <div className='shop__name__rating'>
                    {shop.rating} ({shop.review_count}) {shop.price}
                </div>
            </div>
            
            <div className='shop__information'>

                <div className='shop__information__top'>
                    {categories ? categories.map((category) => <span key={category.title} className='shop__information__category'>. {category.title}</span>) : null}
                </div>
                <div className='shop__information__bottom'>
                    <p className='shop__information__item'>{shop.location ? shop.location.address1: null}, {shop.location ? shop.location.city: null} </p>
                </div>
            </div>
            <div className='shop__gallery'>

            </div>
        </div>
    )
}

export default ShopScreen;
