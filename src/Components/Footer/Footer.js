import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { GrTwitter } from 'react-icons/gr';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { motion } from "framer-motion"
import "./Footer.css";
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate =useNavigate();
  const home =() => {
    navigate('/')
  }
  return (
    <div className='bg-base-300'>
      <div className='flex flex-col items-center justify-center relative'>
        <div className='py-8  '>
          <div className='social-icon'>
            <div className='absolute top-8 right-3 lg:right-10' >
            <li className='list-none'><Link onClick={home} className='font-semibold link-4' spy={true} to="Banner" smooth={true} ><AiOutlineArrowUp></AiOutlineArrowUp></Link></li>
            </div>
            <a className='icon-1' target="blank" href='https://www.facebook.com/mesultan.mahmud'><FaFacebookF></FaFacebookF></a>
            <a className='icon-2' target="blank" href='https://www.linkedin.com/in/md-shimul-molla-03b8b2259/'><FaLinkedinIn></FaLinkedinIn></a>
            <a className='icon-3' target="blank" href='https://twitter.com/MdShimulMolla07'><GrTwitter></GrTwitter></a>
            <a className='icon-4' target="blank" href='https://www.instagram.com/sk.sultan_mahmud/'><FaInstagram></FaInstagram></a>
            
          </div>
        </div>
        <div className='w-full flex items-center'>
          <p className='text-center footer-border-set w-full py-5 text-sm md:text-base'>© Copyright 2023 Md Shimul Molla</p>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;