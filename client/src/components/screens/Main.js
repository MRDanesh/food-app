import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ShopItem from '../ShopItem';
import {searchShop} from '../../actions/shopActions';

const Main = ({term, location}) => {
    const dispatch = useDispatch();
    const shopsSearch = useSelector((state) => state.shopsSearch);
    const {loading, error, shops} = shopsSearch;

    

    useEffect(() => {
       dispatch(searchShop(term, location, 30));
    }, [term, location])
    return (
        <div className='main'>
            <div className='main__left'>
                sort
            </div>
            <div className='main__right'>
                {shops ? shops.map((result) => {
                    return (
                        <div className='main__right__container' key={result.id}>
                            <ShopItem image={result.image_url} rating={result.rating} name={result.name} price={result.price}/>
                        </div>
                    )
                }) : null}
            </div>
        </div>
    )
}

export default Main;
