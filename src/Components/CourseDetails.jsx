import React from 'react';
import { useLoaderData } from 'react-router';

const CourseDetails = () => {
    const course = useLoaderData()
    console.log(course)
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
        <div>
            <div className='my-10'>
    <div className="card lg:card-side bg-base-100 shadow-sm">
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
  </div>
</div>
        </div>
        </div>
    );
};

export default CourseDetails;