import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import initAuth from '../AuthFirebase/initAuth';

initAuth();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();

    const signWithGoogle = (e) => {
        e.preventDefault();
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => setUser(result.user)).catch(error => setError(error.message));
    }

    const logOut = (e) => {
        e.preventDefault();
        signOut(auth)
            .then(() => { setUser({}) }).catch(error => { setError(error.message) });
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                // if (location.pathname === '/login' || location.pathname === '/logout')
                //     history.push('/');
            }
        })
    }, [])

    return {
        user,
        error,
        logOut,
        signWithGoogle
    }

}


export default useFirebase;