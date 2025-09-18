import React from 'react';
import { createBrowserRouter } from "react-router";
import HomeLayout from '../layouts/HomeLayout';
import Home from '../home/Home';
import AddCourses from '../Components/AddCourses';
import Register from '../pages/Register';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import AllCourses from '../Components/AllCourses';
import CourseDetails from '../Components/CourseDetails';
import MyCourses from '../Components/MyCourses';
import PrivateRoute from '../Contexts/PrivateRoute';
import MyAddedCourses from '../Components/my added courses/MyaddedCourses';
import UpdateMyCourse from '../Components/my added courses/UpdateMyCourse';
import AboutUs from '../Components/AboutUs';

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
            element : <PrivateRoute>
            <AddCourses></AddCourses>
          </PrivateRoute>,
        },
        {
          path:'/allCourses',
          Component: AllCourses,
          loader: ()=>fetch("https://studynext-web-server.vercel.app/courses"),
        },
        {
          path: '/courseDetails/:id',
          element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
          loader : ({params})=>fetch(`https://studynext-web-server.vercel.app/courses/${params.id}`)
        },
        {
          path : '/myCourses',
          element:<PrivateRoute>
            <MyCourses></MyCourses>
          </PrivateRoute> ,
        },
        {
          path: '/myAddedCourses',
          element :<PrivateRoute><MyAddedCourses></MyAddedCourses></PrivateRoute>
        },
        {
          path : '/UpdateCourse/:id',
          element : <PrivateRoute><UpdateMyCourse></UpdateMyCourse></PrivateRoute>,
          loader : ({params})=>fetch(`https://studynext-web-server.vercel.app/courses/${params.id}`)
        },
        {
          path: '/aboutUs',
          Component: AboutUs
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