import React from 'react';
// import { Link } from 'react-router-dom';
import "../../Common/Common.css";
import {  Button, Element, Events, animateScroll as scroll, scrollSpy, scroller, Link } from 'react-scroll'
import DomLink from './DomLink/DomLink';
import { useNavigate } from 'react-router-dom';
import Logo from "../../assast/Logo/logo.png"


const Navber = () => {
  const navigate =useNavigate();
  const home =() => {
    navigate('/')
  }
  const Projects =() => {
    navigate('Projects')
  }
  const Skills =() => {
    navigate('/')
  }
  const manuItems = <React.Fragment>
    <li><Link onClick={home} className='font-semibold link-1 active' spy={true} to="Banner" smooth={true} activeClass='activeClass'>Home</Link></li>
    <li><Link onClick={home} className='font-semibold link-2' spy={true} to="Services" smooth={true} >Services</Link></li>
    <li><Link onClick={home} className='font-semibold link-3' spy={true} to="Projects" smooth={true} >Projects</Link></li>
    <li><Link onClick={home} className='font-semibold link-4' spy={true} to="Skills" smooth={true} >Skills</Link></li>
    <li><Link onClick={home} className='font-semibold link-5' spy={true} to="Contract" smooth={true} >Contract</Link></li>
    {/* <li><Link className='font-semibold' spy={true} to={Navber} smooth={true} activeClass='activeClass'>Home</Link></li> */}

    <DomLink></DomLink>

  </React.Fragment>
  return (
   <div id="Navber" className=' fixed top-0 left-0 right-0 z-50'>
    <div className='bg-base-200 shadow-lg '>
    <div className='common-width'>
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu2 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {manuItems}
          </ul>
        </div>
        <Link className="nav-logo btn btn-ghost normal-case text-xl" onClick={home}  spy={true} to="Banner" smooth={true}>
          <img className='w-14 h-12'  src={Logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu2 menu-horizontal px-1">
          {manuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <a target='blank' href='https://www.facebook.com/mesultan.mahmud' className="btn btn-sm btn-outline hire-btn btn-primary text-white">Hire Me</a>
      </div>
    </div>
    </div>
   </div>
   </div>
  );
};

export default Navber;