// import { useGSAP } from "@gsap/react";
// import React, { useRef } from "react";
// import { GraduationCap, Phone } from "lucide-react";
// import gsap from "gsap";
// import { FaWhatsapp } from "react-icons/fa";
// const Hero = () => {
//   const containerRef = useRef(null);
//   const imgRef = useRef(null);
//   const badgeRef = useRef(null);
//   const headingRef = useRef(null);
//   const paraRef = useRef(null);

//   useGSAP(
//     () => {
//       const tl = gsap.timeline({
//         defaults: { ease: "power3.out", duration: 0.6 },
//       });

//       tl.from(badgeRef.current, { yPercent: 100, opacity: 0 })
//         .from(headingRef.current, { yPercent: 20, opacity: 0 }, "-=0.4")
//         .from(paraRef.current, { yPercent: 30, opacity: 0 }, "-=0.4")
//         .from(
//           imgRef.current,
//           { yPercent: 10, opacity: 0, scale: 1.05 },
//           "-=0.6",
//         );
//     },
//     { scope: containerRef },
//   );

//   return (
//     <>
//       <div
//         ref={containerRef}
//         className="flex flex-col-reverse items-center gap-10 overflow-hidden   lg:flex-row lg:justify-between lg:gap-6"
//       >
//         {/* Left content */}
//         <div className=" overflow-hidden left flex w-full flex-col items-start justify-center gap-4 text-center lg:w-1/2 lg:text-left">
//           <h3
//             ref={badgeRef}
//             className=" overflow-hidden rounded-3xl border border-orange-400/30 bg-blue-500/15 px-4 py-2 font-bold text-black backdrop-blur-md"
//           >
//             Dream Prepare Achiceve
//           </h3>

//           <h1
//             ref={headingRef}
//             className=" capitalize
//              text text-start overflow-hidden text-4xl font-bold leading-tight md:leading-[60px] sm:text-5xl md:text-6xl "
//           >
//             Your Dream <br />{" "}
//             <span className=" text-orange-400">Government Job</span> <br />
//             Starts here
//           </h1>

//           <h3
//             ref={paraRef}
//             className=" text text-lg capitalize font-bold text-gray-700 sm:text-xl md:text-2xl text-start "
//           >
//             सपना सरकारी नौकरी का... <br />
//             शुरुआत{" "}
//             <span className=" text-orange-500">
//               Vikash Coaching Institute
//             </span>{" "}
//             से।
//           </h3>

//           <div className="contact flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap  sm:items-center sm:justify-start sm:gap-4 lg:gap-5">
//             <div className=" text text-white px-3.5 bg-blue-500 py-2.5 rounded font-bold">
//               <span className=" flex gap-1.5">
//                 {" "}
//                 <GraduationCap /> 7 Days FREE Demo Class
//               </span>
//             </div>
//             <a
//               href="tel:+917484932591"
//               className="active:scale-95   transition-transform duration-150 text-white px-3.5 bg-orange-500 py-2.5 rounded font-bold capitalize"
//             >
//               <span className=" flex gap-2 items-center">
//                 {" "}
//                 <Phone size={21} /> Admission Enquiry{" "}
//               </span>
//             </a>
//             <a
//               href="https://wa.me/917484932591?text=Hello%20Sir,%20mujhe%20admission%20ke%20baare%20me%20jaankari%20chahiye."
//               target="_blank"
//               rel="noopener noreferrer"
//               className=" active:scale-95  transition-transform duration-150 text-white px-3.5 bg-green-500 py-2.5 rounded font-bold capitalize"
//             >
//               <span className=" flex items-center gap-2">
//                 {" "}
//                 <FaWhatsapp size={21} className="text-white" /> WhatsApp
//                 Now{" "}
//               </span>
//             </a>
//           </div>
//         </div>

//         {/* Right image */}
//         <div className="right flex w-full items-center justify-center overflow-hidden lg:w-1/2">
//           <img
//             ref={imgRef}
//             className="w-full max-w-md rounded-xl object-cover shadow-lg lg:max-w-full"
//             src="https://i.pinimg.com/1200x/ae/5c/59/ae5c59af4a9185373474c62686551bfb.jpg"
//             alt="Government job preparation illustration"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero;




import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { GraduationCap, Phone } from "lucide-react";
import gsap from "gsap";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
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
          <span className="text-orange-400">Government Job</span> <br className="hidden sm:block" />
          Starts here
        </h1>

        <h3
          ref={paraRef}
          className="text-balance text-center text-base font-bold capitalize text-gray-700 sm:text-lg md:text-xl lg:text-left"
        >
          सपना सरकारी नौकरी का... <br />
          शुरुआत{" "}
          <span className="text-orange-500">Vikash Coaching Institute</span>{" "}
          से।
        </h3>

        <div className="contact grid w-full grid-cols-1 gap-2.5 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-3 lg:justify-start">
          <div className="flex items-center justify-center gap-1.5 rounded bg-blue-500 px-3.5 py-2.5 text-sm font-bold text-white sm:text-base">
            <GraduationCap size={20} className="shrink-0" />
            <span>7 Days FREE Demo Class</span>
          </div>

          <a
            href="tel:+917484932591"
            className="flex items-center justify-center gap-2 rounded bg-orange-500 px-3.5 py-2.5 text-sm font-bold capitalize text-white transition-transform duration-150 active:scale-95 sm:text-base"
          >
            <Phone size={20} className="shrink-0" />
            <span>Admission Enquiry</span>
          </a>
            <a
          
            href="https://wa.me/917484932591?text=Hello%20Sir,%20mujhe%20admission%20ke%20baare%20me%20jaankari%20chahiye."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded bg-green-500 px-3.5 py-2.5 text-sm font-bold capitalize text-white transition-transform duration-150 active:scale-95 sm:text-base"
          >
            <FaWhatsapp size={20} className="shrink-0 text-white" />
            <span>WhatsApp Now</span>
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