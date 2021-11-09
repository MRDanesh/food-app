import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { fetchUser } from '../../actions/userActions';
import profile from '../../profile.png';

const ProfileScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.userDetails);
    const {user} = userDetails;
    
    
    
    
    useEffect(() => {
        dispatch(fetchUser());
    }, []);

    return (
        <div className='profile'>
            <div className='profile__left'>
                <div className='profile__left__item selected'>
                    Profile setting
                </div>
                <div className='profile__left__item'>
                    Favorites
                </div>
                <div className='profile__left__item'>
                    Wallet
                </div>
            </div>
            <div className='profile__right'>
                <div className='profileSetting'>
                    <div className='profileSetting__header'>
                        
                        <img className='profileSetting__header__left' src={profile} />
                        
                        <div className='profileSetting__header__right'>
                            username
                        </div>
                    </div>
                    <div className='profileSetting__main'>
                        <input placeholder={user ? user.username : ''} value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input placeholder={user ? user.email : ''} />
                        <input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input placeholder='Confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProfileScreen;