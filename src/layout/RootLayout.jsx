import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RootLayout = () => {
  return (
    <div className='inter'>
      <Navbar />
      <main className='w-11/12 mx-auto'>
         <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;