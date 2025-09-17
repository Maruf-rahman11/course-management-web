import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar';
import { ToastContainer } from 'react-toastify';

const AuthLayout = () => {
    return (
        <div>
            <div className='bg-base-200 min-h-screen '>
            <header className=''>
                <Navbar></Navbar>
            </header>
            <main className='mt-25'>
                 <Suspense
                            fallback={
                              <div className="min-h-screen flex justify-center items-center">
                                <span className="loading loading-spinner loading-xl text-primary"></span>
                              </div>
                            }
                          >
                            <Outlet></Outlet>
                            <ToastContainer></ToastContainer>
                          </Suspense>
            </main>
        </div>
        </div>
    );
};

export default AuthLayout;