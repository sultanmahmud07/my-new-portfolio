import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';

const Others = () => {
  return (
    <div>
      <p>Navber</p>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Others;