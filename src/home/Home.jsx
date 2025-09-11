import React from 'react';
import Banner from './Banner';
import LatestCourses from './LatestCourses';

const Home = () => {
 
    return (
        <div className='mx-auto w-9/10 mt-25'>
            <Banner></Banner>
            <LatestCourses></LatestCourses>
        </div>
    );
};

export default Home;