import React from 'react';
import Banner from '../Banner/Banner';
import ContractMe from '../ContractMe/ContractMe';
import MySkills from '../MySkills/MySkills';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Projects></Projects>
      <Skills></Skills>
      {/* <MySkills></MySkills> */}
      <ContractMe></ContractMe>
    </div>
  );
};

export default Home;