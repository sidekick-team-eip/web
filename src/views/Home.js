import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import ChatBlock from '../components/sections/ChatbotBlock';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <Testimonial topDivider />
      <Cta split />
      <ChatBlock/>
    </>
  );
}

export default Home;