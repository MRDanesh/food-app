import axios from 'axios';
import React, {useState, useEffect} from 'react';

import ShopItem from './ShopItem';
import yelp from '../../utils/yelp';

const Main = () => {
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [results, setResuls] = useState();

    const searchShop = async () => {
        const {data} = await yelp.get('/search', {
            params: {
                limit: 50,
                term: 'meat',
                location: 'Montreal'    
            }
        });
        setResuls(data);
        console.log(data);
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
                <ShopItem/>
            </div>
        </div>
    )
}

export default Main;
