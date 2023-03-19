import React from 'react';
import "../../Common/Common.css";
import './AboutMe.css';
import AboutImg from "../../assast/About/about-img.png"

const AboutMe = () => {
  return (
    <div id='AboutMe' className='py-12 md:py-24'>
      <div className="common-width">
        <div className='about contain flex flex-col-reverse md:flex-row gap-5 lg:gap-10 gap-y-14'>
          <div  data-aos="zoom-in" data-aos-duration="3000"  className="col-left w-full flex items-center justify-center md:w-1/3 lg:ml-9 ">
            <div className="about-img w-3/4 md:w-full h-full">
              <img className='' src={AboutImg} alt="" />
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000"  className="col-right w-full">
            <h1 className='text-center md:text-start text-4xl lg:text-5xl font-semibold py-4'>About <span className='text-primary'>Me</span></h1>
            <div className='flex justify-center md:justify-start'>
            <h2 className='font-semibold md:font-bold mb-2 secound-title'>MERN-Stack Developer</h2>

            </div>
            <p className='text-center md:text-justify'>I have been experiencing the web development sector since 2021. During this time span, I have experienced a lot of front and back-end technologies. I am confident in my skills and knowledge. I have been working on many projects with React for the past 6 months and have completed around 50+ projects. I have always been interested in web development, which led me to learn web development without studying computer science. I am constantly looking for new technologies and staying up to date on industry trends. I am a quick learner and a dedicated team player too</p>
            <div className='w-full md:w-3/4 lg:w-1/2 grid grid-cols-2 gap-5 mt-8'>
              <a href='https://drive.google.com/file/d/15L1d46SpBclO0peng6dOOC0BOsYIgblv/view?usp=sharing' target='blank'>
                <button className='button w-full font-semibold py-1 lg:py-2 md:text-xl '>My Resume</button>
              </a>
              <a href='https://www.facebook.com/mesultan.mahmud' target='blank'>
                <button className='button w-full font-semibold py-1 lg:py-2 md:text-xl '>Hire Me</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;