import React, { useEffect, useState } from 'react';
import '../../Common/Common.css';
import ProjectCard from './ProjectCard/ProjectCard';
import { Audio } from 'react-loader-spinner'
import Loader from '../Loader/Loader';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('https://assignment-server-iota.vercel.app/projects')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setProjects(data)
        setLoading(false)
      })
  }, [])

  // if(loading){
  //   return <Loader></Loader>
  // }


  return (
    <div id='Projects' className='common-width lg:pb-5'>
      <div className='pt-5 lg:pt-24 my-5 lg:my-24'>
        <div className='text-center'>
          <h1 data-aos="zoom-in" className='text-center text-4xl lg:text-5xl font-semibold py-4'>MY <span className='text-primary'>PROJECTS</span></h1>
          <p data-aos="fade-up" className='md:w-3/4 mx-auto'>I have been involved in web development since last two years and have completed many projects here are some of my completed projects.</p>
        </div>

        {/* projects card  */}
       {
        loading ? 
        <Loader></Loader> 
        : 
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-9'>
        {
          projects.map(project => <ProjectCard
          key={project._id}
          service={project}
          ></ProjectCard>)
        }


      </div>
       }
      </div>
    </div>
  );
};

export default Projects;