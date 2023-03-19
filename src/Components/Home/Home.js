import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import ContractMe from '../ContractMe/ContractMe';
import MySkills from '../MySkills/MySkills';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';
import Testimoniams from '../Testimoniams/Testimoniams';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Projects></Projects>
      <Skills></Skills>
      <AboutMe></AboutMe>
      <Testimoniams></Testimoniams>
      <ContractMe></ContractMe>
    </div>
  );
};

export default Home;