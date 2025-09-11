import React from 'react';
import Banner from './Banner';
import LatestCourses from './LatestCourses';
import { ChevronUp, MoveUp } from 'lucide-react';
import Navbar from '../shared/Navbar';
import scrollToNavbar from '../shared/utility';


const Home = () => {
 
    return (
        <div className='mx-auto relative w-9/10 mt-25'>
            <button onClick={scrollToNavbar} className='fixed bottom-20 hover:text-white cursor-pointer rounded-full right-20 z-50 bg-[#4e5dfe]' ><ChevronUp size={48} strokeWidth={2.25} /></button>
            <Banner></Banner>
            <LatestCourses></LatestCourses>
        </div>
    );
};

export default Home;