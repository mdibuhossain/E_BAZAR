import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div>
                <NavLink to="/"><img src={logo} alt="site logo" /></NavLink>
            </div>
            <div className="navbar">
                <ul>
                    <li><NavLink to="/shop">Shop</NavLink></li>
                    <li><NavLink to="/view-cart">ViewCart</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;