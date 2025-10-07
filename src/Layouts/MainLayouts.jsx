import React from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from '../Componants/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Componants/Footer';

const MainLayouts = () => {
  return (
    <div>
       <Navbar></Navbar>
       <Outlet></Outlet>
       <Footer></Footer>
       <ToastContainer />
    </div>
  );
};

export default MainLayouts;