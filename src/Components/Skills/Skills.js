import React from 'react';
import '../../Common/Common.css';
import './Skills.css';
// import SkillImg from './Skills-img/99312-developer-skills.gif'
import SkillImg from './Skills-img/img-removebg-preview.png'

const Skills = () => {
  return (
    <div id='Skills' className=''>
      <div className='common-width py-12'>
        <div className='main-container flex flex-col md:flex-row'>
          <div className=' w-full'>
            <img className='w-full' src={SkillImg} alt="" />
          </div>
          {/* skills set container  */}
          <div className='skill-container w-full p-5'>
            <div className='skills'>
              <h2>HTML</h2>
              <div className='progress-bar'>
                <div className='html'><span>86%</span></div>
              </div>
              <h2>CSS</h2>
              <div className='progress-bar'>
                <div className='css'><span>74%</span></div>
              </div>
              <h2>JavaScript</h2>
              <div className='progress-bar'>
                <div className='javascript'><span>56%</span></div>
              </div>
              <h2>React</h2>
              <div className='progress-bar'>
                <div className='react'><span>49%</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;