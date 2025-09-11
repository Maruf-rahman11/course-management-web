import React from 'react';
import { createBrowserRouter } from "react-router";
import HomeLayout from '../layouts/HomeLayout';
import Home from '../home/Home';
import AddCourses from '../Components/AddCourses';
import Register from '../pages/Register';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import AllCourses from '../Components/AllCourses';

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
        },
        {
          path:'/allCourses',
          Component: AllCourses,
          loader: ()=>fetch("http://localhost:3000/courses"),
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
        },
        {
          path : '/auth/login',
          Component : Login,
        }
    ]
    }
  ]);
export default router;