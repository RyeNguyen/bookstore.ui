import React from "react";
import {useNavigate} from "react-router-dom";
import { Menu, Dropdown } from "antd";
import { m } from "framer-motion";
import Avvvatars from "avvvatars-react";

import InputField from "../InputField/InputField.component";

import { BookCategories } from "../../data/MockupData";

import Logo from "../../assets/images/logo.svg";
import Cart from "../../assets/icons/icon-shopping-bag.svg";
import Notification from "../../assets/icons/icon-notification.svg";
import Heart from "../../assets/icons/icon-heart--active.svg";
import Chat from "../../assets/icons/icon-msg.svg";
import More from "../../assets/icons/icon-menu.svg";
import Expand from "../../assets/icons/icon-arrow-expand.svg";

import "./Navbar.styles.scss";

//Menu danh mục sách xổ xuống
const menu = (
  <Menu>
    {BookCategories.map((category, index) => (
      <Menu.Item key={index}>
        <div>
          {category}
        </div>
      </Menu.Item>
    ))}
  </Menu>
);

const Navbar = ({ searchIncluded = false }) => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img style={{cursor: 'pointer'}} onClick={() => navigate('/')} src={Logo} alt="logo"/>

      <div className="navbar--main">
        {searchIncluded && <InputField inputType="search" />}

        <Dropdown overlay={menu}>
          <div onClick={(e) => e.preventDefault()}>
            Danh mục sách
            <div
              className="navbar__icon medium"
              style={{ backgroundImage: `url(${Expand})` }}
            />
          </div>
        </Dropdown>

        <m.div
          className="navbar__icon"
          style={{ backgroundImage: `url(${Notification})` }}
          whileHover={{ y: -8 }}
        />

        <m.div
          className="navbar__icon"
          style={{ backgroundImage: `url(${Chat})` }}
          whileHover={{ y: -8 }}
        />

        <m.div
          className="navbar__icon"
          style={{ backgroundImage: `url(${Heart})` }}
          whileHover={{ y: -8 }}
        />

        <m.div
          className="navbar__icon"
          style={{ backgroundImage: `url(${Cart})` }}
          whileHover={{ y: -8 }}
        />

        <div className="navbar__profile">
          {/*<div className='navbar__profile-picture'/>*/}
          <Avvvatars style="shape" size={48} value="random person" />
          <div
            className="navbar__icon large"
            style={{ backgroundImage: `url(${More})` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
