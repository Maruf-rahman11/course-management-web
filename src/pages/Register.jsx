import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    const handleRegister=()=>{

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