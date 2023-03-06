import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import "../../Common/Common.css";
import './Banner.css'
import Img from "../../assast/Banner-img/banner-photo-img.png"
import BannerBottom from "../../assast/Banner-img/wave-haikei.png"
import BannerTopImg from "../../assast/Banner-img/web-development.png"
import 'boxicons'
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { GrTwitter } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';
import { motion } from "framer-motion"
import ConnectButton from '../../Hooks/ConnectButton/ConnectButton';

const Banner = () => {
  const transition = { duration: 2, type: 'spring' }

  return (
    <div id='Banner' className=' mt-20'>
      <div className='main-bg'>
        <div className='common-width flex flex-col-reverse md:flex-row h-auto  lg:-h-screen'>
          <div className='w-full'>
            <h1 className='banner-fast-header-1 text-2xl lg:text-3xl lg:pt-32 lg:pb-4 font-bold'>Hello, It's me</h1>
            {/* <h1 className='text-5xl md:pt-32 pb-4 font-semibold'>Md Shimul Molla</h1> */}
            <h1 className='banner-name text-3xl lg:text-4xl mb-2 lg:pb-4 font-bold'>MD <span className='text-primary'><Typewriter
              words={['SHIMUL MOLLA']}

              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}

            /></span></h1>
            <h1 className='banner-fast-header-2 text-2xl lg:text-3xl font-semibold'><span className='mr-2 font-semibold'>And I</span>
              <span className='text-primary'>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={['Develop Cool Website', 'am Front-End Developer', 'love creating creative websites']}
                  loop={100}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}

                />
              </span>
            </h1>
            <p className='py-4 banner-p lg:mt-6'>I have been experiencing the web development sector since 2021. During this time span, I have experienced a lot of front and back-end technologies.</p>
            <div className='social-icon'>
              <a className='icon-1' target="blank" href='https://www.facebook.com/mesultan.mahmud'><FaFacebookF></FaFacebookF></a>
              <a className='icon-2' target="blank" href='https://www.linkedin.com/in/md-shimul-molla-03b8b2259/'><FaLinkedinIn></FaLinkedinIn></a>
              <a className='icon-3' target="blank" href='https://twitter.com/MdShimulMolla07'><GrTwitter></GrTwitter></a>
              <a className='icon-4' target="blank" href='https://www.instagram.com/sk.sultan_mahmud/'><FaInstagram></FaInstagram></a>
              <a className='icon-5 ' target="blank" href='https://github.com/sultanmahmud07'><BsGithub></BsGithub></a>
            </div>
            <div className='w-full button-box flex items-center flex-col md:flex-row pt-9 gap-5 lg:pr-32'>
              <div className='w-full'>
                <a href='https://drive.google.com/file/d/15L1d46SpBclO0peng6dOOC0BOsYIgblv/view?usp=sharing' target='blank'>
                <button className='button w-full font-semibold py-1 lg:py-2 md:text-xl '>My Resume</button>
                </a>
              </div>
              <div className='w-full'>
                <button className='button w-full font-semibold py-1 lg:py-2 md:text-xl '><ConnectButton></ConnectButton></button>

              </div>
            </div>
          </div>
          <div className='w-full relative'>
            <motion.div
              initial={{ left: "-36%" }}
              whileInView={{ left: "-4%" }}
              transition={transition}
              className='absolute img-set left-[-15px] lg:left-[-55px] w-16 h-16'>
              <div className='w-full bg-set'>
                <img

                  className='w-full img-set-main'
                  src={BannerTopImg} alt="" />
              </div>
            </motion.div>
            <div className='absolute img-set left-[-15px] lg:left-[-55px] w-14 h-14 md:hidden block'>
              <div className='w-full bg-set'>
                <img

                  className='w-full img-set-main'
                  src={BannerTopImg} alt="" />
              </div>
            </div>
            <div className='shadow-set banner-img relative'>
              <div className='absolute img-bg-overlay-set w-full h-full'></div>
              <div className='banner-blur'>
                {/* blur background */}
              </div>
              <img className='w-full md:mt-5' src={Img} alt="" />
              <div className='shawo-set'></div>
              <div className='shawo-set'></div>
              {/* <img className='w-full absolute bottom-[-20px] left-0' src={BannerBottom} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;