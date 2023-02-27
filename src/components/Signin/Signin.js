import React, { useEffect } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Signin.css';

const Signin = () => {
    const { signWithGoogle } = useAuth();
    const { user } = useAuth()

    const location = useLocation();
    if (location?.pathname === "/signin" && user?.uid)
        return <Redirect push to="/" />

    return (
        <div className="login-form">
            <h2>Please Signin!</h2>
            <input type="email" name="" placeholder="Your email" />
            <input type="password" name="" placeholder="Your password" />
            <button className="btn-regular">Signin</button>
            <div className="social-signin">
                <button onClick={signWithGoogle}>With Google</button>
                <button>With Facebook</button>
            </div>
        </div>
    );
};

export default Signin;