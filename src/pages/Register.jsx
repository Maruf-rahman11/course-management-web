import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';

const Register = () => {
    const { loading,createUser,setUser, updateUser } = use(AuthContext)
console.log(loading)

    const handleRegister=(e)=>{
         e.preventDefault();
         const form = e.target
         const name = form.name.value
         const photo = form.photo.value
         const email = form.email.value
         const password = form.password.value
         if(name.length < 3){
            'Name should be more than 5 characters '
            return;
           }
           createUser(email,password)
           .then(result=>{
            const user = result.user
            updateUser({ displayName : name,photoURL : photo, })
            setUser({...user,displayName : name,photoURL : photo })
           })
           .catch(error=>{
            console.log(error)
           })

    }
    return (
        <div>
              <div className='mx-auto'>
          {/* <ToastContainer></ToastContainer> */}
            <p className='text-3xl font-semibold mb-6 text-center' >Create your account</p>
            <div class="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} class="card-body">
        <fieldset class="fieldset">
          <label class="label">Username</label>
          <input name='name' type="text" class="input" required placeholder="Username" />
          {/* {nameError && <p className='text-red-600'>{nameError}</p>} */}

          <label class="label">Photo URL</label>
          <input name='photo' type="text" class="input" required placeholder="Photo link" />
        
          <label class="label">Email</label>
          <input name='email' type="email" class="input" required placeholder="Email" />

          <label class="label">Password</label>
          <input name='password' type="password" class="input" required placeholder="Password" />
          {/* {passError && <p className='text-red-600'>{passError}</p>} */}

          <button type='submit' class="btn btn-neutral mt-4">Sign Up</button>
          <p className='my-3 text-center' >Already have an account?<Link to={'/auth/login'}><span className='text-blue-600'>Log In</span></Link></p>
        </fieldset>
      </form>
    </div>
        </div>
        </div>
    );
};

export default Register;