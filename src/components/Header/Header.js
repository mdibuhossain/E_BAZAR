import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <div className="header">
            <div>
                <NavLink to="/"><img src={logo} alt="site logo" /></NavLink>
            </div>
            <div className="navbar">
                <div>
                    <ul>
                        <li><NavLink to="/shop">Shop</NavLink></li>
                        <li><NavLink to="/view-cart">ViewCart</NavLink></li>
                    </ul>
                </div>
                <div>
                    {
                        (user.email || user.displayName) ? <div className="after-login">
                            <strong>{user.displayName} </strong>
                            <img className="profilePhoto" src={user.photoURL} alt="profile-pic" />
                            <button onClick={logOut}>Log out</button>
                        </div> : <ul>
                            <li>
                                <NavLink to="/signin">Signin</NavLink>
                            </li>
                        </ul>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;