import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { logout } from '../../actions/userActions';

const Header = ({setTerm, match}) => {
    const [inputTerm, setInputTerm] = useState('');

    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;
    console.log(userInfo);
    
    const onFormSubmit = (e) => {
        e.preventDefault();
        setTerm(inputTerm);
    };

    const onLoggedOut = () => {
        dispatch(logout());
    }

    return (
        <div className='header'>
            <div className='header__left'>
                FoodFind
            </div>
            <form onSubmit={onFormSubmit} className='header__form'>
            <svg 
                className='header__form__icon'
                xmlns="http://www.w3.org/2000/svg" 
                height="24px" 
                viewBox="0 0 24 24" 
                width="24px" 
                fill="#000000"
            >
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
                <input placeholder='What are you craving?' value={inputTerm} onChange={(e) => {setInputTerm(e.target.value)}} />
            </form>
            <div className='header__right'>
                <p className='header__right__items'>
                    {userInfo ? `Hello, ${userInfo.username}` : 'Login'}
                </p>
                <svg 
                    onClick= {onLoggedOut}
                    style={{cursor:'pointer'}}
                    xmlns="http://www.w3.org/2000/svg" 
                    enableBackground="new 0 0 24 24" 
                    height="30px" 
                    viewBox="0 0 24 24" 
                    width="30px" 
                    fill="#000000"
                >
                    <g>
                        <path 
                        d="M0,0h24v24H0V0z" 
                        fill="none"
                        />
                    </g>
                    <g>
                        <path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"/></g>
                </svg>
            </div>
        </div>
    )
}

export default Header;
