import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Popular = () => {
    const [allCourses, setAllCourses ] = useState([]);
      useEffect(() => {
        fetch("https://studynext-web-server.vercel.app/courses")
          .then(res => res.json())
          .then(data =>{ 
            const sortedCourse = [...data].sort((a,b)=> a.seats -b.seats)
            setAllCourses(sortedCourse)})
          .catch(err => console.error(err));
      }, []); 
    // console.log(allCourses)
    return (
        <div>
            <div className='mt-20 mx-auto'>
       
       <h1 className='font-bold text-4xl mb-20'>Most Popular Courses</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 '>
      {
       allCourses.map(course=> 
       <div className="card bg-base-100 mt-3 shadow-sm">
           <figure>
             <img
             className='w-[200px] h-[165px]'
               src={course.photoURL}
               alt="Shoes" />
           </figure>
           <div className="card-body">
             <h2 className="card-title">{course.courseName}</h2>
             <p>{course.description}</p>
             <p>Remaining seats : {course.seats}</p>
             <div className="card-actions justify-end">
              <Link to={`/courseDetails/${course._id}`}><button className="btn text-white bg-[#4e5dfe]">Course Details</button></Link> 
             </div>
           </div>
         </div>)
      }
   </div> 
   </div>
        </div>
    );
};

export default Popular;