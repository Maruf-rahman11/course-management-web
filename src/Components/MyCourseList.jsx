import React, { use, useEffect, useState } from 'react';
import MyCourseTR from './MyCourseTR';
import { Link } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';


const MyCourseList = ({myCoursesPromise}) => {
 
    const initialMyCourses = use(myCoursesPromise)
    const {user} = use(AuthContext)
   
    //  const [loading,setLoading] = useState(true)
        const [allData,setAllData] = useState([])
        useEffect(()=>{
         const data = initialMyCourses
         if(data){
            setAllData(data)
            // setLoading(false)
    
         }
        },[])
        
        const handleDelete = (id)=>{
         
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
           
            if (result.isConfirmed) {
              axios.delete(`https://studynext-web-server.vercel.app/applicants/${id}`, {
                headers: {
                  authorization: `Bearer ${user.accessToken}`
                }
              })
                    .then(res => {
                      if (res.data.deletedCount) {
                        console.log(res.data.deletedCount)
                        const newData = allData.filter(item => item.course_id !== id);
                        setAllData(newData);
                          Swal.fire({
                              title: "Deleted!",
                              text: "Your enrollment has been canceled.",
                              icon: "success",})
                             
                    }})
            
                    .catch(error => {
                      console.log(error);
                    })  
            }
          });
             
                     
          }

    return (
        <div>
       
            <div className='mt-20 mb-20'>
          <div>
        {
            allData.length > 0 ?
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
                <th>Actions</th>
                
               
              </tr>
            </thead>
          
            <tbody>
              
              {            allData.map((course,index) => <MyCourseTR 
                                handleDelete={handleDelete}
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
            <p className='text-center text-3xl font-semibold'>No Courses registered</p>
            <p className='text-center mt-2'>Enroll courses from <Link to={'/allCourses'}><span className='underline '>Courses</span></Link> section</p>
          </div>

        }
      </div>

        </div>
        </div>
    );
};

export default MyCourseList;