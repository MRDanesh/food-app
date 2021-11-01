import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ShopItem from '../ShopItem';
import {searchShop} from '../../actions/shopActions';
import LoginScreen from './LoginScreen';
import {Radio} from 'semantic-ui-react';

const Main = ({term, location}) => {

    // REDUX SETUP
    const dispatch = useDispatch();
    const shopsSearch = useSelector((state) => state.shopsSearch);
    const {loading, error, shops} = shopsSearch;
    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;
    
    useEffect(() => {
       dispatch(searchShop(term, location, 30));
    }, [term, location]);

    // STATES FOR SORTING

    const [rating, setRating] = useState(false);
    const [price$, setPrice$] = useState(false);
    const [price$$, setPrice$$] = useState(false);
    const [price$$$, setPrice$$$] = useState(false);
    const [noSort, setNoSort] = useState(true);
    
    // DIFFERENT SORTINGS
    if (shops) {
        var sortedByRating = shops.sort((a, b) => b.rating - a.rating);
        var sortedByPopularity = shops.sort((a, b) => b.review_count - a.review_count);
        var sortedByPrice$ = shops.filter((x) => x.price === '$');
        var sortedByPrice$$ = shops.filter((x) => x.price === '$$');
        var sortedByPrice$$$ = shops.filter((x) => x.price === '$$$');
    }

    const onBottomChange = (e) => {
        console.log(e.target.defaultValue);
        if(e.target.defaultValue == 'rating') {
            setNoSort(false);
            setRating(true);
            setPrice$(false);
            setPrice$$(false);
        } else if (e.target.defaultValue == 'review_count') {
            setNoSort(false);
            setRating(false);
            setPrice$(false);
            setPrice$$(false);
        }
    };

    const onChangePrice = (e) => {
        if(e.target.innerHTML == '$') {
            setNoSort(false);
            setRating(false);
            setPrice$(true);
            setPrice$$(false);
        } else if (e.target.innerHTML == '$$') {
            setNoSort(false);
            setRating(false);
            setPrice$(false);
            setPrice$$(true);
        }
    };

    return (
        <div className='main'>
            <LoginScreen/>
            <div className='main__left'>
                <h1 className='main__left__title'>
                    All stores
                </h1>
                
                <div className='main__left__sort'>

                    <form className='radioButton'>
                        <label className='radioButton__input'>
                            <input onChange={onBottomChange} type="radio" value="rating" name="gender" /> Rating
                        </label>
                        <label className='radioButton__input'>
                            <input onChange={onBottomChange} type="radio" value="review_count" name="gender" /> Popularity
                        </label>
                        
                    </form>
                </div>
                <div className='main__left__price'>
                    <span onClick={onChangePrice} className={`main__left__price__item ${price$ ? `selected` : ``}`}>$</span>
                    <span onClick={onChangePrice} className={`main__left__price__item ${price$$ ? `selected` : ``}`}>$$</span>
                    <span onClick={onChangePrice} className={`main__left__price__item ${price$$$ ? `selected` : ``}`}>$$$</span>
                </div>
            </div>
            <div className='main__right'>
                
                {shops && noSort ? shops.map((result) => {
                    return (
                        <div className='main__right__container' key={result.id}>
                            <ShopItem image={result.image_url} rating={result.rating} name={result.name} price={result.price} id={result.id}/>
                        </div>
                    )
                }) : null}

                {sortedByRating && rating ? sortedByRating.map((result) => {
                    return (
                        <div className='main__right__container' key={result.id}>
                            <ShopItem image={result.image_url} rating={result.rating} name={result.name} price={result.price} id={result.id}/>
                        </div>
                    )
                }) : null}

                {sortedByPrice$ && price$ ? sortedByPrice$.map((result) => {
                    return (
                        <div className='main__right__container' key={result.id}>
                            <ShopItem image={result.image_url} rating={result.rating} name={result.name} price={result.price} id={result.id}/>
                        </div>
                    )
                }) : null}

                {sortedByPrice$$ && price$$ ? sortedByPrice$$.map((result) => {
                    return (
                        <div className='main__right__container' key={result.id}>
                            <ShopItem image={result.image_url} rating={result.rating} name={result.name} price={result.price} id={result.id}/>
                        </div>
                    )
                }) : null}

            </div>
        </div>
    )
}

export default Main;
