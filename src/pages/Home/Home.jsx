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



        
      </div>

      <footer className="w-full bg-black text-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 pt-14 pb-8">
          <div className="flex flex-col items-center text-center gap-8">
            {/* Brand */}
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Success Academy
              </h2>
              <p className="text-sm sm:text-base text-gray-400 max-w-md">
                Empowering students to achieve their dream government job.
              </p>
            </div>

            {/* Quick Links */}
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 sm:gap-x-8">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link}`}
                    className=" capitalize text-sm sm:text-base text-gray-300 transition-colors duration-200 hover:text-white relative
                             after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0
                             after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white
                           transition-all duration-300 ease-out hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-lg hover:shadow-white/20"
                >
                  <Icon className="w-4 h-4" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-white/15 mt-10 mb-6" />

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
            <p className="text-xs text-gray-500">
              © 2026 Success Academy. All Rights Reserved.
            </p>
            <p className="text-xs text-gray-500">
              Designed &amp; Developed by{" "}
              <span className="text-gray-300">Mantu Kushwaha</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
