import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import StatsBar from "./StartBar";
import Hero from "./Hero";
import TopCourses from "./TopCourses";
import WhyChooseUs from "./WhyChooseUs";
import SelectionSection from "./Selection";
import StudentTestimonials from "./StudentTestimonials";
import LatestUpdates from "./LatestUpdates";
import Footer from "./Footer";

const Home = () => {
  const quickLinks = ["about", "newBatch", "results", "contact"];
  const socials = [
    { icon: FaFacebookF, label: "Facebook", href: "#" },
    { icon: FaInstagram, label: "Instagram", href: "#" },
    { icon: FaYoutube, label: "YouTube", href: "#" },
    { icon: FaWhatsapp, label: "WhatsApp", href: "#" },
  ];

  return (
    <>
      <div
        style={{
          background: `
            radial-gradient(circle at 15% 20%, rgba(255, 183, 155, 0.55) 0%, rgba(255, 183, 155, 0) 45%),
            radial-gradient(circle at 25% 60%, rgba(255, 140, 105, 0.35) 0%, rgba(255, 140, 105, 0) 40%),
            radial-gradient(circle at 80% 30%, rgba(168, 213, 186, 0.5) 0%, rgba(168, 213, 186, 0) 45%),
            radial-gradient(circle at 70% 75%, rgba(150, 200, 170, 0.45) 0%, rgba(150, 200, 170, 0) 50%),
            #faf6f1
          `,
        }}
        className=" w-full px-6 py-10 sm:px-10 lg:px-16"
      >
        <Hero />

        <StatsBar />

        <TopCourses/>
        <WhyChooseUs/>
        <SelectionSection/>
        <StudentTestimonials/>
        <LatestUpdates/>



        
      <Footer/>
      </div>

    </>
  );
};

export default Home;
