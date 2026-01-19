import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <div className='inter'>
      <Navbar />
      <main className='w-10/12 mx-auto'>
         <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;