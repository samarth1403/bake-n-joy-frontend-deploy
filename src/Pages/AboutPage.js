import React from 'react';
import HelmetMeta from '../Components/ReusableComponents/HelmetMeta';
import HoriLine from '../Components/ReusableComponents/HoriLine';
import About from '../Components/SubComponents/About/About';

const AboutPage = () => {
  return (
    <>
      <HelmetMeta title={"Cake Website - About"}/>
      <About />
      <HoriLine/>
    </>
  );
}

export default AboutPage