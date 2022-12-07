import React, { createContext, useEffect, useState } from 'react';
import { app } from '../../Firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const githubLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logInWithEmailAndPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfile = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }
    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser)
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
            console.log('currentUser: ', currentUser);
            if (currentUser === null || currentUser.emailVerified || currentUser.photoURL) {
                setUser(currentUser)
            }
            setLoading(false)
        });
        return () => {
            unsubscribed()
        }
    }, [])

    const authInfo = {
        user,
        googleLogin,
        githubLogin,
        logout,
        createUser,
        logInWithEmailAndPass,
        loading,
        setLoading,
        updateUserProfile,
        emailVerification
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;