import React, { use, useEffect, useState } from 'react';
import MyAddedTD from './MyaddedTD';
import { Link } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';


const MyAddedList = ({myAddedCourses}) => {
    const initialMyAdded = use(myAddedCourses)
    const [loading,setLoading] = useState(true)
    const [allData,setAllData] = useState([])
    useEffect(()=>{
     const data = initialMyAdded
     if(data){
        setAllData(data)
        setLoading(false)

     }
    },[])
if(loading){
    <div className='min-h-screen flex justify-center items-center'>
          <span className="loading loading-spinner loading-xl"></span>
          </div>
}
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
            axios.delete(`https://studynext-web-server.vercel.app/courses/${id}`)
                  .then(res => {
                    if (res.data.deletedCount) {
                     
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your course has been deleted.",
                            icon: "success",})
                            const newData = allData.filter(item => item._id !== id);
                            setAllData(newData);
                  }})
          
                  .catch(error => {
                    Swal.fire({
                        title: "Oops...",
                        text: "Deletion failed.",
                        icon: "error",})
                        const newData = allData.filter(item => item._id !== id);
                        setAllData(newData);
                    console.log(error);
                  })  
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
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
                <th>Actions </th>
                <th>Rate course </th>

               
              </tr>
            </thead>
          
            <tbody>
              
              {            allData.map((course,index) => <MyAddedTD 
                                handleDelete={handleDelete}
                                key={course._id} 
                                course={course} 
                                index={index} 
                                
                               ></MyAddedTD>)
                             
                        }
             
            </tbody>
          </table>
        </div>
          :
          <div className='my-20 lg:p-32 py-30'>
            <p className='text-center text-3xl font-semibold'>No Courses registered</p>
            <p className='text-center mt-2'>Add course from <Link to={'/addCourses'}><span className='underline '>add courses</span></Link> section</p>
          </div>

        }
      </div>

        </div>
        </div>
    );
};

export default MyAddedList;