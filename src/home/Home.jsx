import React, { Suspense, use } from 'react';
import Banner from './Banner';
import LatestCourses from './LatestCourses';
import { ChevronUp, MoveUp } from 'lucide-react';
import Navbar from '../shared/Navbar';
import scrollToNavbar from '../shared/utility';
import { myCoursesPromise } from '../API/applicantAPI';
import { AuthContext } from '../Contexts/AuthContext';


const Home = () => {
    const {user,loading} = use(AuthContext)
    console.log(user)
    if (loading) {
        return (
          <div className="min-h-screen flex justify-center items-center">
            <span className="loading loading-spinner loading-xl text-primary"></span>
          </div>
        );
      }
    
 
    return (
        <div className='mx-auto relative w-9/10 mt-25'>
            <button onClick={scrollToNavbar} className='fixed bottom-20 hover:text-white cursor-pointer rounded-full right-20 z-50 bg-[#4e5dfe]' ><ChevronUp size={48} strokeWidth={2.25} /></button>
            <Banner></Banner>
            <Suspense fallback={
              <div className="min-h-screen flex justify-center items-center">
                <span className="loading loading-spinner loading-xl text-primary"></span>
              </div>
            }>
                <LatestCourses></LatestCourses>
            </Suspense>
            
        </div>
    );
};

export default Home;