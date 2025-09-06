import React from 'react';
import { createBrowserRouter } from "react-router";
import HomeLayout from '../layouts/HomeLayout';
import Home from '../home/Home';
import AddCourses from '../pages/AddCourses';

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
  ]);
export default router;