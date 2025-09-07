import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.init';


const AuthProvider = ({children}) => {
    const[loading,setLoading]= useState(true);
    const [user,setUser] = useState(null);
    const auth =  getAuth(app)
    const provider = new GoogleAuthProvider;

    const GoogleSignIn = ()=>{
        return signInWithPopup(auth,provider)
       
    }
    

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
    const updateUser=(updatedData)=>{

        return updateProfile(auth.currentUser, updatedData)
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
        updateUser,
        GoogleSignIn,
        
    }
    return (
<AuthContext value={authInfo}>
    {children}
</AuthContext>
    );
};

export default AuthProvider;