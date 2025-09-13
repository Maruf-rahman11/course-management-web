
import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({children}) => {
    const{user, loading}= use(AuthContext);
    const location = useLocation()
   

    if(loading){
        return <div className='min-h-screen flex justify-center items-center'>
            <span className="loading loading-spinner loading-xl"></span>
            </div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
};

export default PrivateRoute;