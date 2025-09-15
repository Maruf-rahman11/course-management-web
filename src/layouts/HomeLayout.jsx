import React, { Suspense } from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../shared/Footer';
import { ToastContainer } from 'react-toastify';
const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
          <Suspense fallback={
              <div className="min-h-screen flex justify-center items-center">
                <span className="loading loading-spinner loading-xl text-primary"></span>
              </div>
            }>
                <Outlet></Outlet>
                <ToastContainer></ToastContainer>
          </Suspense>
            
         
            <Footer></Footer>
            
            
        </div>
    );
};

export default HomeLayout;