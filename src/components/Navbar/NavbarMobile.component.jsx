import React, {useState} from 'react';
import {m} from "framer-motion";

import Logo from '../../assets/images/logo.svg';
import Cart from '../../assets/icons/icon-shopping-bag.svg';
import Notification from '../../assets/icons/icon-notification.svg';
import Heart from '../../assets/icons/icon-heart--active.svg';
import Chat from '../../assets/icons/icon-msg.svg';

import {BookCategories} from "../../data/MockupData";

import './Navbar.styles.scss';

const navMenuVariants = {
    hidden: {
        width: '6.4rem',
        height: '6.4rem',
        padding: 0,
        borderRadius: '50%',
        transition: {
            duration: 0.3,
            staggerChildren: 2,
            delayChildren: 0.4,
            when: 'beforeChildren'
        }
    },
    visible: {
        width: '100%',
        height: '100vh',
        padding: '0 4.8rem',
        top: 0,
        right: 0,
        borderRadius: 0,
        transition: {
            duration: 0.3,
            staggerChildren: 2,
            delayChildren: 0.4,
            when: 'beforeChildren'
        }
    }
}

const navMenuItemVariants = {
    hidden: {
        display: 'none',
        x: -120,
        opacity: 0,
        transition: {
            duration: 0.1
        }
    },
    visible: {
        display: 'flex',
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.4,
            duration: 0.7
        }
    }
}

const NavbarMobile = () => {
    const [navActive, setNavActive] = useState(false);
    const [bookListActive, setBookListActive] = useState(false);

    return (
        <div className='navbar'>
            <img src={Logo} alt="logo"/>

            <div className={`navbar__icon close ${navActive && 'active'}`} onClick={() => {
                setNavActive(!navActive);
                setBookListActive(false);
            }}>
                <svg className="navbar__icon--burger" version="1.1" height="100" width="100" viewBox="0 0 100 100">
                    <path className="navbar__icon--line"
                          d="M 50,65 H 70 C 70,65 75,65.198488 75,70.762712 C 75,73.779026 74.368822,78.389831 66.525424,78.389831 C 22.092231,78.389831 -18.644068,-30.508475 -18.644068,-30.508475"/>
                    <path className="navbar__icon--line"
                          d="M 50,35 H 70 C 70,35 81.355932,35.300135 81.355932,25.635593 C 81.355932,20.906215 78.841706,14.830508 72.881356,14.830508 C 35.648232,14.830508 -30.508475,84.322034 -30.508475,84.322034"/>
                    <path className="navbar__icon--line"
                          d="M 50,50 H 30 C 30,50 12.288136,47.749959 12.288136,60.169492 C 12.288136,67.738339 16.712974,73.305085 40.677966,73.305085 C 73.791674,73.305085 108.47458,-19.915254 108.47458,-19.915254"/>
                    <path className="navbar__icon--line"
                          d="M 50,50 H 70 C 70,50 81.779661,50.277128 81.779661,36.607372 C 81.779661,28.952694 77.941689,25 69.067797,25 C 39.95532,25 -16.949153,119.91525 -16.949153,119.91525"/>
                    <path className="navbar__icon--line"
                          d="M 50,65 H 30 C 30,65 17.79661,64.618439 17.79661,74.152543 C 17.79661,80.667556 25.093813,81.355932 38.559322,81.355932 C 89.504001,81.355932 135.59322,-21.186441 135.59322,-21.186441"/>
                    <path className="navbar__icon--line"
                          d="M 50,35 H 30 C 30,35 16.525424,35.528154 16.525424,24.152542 C 16.525424,17.535987 22.597755,13.559322 39.40678,13.559322 C 80.617882,13.559322 94.067797,111.01695 94.067797,111.01695"/>
                </svg>
                <svg className="navbar__icon--close" version="1.1" height="100" width="100" viewBox="0 0 100 100">
                    <path className="navbar__icon--line" d="M 34,32 L 66,68"/>
                    <path className="navbar__icon--line" d="M 66,32 L 34,68"/>
                </svg>
            </div>

            <m.div
                variants={navMenuVariants}
                animate={navActive ? 'visible' : 'hidden'}
                className='navbar__drawer'
            >
                <div style={{display: bookListActive ? 'none' : 'block'}}>
                    <m.div
                        variants={navMenuItemVariants}
                        animate={navActive ? 'visible' : 'hidden'}
                        className='navbar__drawer-item'
                        onClick={() => setBookListActive(true)}
                    >
                        <div className='navbar__icon' style={{backgroundImage: `url(${Notification})`}}/>
                        <h3>Danh mục sách</h3>
                    </m.div>

                    <m.div
                        variants={navMenuItemVariants}
                        animate={navActive ? 'visible' : 'hidden'}
                        className='navbar__drawer-item'
                    >
                        <div className='navbar__icon' style={{backgroundImage: `url(${Notification})`}}/>
                        <h3>Thông báo</h3>
                    </m.div>

                    <m.div
                        variants={navMenuItemVariants}
                        animate={navActive ? 'visible' : 'hidden'}
                        className='navbar__drawer-item'
                    >
                        <div className='navbar__icon' style={{backgroundImage: `url(${Chat})`}}/>
                        <h3>Tin nhắn</h3>
                    </m.div>

                    <m.div
                        variants={navMenuItemVariants}
                        animate={navActive ? 'visible' : 'hidden'}
                        className='navbar__drawer-item'
                    >
                        <div className='navbar__icon' style={{backgroundImage: `url(${Heart})`}}/>
                        <h3>Danh sách yêu thích</h3>
                    </m.div>

                    <m.div
                        variants={navMenuItemVariants}
                        animate={navActive ? 'visible' : 'hidden'}
                        className='navbar__drawer-item'
                    >
                        <div className='navbar__icon' style={{backgroundImage: `url(${Cart})`}}/>
                        <h3>Giỏ hàng</h3>
                    </m.div>
                </div>

                <div style={{display: bookListActive ? 'block' : 'none'}}>
                    {BookCategories.map((category, index) => {
                        return (
                            <m.div
                                variants={navMenuItemVariants}
                                animate={bookListActive ? 'visible' : 'hidden'}
                                className='navbar__drawer-item'
                            >
                                <h3>{category}</h3>
                            </m.div>
                        )
                    })}
                </div>
            </m.div>
        </div>
    )
}

export default NavbarMobile;