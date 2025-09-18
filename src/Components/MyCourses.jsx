import React, { Suspense, use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import MyCourseList from './MyCourseList';
import { myCoursesPromise } from '../API/applicantAPI';
import { Helmet } from 'react-helmet';



const MyCourses = () => {
    const {user} = use(AuthContext);

    return (
      
        <div> 
       <Helmet>
                       <title>StudyNest | My Enrollment</title>
                   </Helmet>
            <Suspense  fallback={
              <div className="min-h-screen flex justify-center items-center">
                <span className="loading loading-spinner loading-xl text-primary"></span>
              </div>
            }>
                <MyCourseList myCoursesPromise={myCoursesPromise(user.email,user.accessToken)}  ></MyCourseList>
            </Suspense>
             
        </div>
    );
};

export default MyCourses;