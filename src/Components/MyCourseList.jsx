import React, { use } from 'react';
import MyCourseTR from './MyCourseTR';
import { Link } from 'react-router';

const MyCourseList = ({myCoursesPromise}) => {
    const myCourses = use(myCoursesPromise)
    console.log(myCourses)
    return (
        <div>
            <div className='mt-20 mb-20'>
          <div>
        {
            myCourses.length > 0 ?
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
               
              </tr>
            </thead>
          
            <tbody>
              
              {            myCourses.map((course,index) => <MyCourseTR 
                                key={course._id} 
                                course={course} 
                                index={index} 
                                
                               ></MyCourseTR>)
                             
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
        </div>
    );
};

export default MyCourseList;