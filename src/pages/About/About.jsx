import React from "react";
import Hero from "./Hero";
import DirectorMessage from "./DirectorMessage";
import Vision from "./Vision";
import Mission from "./Mission";
import Methodology from "./Methodology";
import Journey from "./Journey";
import WhyChooseUs from "./WhyChooseUs";
import CallToAction from "./CallToAction";
 
const About = () => {
  return (
    <div>
       
      <Hero />
      <DirectorMessage/>
      <Mission/>
      <Vision/>
      <Methodology/>
      <Journey/>
      <WhyChooseUs/>
      <CallToAction/>
     </div>
  );
};

export default About;
