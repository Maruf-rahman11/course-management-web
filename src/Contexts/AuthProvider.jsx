import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const[loading,setLoading]= useState(true);

    const createUser =(email,passworrd)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(email,passworrd,)
    }
    const authInfo={
        createUser,
        loading,
    }
    return (
<AuthContext value={authInfo}>
    {children}
</AuthContext>
    );
};

export default AuthProvider;