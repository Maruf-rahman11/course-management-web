import React, { Suspense, use } from 'react';
import Banner from './Banner';
import LatestCourses from './LatestCourses';
import { ChevronUp, MoveUp } from 'lucide-react';
import Navbar from '../shared/Navbar';
import scrollToNavbar from '../shared/utility';
import { AuthContext } from '../Contexts/AuthContext';
import Popular from './Popular';
import Testimonials from './Testimonials';
import WhyChooseUs from './WhyChooseUs';


const Home = () => {
    const {loading} = use(AuthContext)
 
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
            
            <Suspense fallback={
              <div className="min-h-screen flex justify-center items-center">
                <span className="loading loading-spinner loading-xl text-primary"></span>
              </div>
            }>
                <Popular></Popular>
            </Suspense>
            <Testimonials></Testimonials>
            <WhyChooseUs></WhyChooseUs>

            
        </div>
    );
};

export default Home;