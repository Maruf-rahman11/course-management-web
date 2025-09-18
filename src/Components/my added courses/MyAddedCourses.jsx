import React, { Suspense, use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { myAddedCourses } from '../../API/myaddedcourses';
import MyAddedList from './MyAddedList';
import { Helmet } from 'react-helmet';

const MyAddedCourses = () => {
    const {user} = use(AuthContext);

  
    return (
        <div>
             <Helmet>
                <title>StudyNest | My Added Courses</title>
            </Helmet>
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