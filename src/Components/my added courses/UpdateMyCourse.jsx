import Lottie from 'lottie-react';
import React from 'react';
import add from '../../assets/Login.json'
import { useLoaderData } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateMyCourse = () => {
    const myCourse = useLoaderData();
    console.log(myCourse.courseName)
    const handleUpdateCourse = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedCourse = Object.fromEntries(formData.entries())
        console.log(updatedCourse);

        // send updated coffee to the db
        axios.put(`http://localhost:5000/courses/${myCourse._id}`, updatedCourse)
        .then(res=>{
          console.log(res)
          if(res.data.modifiedCount){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Plant updated successfully.",
                showConfirmButton: false,
                timer: 1500
              });
        }
        })
        .catch(err=>{
          console.log(err)
        })

    }


    return (
        <div>
            <div className='mt-20 mb-20 p-4 mx-auto w-11/12 '>
            <div className='lg:p-12 p-4 text-center space-y-4'>
                <h1 className="lg:text-6xl pb-3 text-4xl">Add Your Course</h1>
            </div>
            <div className=' '>
                <form onSubmit={handleUpdateCourse}>
                    <div className='grid lg:grid-cols-2 grid-cols-1  '>
                        <div className='my-auto'>
                    <fieldset className="fieldset mb-3 bg-[#d4d7f6] border-base-300 rounded-box border p-4">
                        <label className="label">Course Name</label>
                        <input type="text" defaultValue={myCourse.courseName} name='courseName' className="input w-full" placeholder="Add course name" />
                    </fieldset>
                    <fieldset className="fieldset mb-3 bg-[#d4d7f6] border-base-300 rounded-box border p-4">
                        <label className="label">Description</label>
                        <input type="text" defaultValue={myCourse.description} name='description' className="input w-full" placeholder="Add description" />
                    </fieldset>
                    <fieldset className="fieldset mb-3 bg-[#d4d7f6] border-base-300 rounded-box border p-4">
                        <label className="label">Price</label>
                        <input type="text" defaultValue={myCourse.price} name='price' className="input w-full" placeholder="Add price" />
                    </fieldset>
                   
                    <fieldset className="fieldset mb-3 bg-[#d4d7f6] border-base-300 rounded-box border p-4">
                        <label className="label">Available Seats</label>
                        <input type="text" defaultValue={myCourse.seats} name='seats' className="input w-full" placeholder="Add available seats" />
                    </fieldset>
                    <fieldset className="fieldset mb-3 bg-[#d4d7f6] border-base-300 rounded-box border p-4">
                        <label className="label">Duration</label>
                        <input type="text" defaultValue={myCourse.description} name='duration' className="input w-full" placeholder="Add estimated course duration" />
                    </fieldset>
                    <fieldset className="fieldset mb-3 bg-[#d4d7f6] border-base-300 rounded-box border p-4">
                        <label className="label">Image URL</label>
                        <input type="url" defaultValue={myCourse.photoURL} name='photoURL' className="input w-full" placeholder="Add photo" />
                    </fieldset>
                    
                   
                </div>
                  <div className='justify-center'>
            <Lottie  className="w-full sm:w-[400px] md:w-[500px] lg:w-[550px] h-auto" animationData={add} loop={true} />
            </div>
                    </div>
                
              
            <input type="submit" className='btn text-white bg-[#4e5dfe] mt-6 w-full' value="Update Course" />
            </form> 
            
            
            </div>
           
           
        </div>
        </div>
    );
};

export default UpdateMyCourse;