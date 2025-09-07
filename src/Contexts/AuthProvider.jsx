import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const[loading,setLoading]= useState(true);
    const [user,setUser] = useState(null);
    const auth =  getAuth(app)
    

    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password )
    }
    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signOutUser =()=>{
        setLoading(true)
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)

            return()=>{
                unSubscribe();
            }
            
        })
    },[])





    const authInfo={
        createUser,
        loading,
        signInUser,
        user,
        setUser,
        signOutUser,
    }
    return (
<AuthContext value={authInfo}>
    {children}
</AuthContext>
    );
};

export default AuthProvider;