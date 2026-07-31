 

// import React, { useEffect, useRef, useState } from "react";
// import {
//   Monitor,
//   Users,
//   ClipboardList,
//   UserRound,
//   FileEdit,
//   MessageSquare,
//   FileBarChart,
// } from "lucide-react";

// const features = [
//   { icon: Monitor, title: "Smart", subtitle: "Classroom", color: "bg-blue-800" },
//   { icon: Users, title: "Experienced", subtitle: "Faculty", color: "bg-amber-500" },
//   { icon: ClipboardList, title: "Regular", subtitle: "Test Series", color: "bg-blue-800" },
//   { icon: UserRound, title: "Personal", subtitle: "Mentorship", color: "bg-amber-500" },
//   { icon: FileEdit, title: "Updated", subtitle: "Study Material", color: "bg-blue-800" },
//   { icon: MessageSquare, title: "Doubt", subtitle: "Clearing Classes", color: "bg-amber-500" },
//   { icon: UserRound, title: "Interview", subtitle: "Interview Guidance", color: "bg-blue-800" },
//   { icon: Users , title: "Group Study", subtitle: "Collaborative Learning", color: "bg-blue-800" },
// ];

// // Card viewport me aate hi visible = true
// const useInView = (options = { threshold: 0.2 }) => {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         setInView(true);
//         observer.unobserve(el);
//       }
//     }, options);

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);

//   return [ref, inView];
// };

// const FeatureItem = ({ item, index, isLast }) => {
//   const Icon = item.icon;
//   const [ref, inView] = useInView();

//   return (
//     <div
//       ref={ref}
//       className={[
//         "relative flex flex-col items-center px-3 text-center transition-all duration-700 ease-out",
//         !isLast
//           ? "lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:h-16 lg:after:w-px lg:after:-translate-y-1/2 lg:after:bg-slate-300"
//           : "",
//       ].join(" ")}
//       style={{
//         opacity: inView ? 1 : 0,
//         transform: inView ? "translateY(0) scale(1)" : "translateY(50px) scale(0.85)",
//         transitionDelay: `${(index % 7) * 90}ms`,
//       }}
//     >
//       <div
//         className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full sm:h-[72px] sm:w-[72px] ${item.color} transition-transform duration-700 ease-out`}
//         style={{
//           transform: inView ? "rotate(0deg) scale(1)" : "rotate(-25deg) scale(0.6)",
//           transitionDelay: `${(index % 7) * 90 + 100}ms`,
//         }}
//       >
//         <Icon className="h-7 w-7 text-white sm:h-8 sm:w-8" strokeWidth={1.8} />
//       </div>

//       <h3 className="text-sm font-bold text-slate-900 sm:text-base">
//         {item.title}
//       </h3>
//       <p className="text-xs leading-5 text-slate-600 sm:text-sm">
//         {item.subtitle}
//       </p>
//     </div>
//   );
// };

// const WhyChooseUs = () => {
//   return (
//     <section className="w-full">
//       <div className="mx-auto max-w-7xl">
//         {/* Heading */}
//         <div className="px-6 pb-8 text-center">
//           <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
//             Why Choose{" "}
//             <span className="text-orange-500">Vikas Coaching Institute?</span>
//           </h2>
//         </div>

//         {/* Card */}
//         <div
//           style={{
//             background: "rgba(255, 255, 255, 0.25)",
//           }}
//           className="mx-auto max-w-6xl rounded-3xl bg-white/70 p-6 shadow-md ring-1 ring-black/5 backdrop-blur-sm sm:p-8"
//         >
//           <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-y-10 lg:grid-cols-7 lg:gap-y-0">
//             {features.map((item, index) => (
//               <FeatureItem
//                 key={index}
//                 item={item}
//                 index={index}
//                 isLast={index === features.length - 1}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;






import React, { useEffect, useRef, useState } from "react";
import {
  Monitor,
  Users,
  ClipboardList,
  UserRound,
  FileEdit,
  MessageSquare,
  FileBarChart,
} from "lucide-react";

const features = [
  { icon: Monitor, title: "Smart", subtitle: "Classroom", color: "bg-blue-800" },
  { icon: Users, title: "Experienced", subtitle: "Faculty", color: "bg-amber-500" },
  { icon: ClipboardList, title: "Regular", subtitle: "Test Series", color: "bg-blue-800" },
  { icon: UserRound, title: "Personal", subtitle: "Mentorship", color: "bg-amber-500" },
  { icon: FileEdit, title: "Updated", subtitle: "Study Material", color: "bg-blue-800" },
  { icon: MessageSquare, title: "Doubt", subtitle: "Clearing Classes", color: "bg-amber-500" },
  { icon: UserRound, title: "Interview", subtitle: "Interview Guidance", color: "bg-blue-800" },
  { icon: Users , title: "Group Study", subtitle: "Collaborative Learning", color: "bg-blue-800" },
];

// Card viewport me aate hi visible = true
const useInView = (options = { threshold: 0.2 }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(el);
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
};

const FeatureItem = ({ item, index, isLast }) => {
  const Icon = item.icon;
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={[
        "relative flex flex-col items-center px-2 text-center transition-all duration-700 ease-out",
        !isLast
          ? "lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:h-16 lg:after:w-px lg:after:-translate-y-1/2 lg:after:bg-slate-300"
          : "",
      ].join(" ")}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(50px) scale(0.85)",
        transitionDelay: `${(index % 8) * 90}ms`,
      }}
    >
      <div
        className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full sm:h-[72px] sm:w-[72px] ${item.color} transition-transform duration-700 ease-out`}
        style={{
          transform: inView ? "rotate(0deg) scale(1)" : "rotate(-25deg) scale(0.6)",
          transitionDelay: `${(index % 8) * 90 + 100}ms`,
        }}
      >
        <Icon className="h-7 w-7 text-white sm:h-8 sm:w-8" strokeWidth={1.8} />
      </div>

      <h3 className="text-sm font-bold text-slate-900 sm:text-base">
        {item.title}
      </h3>
      <p className="text-xs leading-5 text-slate-600 sm:text-sm">
        {item.subtitle}
      </p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="px-6 pb-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
            Why Choose{" "}
            <span className="text-orange-500">Vikas Coaching Institute?</span>
          </h2>
        </div>

        {/* Card */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.25)",
          }}
          className="mx-auto max-w-[92rem] rounded-3xl bg-white/70 p-6 shadow-md ring-1 ring-black/5 backdrop-blur-sm sm:p-8 lg:p-10"
        >
          <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-y-10 lg:grid-cols-8 lg:gap-x-3 lg:gap-y-0 xl:gap-x-6">
            {features.map((item, index) => (
              <FeatureItem
                key={index}
                item={item}
                index={index}
                isLast={index === features.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;