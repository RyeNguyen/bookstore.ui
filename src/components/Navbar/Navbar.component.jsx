import React from 'react';

import Logo from '../../assets/images/logo.svg';
import Cart from '../../assets/icons/icon-shopping-bag.svg';
import Notification from '../../assets/icons/icon-notification.svg';
import Heart from '../../assets/icons/icon-heart--active.svg';
import Chat from '../../assets/icons/icon-msg.svg';
import More from '../../assets/icons/icon-menu.svg';
import Expand from '../../assets/icons/icon-arrow-expand.svg';

import './Navbar.styles.scss';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={Logo} alt="logo"/>

            <div className='navbar--main'>
                <div className='navbar__dropdown'>
                    Danh mục sách
                    <div className='navbar__icon medium' style={{backgroundImage: `url(${Expand})`}}/>
                </div>

                <div className='navbar__icon' style={{backgroundImage: `url(${Notification})`}}/>

                <div className='navbar__icon' style={{backgroundImage: `url(${Chat})`}}/>

                <div className='navbar__icon' style={{backgroundImage: `url(${Heart})`}}/>

                <div className='navbar__icon' style={{backgroundImage: `url(${Cart})`}}/>

                <div className='navbar__profile'>
                    <div className='navbar__profile-picture'/>
                    <div className='navbar__icon large' style={{backgroundImage: `url(${More})`}}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;