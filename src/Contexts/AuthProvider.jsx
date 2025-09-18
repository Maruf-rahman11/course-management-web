import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.init';
import { myCoursesPromise } from '../API/applicantAPI';


const AuthProvider = ({children}) => {
    const[loading,setLoading]= useState(true);
    const [user,setUser] = useState(null);
    const auth =  getAuth(app)
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

     const fetchMyCourses = async () => {
         
             const allData = await myCoursesPromise(user.email)
             const myCourses = allData;
             return myCourses;
         };

    const GoogleSignIn = ()=>{
        return signInWithPopup(auth,provider)
       
    }
    const GithubSignIn = ()=>{
        return signInWithPopup(auth,githubProvider)
       
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
        fetchMyCourses,
        GithubSignIn
    }
    return (
<AuthContext.Provider  value={authInfo}>
    {children}
</AuthContext.Provider >
    );
};

export default AuthProvider;