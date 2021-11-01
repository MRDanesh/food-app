import React from 'react';

const ProfileScreen = () => {
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
                        <div className='profileSetting__header__left'>
                            figure
                        </div>
                        <div className='profileSetting__header__right'>
                            username
                        </div>
                    </div>
                    <div className='profileSetting__main'>
                        <input placeholder='Phone number' />
                        <input placeholder='Username' />
                        <input placeholder='Email' />
                        <input placeholder='Password' />
                        <input placeholder='Confirm password' />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProfileScreen;