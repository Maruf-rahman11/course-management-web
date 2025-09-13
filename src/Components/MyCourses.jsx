import React, { Suspense, use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import MyCourseList from './MyCourseList';
import { myCoursesPromise } from '../API/applicantAPI';


const MyCourses = () => {
    const {user} = use(AuthContext);

   

    return (
        <div> 
            <Suspense  fallback={
              <div className="min-h-screen flex justify-center items-center">
                <span className="loading loading-spinner loading-xl text-primary"></span>
              </div>
            }>
                <MyCourseList myCoursesPromise={myCoursesPromise(user.email)}  ></MyCourseList>
            </Suspense>
             
        </div>
    );
};

export default MyCourses;