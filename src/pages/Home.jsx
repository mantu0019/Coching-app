import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router";
const Home = () => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.6 },
      });

      tl.from(badgeRef.current, { yPercent: 100, opacity: 0 })
        .from(headingRef.current, { yPercent: 20, opacity: 0 }, "-=0.4")
        .from(paraRef.current, { yPercent: 30, opacity: 0 }, "-=0.4")
        .from(
          imgRef.current,
          { yPercent: 10, opacity: 0, scale: 1.05 },
          "-=0.6",
        );
    },
    { scope: containerRef },
  );

  const quickLinks = ["about", "newBatch", "results", "contact"];
  const socials = [
    { icon: FaFacebookF, label: "Facebook", href: "#" },
    { icon: FaInstagram, label: "Instagram", href: "#" },
    { icon: FaYoutube, label: "YouTube", href: "#" },
    { icon: FaWhatsapp, label: "WhatsApp", href: "#" },
  ];

  return (
    <>
      <div ref={containerRef} className=" w-full px-6 py-10 sm:px-10 lg:px-16">
        <div className="flex flex-col-reverse items-center gap-10 overflow-hidden lg:flex-row lg:justify-between lg:gap-6">
          {/* Left content */}
          <div className=" overflow-hidden left flex w-full flex-col items-start justify-center gap-4 text-center lg:w-1/2 lg:text-left">
            <h3
              ref={badgeRef}
              className=" overflow-hidden rounded-3xl border border-blue-400/30 bg-blue-500/15 px-4 py-2 font-bold text-black backdrop-blur-md"
            >
              India's #1 Preparation Platform
            </h3>

            <h1
              ref={headingRef}
              className="   
             text text-start overflow-hidden text-4xl font-bold leading-tight sm:text-5xl md:text-5xl "
            >
              Your journey to a <br /> Government job <br />
              Starts here
            </h1>

            <h3
              ref={paraRef}
              style={{ fontFamily: "JetBrains" }}
              className="text text-lg capitalize font-bold text-gray-700 sm:text-xl md:text-2xl text-start "
            >
              Every lesson you learn today brings you one step closer to your
              dream government job.
            </h3>
          </div>

          {/* Right image */}
          <div className="right flex w-full items-center justify-center overflow-hidden lg:w-1/2">
            <img
              ref={imgRef}
              className="w-full max-w-md rounded-xl object-cover shadow-lg lg:max-w-full"
              src="https://i.pinimg.com/1200x/ae/5c/59/ae5c59af4a9185373474c62686551bfb.jpg"
              alt="Government job preparation illustration"
            />
          </div>
        </div>

        <div className="w-full min-h-[50vh] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 px-4 md:px-0 py-8 md:py-0">
          <div className="w-full md:w-[50vw] h-auto md:h-[50vh] flex items-center justify-center md:justify-start">
            <div className="flex flex-col items-center justify-center gap-1.5">
              <img
                className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] rounded-full object-cover object-center shadow-2xl border-4 border-white"
                src="https://images.unsplash.com/photo-1574281570877-bd815ebb50a4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="img"
              />
              <h1 className="text-xl sm:text-2xl font-bold text-center capitalize">
                Success Accademy <br />
                director
              </h1>
            </div>
          </div>

          <div className="w-full md:w-[50vw] h-auto md:h-[40vh]">
            <h1 className=" text-start text-xl sm:text-2xl md:text-3xl font-bold leading-tight md:leading-14  sm:px-8 md:px-3 text-center md:text-start">
              SSC, Railway, Banking, Bihar Police, BPSC, UPSC, CTET, STET तथा
              अन्य सभी सरकारी नौकरियों की सम्पूर्ण तैयारी एक ही स्थान पर।
            </h1>
          </div>
        </div>
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
