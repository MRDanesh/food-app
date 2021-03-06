import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {updateUserLikes} from '../actions/userActions';

const ShopItem = ({image, name, rating, price, id}) => {
    const dispatch = useDispatch();


    return (
        <div className='shopItem'>
            <Link to={`/shop/${id}`}>
                <img src={image} className='shopItem__image' />
            </Link>
            
            <svg 
                className='shopItem__icon' 
                xmlns="http://www.w3.org/2000/svg" 
                height="24px" 
                viewBox="0 0 24 24" 
                width="24px" 
                fill="white"
                onClick={() => dispatch(updateUserLikes({image, name, rating, price, id}))}
            >
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <div className='shopItem__buttom'>
                <p className='shopItem__buttom__name'>{name}</p>
                <p className='shopItem__buttom__price'>{price}</p>
                <p className='shopItem__buttom__rating'>{rating}</p>
            </div>
        </div>
    )
}

export default ShopItem;
