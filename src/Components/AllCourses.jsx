import React from 'react';
import { Link, useLoaderData } from 'react-router';
import CourseCard from './CourseCard';

const AllCourses = () => {
    const allCourses = useLoaderData();
    // const sortedCourses = [...allCourses].sort((a, b) => 
    //     new Date(b.createdAt) - new Date(a.createdAt)
    //   );
    console.log(allCourses)
    return (
        <div className='mt-20 mb-20'>
          <div>
        {
            allCourses.length > 0 ?
          <div className=" overflow-x-auto mt-6 mb-20">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <p>Lists</p>
                  </label>
                </th>
                <th>Course Name</th>
                <th>Duration</th>
                <th>Course Fee </th>
                <th>Added time </th>
                <th>Available seats </th>
                <th>Details </th>
               
                <th></th>
              </tr>
            </thead>
          
            <tbody>
              
              {            allCourses.map((course,index) => <CourseCard 
                                key={course._id} 
                                course={course} 
                                index={index} 
                                
                               ></CourseCard>)
                             
                        }
             
            </tbody>
          </table>
        </div>
          :
          <div className='my-20 lg:p-32 py-30'>
            <p className='text-center text-3xl font-semibold'>No plants registered</p>
            <p className='text-center mt-2'>Add plants from <Link to={'/addPlants'}><span className='underline '>add plant</span></Link> section</p>
          </div>

        }
      </div>

        </div>
    );
};

export default AllCourses;