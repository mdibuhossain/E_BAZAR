import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div>
                <img src={logo} alt="site logo" />
            </div>
            <div className="navbar">
                <ul>
                    <li><NavLink to="/shop">Shop</NavLink></li>
                    <li><NavLink to="/viewCart">ViewCart</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;