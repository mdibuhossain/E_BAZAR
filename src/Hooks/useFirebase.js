import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { useState } from 'react';
import initAuth from '../Firebase/initAuth';

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
            if (user)
                setUser(user);
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