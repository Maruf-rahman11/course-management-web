import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router';


const LatestCourses = () => {

    const [allCourses, setAllCourses ] = useState([]);
  
 

  useEffect(() => {
    fetch("https://studynext-web-server.vercel.app/courses")
      .then(res => res.json())
      .then(data => setAllCourses(data))
      .catch(err => console.error(err));
  }, []); 
// console.log(allCourses)
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};


    return (
        <div className='mt-20 mx-auto'>
       
            <h1 className='font-bold text-4xl mb-20'>Our Latest Courses</h1>
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
                  <p>Published at : {formatDate(course.createdAt)}</p>
                  <div className="card-actions justify-end">
                   <Link to={`/courseDetails/${course._id}`}><button className="btn btn-primary">Course Details</button></Link> 
                  </div>
                </div>
              </div>)
           }
        </div> 
        </div>
        
    );
};

export default LatestCourses;