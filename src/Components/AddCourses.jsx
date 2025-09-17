import Lottie from 'lottie-react';
import React, { use } from 'react';
import add from '../assets/Login.json'
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../Contexts/AuthContext';

const AddCourses = () => {
    const {user} = use(AuthContext);

    const handleAddCourse = (e)=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCourse = Object.fromEntries(formData.entries())
        const createdAt=  new Date().toISOString()
        const email = user.email

        const allData = {
            ...newCourse,
            createdAt,
            addedBy : email

        }
        console.log(allData);
        axios.post('http://localhost:5000/courses',allData)
          .then(res=>{
            if(res.data.insertedId){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your course has been published",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  form.reset()
            }
            console.log(res.data);
          })
          .catch(err=>{
            console.log(err.data);
          });
        

    }
    return (
        <div>
             <div className='mt-20 mb-20 p-4 mx-auto w-11/12 '>
            <div className='lg:p-12 p-4 text-center space-y-4'>
                <h1 className="lg:text-6xl pb-3 text-4xl">Add Your Course</h1>
            </div>
            <div className=' '>
                <form onSubmit={handleAddCourse}>
                    <div className='grid lg:grid-cols-2 grid-cols-1  '>
                        <div className='my-auto'>
                    <fieldset className="fieldset mb-3 bg-[#d4d7f6] border-base-300 rounded-box border p-4">
                        <label className="label">Course Name</label>
                        <input type="text" name='courseName' required className="input w-full" placeholder="Add course name" />
                    </fieldset>
                    <fieldset className="fieldset mb-3 bg-[#d4d7f6] border-base-300 rounded-box border p-4">
                        <label className="label">Description</label>
                        <input type="text" name='description' required className="input w-full" placeholder="Add description" />
                    </fieldset>
                    <fieldset className="fieldset mb-3 bg-[#d4d7f6] border-base-300 rounded-box border p-4">
                        <label className="label">Price</label>
                        <input type="text" name='price required' className="input w-full" placeholder="Add price" />
                    </fieldset>
                   
                    <fieldset className="fieldset mb-3 bg-[#d4d7f6] border-base-300 rounded-box border p-4">
                        <label className="label">Available Seats</label>
                        <input type="text" name='seats' required className="input w-full" placeholder="Add available seats" />
                    </fieldset>
                    <fieldset className="fieldset mb-3 bg-[#d4d7f6] border-base-300 rounded-box border p-4">
                        <label className="label">Duration</label>
                        <input type="text" name='duration' required className="input w-full" placeholder="Add estimated course duration" />
                    </fieldset>
                    <fieldset className="fieldset mb-3 bg-[#d4d7f6] border-base-300 rounded-box border p-4">
                        <label className="label">Image URL</label>
                        <input type="url" name='photoURL' required className="input w-full" placeholder="Add photo" />
                    </fieldset>
                    
                   
                </div>
                  <div className='justify-center'>
            <Lottie  className="w-full sm:w-[400px] md:w-[500px] lg:w-[550px] h-auto" animationData={add} loop={true} />
            </div>
                    </div>
                
              
            <input type="submit" className='btn text-white bg-[#4e5dfe] mt-6 w-full' value="Add Course" />
            </form> 
            
            
            </div>
           
           
        </div>
        </div>
    );
};

export default AddCourses;