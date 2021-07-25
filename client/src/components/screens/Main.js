import axios from 'axios';
import React, {useState, useEffect} from 'react';

import ShopItem from './ShopItem';
import yelp from '../../utils/yelp';

const Main = ({term, location, setTerm, setLocation}) => {
    
    const [results, setResuls] = useState();

    const searchShop = async () => {
        const {data} = await yelp.get('/search', {
            params: {
                limit: 35,
                term,
                location  
            }
        });
        setResuls(data.businesses);
        console.log(results);
    };

    useEffect(() => {
        searchShop();
    }, [term, location])
    return (
        <div className='main'>
            <div className='main__left'>
                sort
            </div>
            <div className='main__right'>
                {results ? results.map((result) => {
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
