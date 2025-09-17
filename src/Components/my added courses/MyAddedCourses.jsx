import React, { Suspense, use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { myAddedCourses } from '../../API/myaddedcourses';
import MyAddedList from './MyAddedList';

const MyAddedCourses = () => {
    const {user} = use(AuthContext);

  
    return (
        <div>
             <Suspense  fallback={
              <div className="min-h-screen flex justify-center items-center">
                <span className="loading loading-spinner loading-xl text-primary"></span>
              </div>
            }>
                <MyAddedList myAddedCourses={myAddedCourses(user.email,user.accessToken)}  ></MyAddedList>
            </Suspense>
        </div>
    );
};

export default MyAddedCourses;