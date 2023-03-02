import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../../Components/Navber/Navber';
import Footer from '../../Components/Footer/Footer';
// import Navber from '../Components/Navber/Navber';

const Main = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;