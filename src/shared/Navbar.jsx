import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import { toast } from 'react-toastify';
import ThemeToggle from './ThemeToggle';


const Navbar = () => {

    const{user, signOutUser , loading } = use(AuthContext)
    // console.log(user)
     const success = () => toast.success("Logged out Successful",{
            autoClose: 2000
          });

    const handleSignOut = () =>{
      signOutUser()
      .then(()=>{
        console.log("signed out")
        success();
      })
      .catch(error=>{
        console.log(error)
      })
    }

    if(loading){
      return <div className='min-h-screen flex justify-center items-center'>
          <span className="loading loading-spinner loading-xl"></span>
          </div>
  }
  
    




    return (
    <div>
      <div id="navbar" className="navbar  fixed top-0 left-0 w-full z-50 shadow-md bg-gradient-to-r from-blue-500 to-indigo-600">
       
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-[#4e5dfe] rounded-box z-1 mt-3 w-52 p-2 shadow">
          <NavLink to={'/'}><li className='font-semibold cursor-pointer text-white'>Home</li></NavLink>
        <NavLink to={'/allCourses'}><li className='font-semibold cursor-pointer text-white'>Courses</li></NavLink> 
        {user && <NavLink to={'/addCourses'}><li className='font-semibold cursor-pointer text-white'>Add courses</li></NavLink>}
        {user && <NavLink to={'/myCourses'}><li className='font-semibold cursor-pointer text-white'>My Enrollment</li></NavLink>}
        {user && <NavLink to={'/myAddedCourses'}><li className='font-semibold cursor-pointer text-white'>My Courses</li></NavLink>}
        {user && <NavLink to={'/membership'}><li className='font-semibold cursor-pointer text-white'>Membership</li></NavLink>}
        <NavLink to={'/aboutUs'}><li className='font-semibold cursor-pointer text-white'>About US</li></NavLink>
      </ul>
    </div>
    <img className='w-[170px] hidden lg:flex' src="https://i.ibb.co.com/PvShLZc8/logo.png" alt="" srcset="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu gap-4 menu-horizontal px-1">
        <NavLink to={'/'}><li className='font-semibold cursor-pointer text-white'>Home</li></NavLink>
        <NavLink to={'/allCourses'}><li className='font-semibold cursor-pointer text-white'>Courses</li></NavLink> 
       {user && <NavLink to={'/addCourses'}><li className='font-semibold cursor-pointer text-white'>Add courses</li></NavLink>}
        {user && <NavLink to={'/myCourses'}><li className='font-semibold cursor-pointer text-white'>My Enrollment</li></NavLink>}
        {user && <NavLink to={'/myAddedCourses'}><li className='font-semibold cursor-pointer text-white'>My Courses</li></NavLink>}
        {user && <NavLink to={'/membership'}><li className='font-semibold cursor-pointer text-white'>Membership</li></NavLink>}
        <NavLink to={'/aboutUs'}><li className='font-semibold cursor-pointer text-white'>About US</li></NavLink>
    </ul>
  </div>
  <div className="navbar-end flex gap-2">
    <ThemeToggle></ThemeToggle>
    {
      user ? 
      <div className='flex gap-2'>
        <img  className='w-[40px] bg-white rounded-full' src={user.photoURL} alt="" srcset="" />
        <Link><button onClick={handleSignOut} className="btn">Sign out</button></Link>
      </div>
      

      :
      <div className='flex gap-2'>
            <Link to={'/auth/register'}><button className="btn">Sign up</button></Link>
            <Link to={'/auth/login'}><button className="btn">Log in</button></Link>
      </div>
    }

  </div>
</div>
    </div>
    );
};

export default Navbar;