import React from 'react';
import Banner from '../Banner/Banner';
import ContractMe from '../ContractMe/ContractMe';
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
      <ContractMe></ContractMe>
    </div>
  );
};

export default Home;