import React from 'react';
import '../../Common/Common.css';
import './Skills.css';
// import SkillImg from './Skills-img/99312-developer-skills.gif'
import SkillImg from './Skills-img/img-removebg-preview.png'

const Skills = () => {
  return (
    <div id='Skills' className='skills-bg lg:pt-5'>
      <div className='common-width py-12'>
      <div className='text-center'>
          <h1 className='text-center text-4xl lg:text-5xl font-semibold py-4'>MY <span className='text-primary'>SKILLS</span></h1>
          {/* <p className='md:w-3/4 mx-auto'>I have been involved in web development since last two years and have completed many projects here are some of my completed projects.</p> */}
        </div>
        <div className='main-container flex flex-col md:flex-row'>

          {/* skills set container  */}
          <div className='skill-container w-full p-5'>
            <div className='skills'>
              <h2>HTML</h2>
              <div data-aos="fade-up-right" className='progress-bar'>
                <div className='html'><span className='bg-base-100 text-xs'>86%</span></div>
              </div>
              <h2>CSS</h2>
              <div data-aos="fade-up-right" className='progress-bar'>
                <div className='css'><span className='bg-base-100 text-xs'>74%</span></div>
              </div>
              <h2>JavaScript</h2>
              <div data-aos="fade-up-right" className='progress-bar'>
                <div className='javascript'><span className='bg-base-100 text-xs'>56%</span></div>
              </div>
              <h2>React</h2>
              <div data-aos="fade-up-right" className='progress-bar'>
                <div className='react'><span className='bg-base-100 text-xs'>69%</span></div>
              </div>
              <h2>Node</h2>
              <div data-aos="fade-up-right" className='progress-bar'>
                <div className='node'><span className='bg-base-100 text-xs'>38%</span></div>
              </div>
              <h2>Redux</h2>
              <div data-aos="fade-up-right" className='progress-bar'>
                <div className='redux'><span className='bg-base-100 text-xs'>65%</span></div>
              </div>
              <h2>Express</h2>
              <div data-aos="fade-up-right" className='progress-bar'>
                <div className='express'><span className='bg-base-100 text-xs'>58%</span></div>
              </div>
              <h2>MongoDB</h2>
              <div data-aos="fade-up-right" className='progress-bar'>
                <div className='mongo'><span className='bg-base-100 text-xs'>76%</span></div>
              </div>
            </div>
          </div>

          {/* rigth site  */}
          <div className=' w-full'>
            <img className='w-full' src={SkillImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;