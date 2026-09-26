import React, { createContext, useState } from 'react'
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null);
    const [loader, setLoader] = useState(false);

    const createUser = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const loginUser = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () =>{
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }

    const userInfo={
        user, 
        loader,
        createUser,
        loginUser,
        googleLogin
    }
  return <AuthContext value={userInfo}>{children}</AuthContext>
}

export default AuthProvider
