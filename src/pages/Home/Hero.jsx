import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { GraduationCap, Phone, Rocket } from "lucide-react";
import gsap from "gsap";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const connectionRef = useRef(null);

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
        )
        .from(
          connectionRef.current,
          {
            y: 100,
            opacity: 0,
            ease: "power4.out",
            stagger: 0.3,
          },
          "-=0.4",
        );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="flex flex-col-reverse items-center gap-6 overflow-hidden px-4 sm:px-6 lg:flex-row lg:justify-between lg:gap-8 lg:px-0"
    >
      {/* Left content */}
      <div className="left flex w-full flex-col items-center gap-3 overflow-hidden text-center sm:gap-4 lg:w-1/2 lg:items-start lg:text-left">
        <h3
          ref={badgeRef}
          className="overflow-hidden rounded-3xl border border-orange-400/30 bg-blue-500/15 px-3 py-1.5 text-xs font-bold text-black backdrop-blur-md sm:px-4 sm:py-2 sm:text-sm"
        >
          Dream || Prepare || Achieve
        </h3>

        <h1
          ref={headingRef}
          className="overflow-hidden text-balance text-center text-3xl font-bold capitalize leading-tight sm:text-4xl md:text-5xl md:leading-[1.15] lg:text-left lg:text-6xl"
        >
          Your Dream <br className="hidden sm:block" />{" "}
          <span className="text-orange-400">Government Job</span>{" "}
          <br className="hidden sm:block" />
          Starts here
        </h1>

        <h3
          ref={paraRef}
          className="text-balance text-center text-base font-bold capitalize text-gray-700 sm:text-lg md:text-xl lg:text-left"
        >
          सपना सरकारी नौकरी का... <br />
          शुरुआत{" "}
          <span className="text-orange-500">Vikash Coaching Institute</span> से।
        </h3>

        <div
          ref={connectionRef}
          className=" contact grid w-full grid-cols-1 gap-2.5 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-3 lg:justify-center"
        >
          <Link
            to="/get-admission"
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl active:scale-95 sm:text-base"
          >
            <Rocket size={20} className="shrink-0" />
            <span>Start Your Journey</span>
          </Link>

          <a
            href="tel:+917808900900"
            className="flex items-center justify-center gap-2 rounded bg-orange-500 px-3.5 py-2.5 text-sm font-bold capitalize text-white transition-transform duration-150 active:scale-95 sm:text-base"
          >
            <Phone size={20} className="shrink-0" />
            <span>Admission Enquiry</span>
          </a>

          <a
            href="https://wa.me/917808900900?text=Hello%20Sir,%20mujhe%20admission%20ke%20baare%20me%20jaankari%20chahiye."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded bg-green-500 px-3.5 py-2.5 text-sm font-bold capitalize text-white transition-transform duration-150 active:scale-95 sm:text-base"
          >
            <FaWhatsapp size={20} className="shrink-0 text-white" />
            <span>WhatsApp Now</span>
          </a>
          <a
            href="https://wa.me/917808900900?text=Namaste%20Sir,%20main%20Free%20Demo%20Class%20lena%20chahta%20hu.%20Kripya%20mujhe%20iski%20details%20share%20kijiye."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 rounded bg-blue-500 px-3.5 py-2.5 text-sm font-bold text-white transition-transform duration-150 hover:bg-blue-600 active:scale-95 sm:text-base"
          >
            <GraduationCap size={20} className="shrink-0" />
            <span>Book Free Demo Class</span>
          </a>
        </div>
      </div>

      {/* Right image */}
      <div className="right flex w-full items-center justify-center overflow-hidden lg:w-1/2">
        <img
          ref={imgRef}
          className="aspect-[4/3] w-full max-w-xs rounded-xl object-cover shadow-lg sm:max-w-sm md:max-w-md lg:aspect-auto lg:max-w-full"
          src="https://i.pinimg.com/1200x/ae/5c/59/ae5c59af4a9185373474c62686551bfb.jpg"
          alt="Government job preparation illustration"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Hero;
