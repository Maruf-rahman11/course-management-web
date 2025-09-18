import React, { use, useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import axios from 'axios';
import { myCoursesPromise } from '../API/applicantAPI';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const CourseDetails = () => {
    const { user } = use(AuthContext)
    const[myCourse,setMyCourse] = useState([])
    const[loading,setLoading] = useState(true)
    const {id} = useParams()
    const course = useLoaderData()
    const isEnrolled = myCourse.includes(course._id);
    const notify1 = () => toast.warning("Max Course Enrollment Reached",{
      autoClose: 2000
    });
    console.log(course)


    useEffect(()=>{
      if (!user?.email) return;
      const fetchMyCourses = async () => {
      
          const allData = await myCoursesPromise(user.email,user.accessToken)
          const coursesId = allData.map(course => course.course_id);

          setMyCourse(coursesId)
          setLoading(false);  
         
      };
    
    
      fetchMyCourses();
    },[])
 
  
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


      const handleEnrollment = ()=>{
        const application = {
            course_id : course._id,
            applicant : user.email,
            applicantPhoto : user.photoURL
        }
       
        const remainingSeats =  course.seats - 1;
      
        if(myCourse.length === 3){
           notify1()
           return;
        }
   
        axios.patch(`https://studynext-web-server.vercel.app/courses/${id}`, { seats: remainingSeats })
        .then(res=>{
          console.log(res)
        })
        .catch(err=>{
          console.log(err)
        })
        axios.post('https://studynext-web-server.vercel.app/applicants', application)
        .then(res=>{
          setMyCourse(prev => [...prev, course._id])
          Swal.fire({
                              position: "center",
                              icon: "success",
                              title: "Enrollment Successful",
                              showConfirmButton: false,
                              timer: 1500
                            });

          console.log(res.data);
        })
        .catch(err=>{
          console.log(err.data);
        });
      }
      if(loading){
        return <div className='min-h-screen flex justify-center items-center'>
        <span className="loading loading-spinner loading-xl"></span>
        </div>
      }
    return (
        <div>
            <div className='my-10 shadow-sm'>
    <div className="card lg:card-side bg-base-100 ">
  <figure className='lg:w-[40%] p-8  '>
    <img className='rounded-2xl border '
      src={course.photoURL}
      alt="Album" />
  </figure>
  <div className="p-8 flex flex-col justify-center lg:w-[60%]">
    <h2 className="font-bold text-3xl mb-6">{course.courseName}</h2>
    <p className='font-semibold pb-2 text-lg'>{course.description}</p>
    <p className='pb-2'></p>
    <p><span className='font-bold text-lg'>Course Fee</span> :{course.price} </p>
    <p><span className='font-bold text-lg'>Available seats</span> :{course.seats}</p>
    <p><span className='font-bold text-lg'>Duration</span> :{course.duration} </p>
    <p><span className='font-bold text-lg'>Created on</span> :{formatDate(course.createdAt)} </p>
    {
      isEnrolled || course.seats == 0 ? <button disabled onClick={handleEnrollment} className='btn mt-8 btn-primary border'>{isEnrolled? <p>Already Enrolled</p> : <p>No seat available</p> }</button>
      :
      <button onClick={handleEnrollment} className='btn mt-8 btn-primary border'>Enroll Now</button>
    }
    
  </div>
</div>



        </div>
        </div>
    );
};

export default CourseDetails;