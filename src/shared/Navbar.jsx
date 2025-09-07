import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
 
    return (
    <div>
      <div className="navbar fixed top-0 left-0 z-50  bg-[#4e5dfe] shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <NavLink><li>Home</li></NavLink>
        <NavLink><li>Courses</li></NavLink>
        <NavLink><li>Add courses</li></NavLink>
      </ul>
    </div>
    <img className='w-[170px]' src="https://i.ibb.co.com/PvShLZc8/logo.png" alt="" srcset="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu gap-4 menu-horizontal px-1">
        <NavLink to={'/'}><li className='font-semibold cursor-pointer text-white'>Home</li></NavLink>
        <NavLink><li className='font-semibold cursor-pointer text-white'>Courses</li></NavLink> 
        <NavLink to={'/addCourses'}><li className='font-semibold cursor-pointer text-white'>Add courses</li></NavLink>
    </ul>
  </div>
  <div className="navbar-end flex gap-2">
    <Link to={'/auth/register'}><button className="btn">Sign in</button></Link>
    <button className="btn">Log out</button>
  </div>
</div>
    </div>
    );
};

export default Navbar;