import React from 'react';
import { createBrowserRouter } from "react-router";
import HomeLayout from '../layouts/HomeLayout';
import Home from '../home/Home';
import AddCourses from '../Components/AddCourses';
import Register from '../pages/Register';
import AuthLayout from '../layouts/AuthLayout';

const router = createBrowserRouter([
    {
      path: "/",
      Component: HomeLayout,
      children :[
        {
            path : "/",
            Component : Home,
        },
        {
            path : '/addCourses',
            Component : AddCourses,
        }
      ]
    },
    {
      path : '/auth',
    Component: AuthLayout,
    children :[
       
        {
            path : '/auth/register',
            Component : Register
        }
    ]
    }
  ]);
export default router;