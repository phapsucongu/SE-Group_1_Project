import React from 'react';
import HeroSection from '../components/Home/HeroSection/HeroSection';
import ServicesInfor from '../components/Home/ServicesInfo/ServicesInfo';
import Ads from '../components/Home/Ads/Ads';

function HomePage() {
  return (
    <>
    <HeroSection />
    <Ads />
    <ServicesInfor />

    </>
  );
}

export default HomePage;