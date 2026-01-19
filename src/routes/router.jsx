import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import Home from '../pages/Home/Home';

const router = createBrowserRouter([
  {
    path:"/",
    Component: RootLayout,
    errorElement: <h2>Error Page</h2>,
    children:[
      {
        index:true,
        Component: Home,
      }
    ]
  }
])

export default router;