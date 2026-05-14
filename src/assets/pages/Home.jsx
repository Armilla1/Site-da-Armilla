import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import AboutProduct from '../components/AboutProduct/AboutProduct';
import Community from '../components/Community/Community';
import Benefits from '../components/Benefits/Benefits';
import Plans from '../components/Plans/Plans';
import Milla from '../components/Milla/Milla';
import Essence from '../components/Essence/Essence';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutProduct />
      <Community />
      <Benefits />
      <Plans />
      <Milla />
      <Essence />
      <Footer />
    </>
  );
};

export default Home;
