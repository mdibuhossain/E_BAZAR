import React from 'react';
import useAuth from '../../Hooks/useAuth';
import './Signin.css';

const Signin = () => {
    const { signWithGoogle } = useAuth();
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