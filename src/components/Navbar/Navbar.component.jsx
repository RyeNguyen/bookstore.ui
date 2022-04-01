import React from 'react';

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import {BookCategories} from "../../data/MockupData";

import Logo from '../../assets/images/logo.svg';
import Cart from '../../assets/icons/icon-shopping-bag.svg';
import Notification from '../../assets/icons/icon-notification.svg';
import Heart from '../../assets/icons/icon-heart--active.svg';
import Chat from '../../assets/icons/icon-msg.svg';
import More from '../../assets/icons/icon-menu.svg';
import Expand from '../../assets/icons/icon-arrow-expand.svg';

import './Navbar.styles.scss';

const menu = (
    <Menu>
        {BookCategories.map(category => (
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="">
                    {category}
                </a>
            </Menu.Item>
        ))}
    </Menu>
);

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={Logo} alt="logo"/>

            <div className='navbar--main'>
                <Dropdown overlay={menu}>
                    <div onClick={e => e.preventDefault()}>
                        Danh mục sách
                        <div className='navbar__icon medium' style={{backgroundImage: `url(${Expand})`}}/>
                    </div>
                </Dropdown>

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