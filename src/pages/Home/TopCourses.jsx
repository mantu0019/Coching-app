 


import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Train,
  Landmark,
  TreePine,
  GraduationCap,
} from "lucide-react";

const courses = [
  {
    title: "SSC CGL",
    slug: "ssc-cgl",
    desc: "Staff Selection Commission",
    icon: Shield,
    iconBg: "bg-red-700",
  },
  {
    title: "SSC CHSL",
    slug: "ssc-chsl",
    desc: "Staff Selection Commission",
    icon: Shield,
    iconBg: "bg-green-700",
  },
  {
    title: "Railway",
    slug: "railway",
    desc: "Railway Examinations",
    icon: Train,
    iconBg: "bg-red-600",
  },
  {
    title: "Banking",
    slug: "banking",
    desc: "Banking Examinations",
    icon: Landmark,
    iconBg: "bg-blue-700",
  },
  {
    title: "BPSC",
    slug: "bpsc",
    desc: "Bihar Public Service Commission",
    icon: TreePine,
    iconBg: "bg-purple-700",
  },
  {
    title: "Bihar SI",
    slug: "bihar-si",
    desc: "Bihar Sub-Inspector Examination",
    icon: Shield,
    iconBg: "bg-slate-800",
  },
  {
    title: "CTET / TRE",
    slug: "ctet-tre",
    desc: "Teaching Examinations",
    icon: GraduationCap,
    iconBg: "bg-teal-600",
  },
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

const CourseCard = ({ course, index }) => {
  const Icon = course.icon;
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-3 rounded-2xl border border-white/50 bg-white/60 px-4 py-6 text-center shadow-sm transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-xl"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(50px) scale(0.9)",
        transitionDelay: `${(index % 7) * 90}ms`,
      }}
    >
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-full ${course.iconBg} transition-transform duration-700 ease-out`}
        style={{
          transform: inView ? "rotate(0deg) scale(1)" : "rotate(-20deg) scale(0.6)",
          transitionDelay: `${(index % 7) * 90 + 100}ms`,
        }}
      >
        <Icon className="h-8 w-8 text-white" strokeWidth={1.8} />
      </div>

      <h3 className="text-lg font-extrabold text-slate-900">{course.title}</h3>

      <p className="text-sm text-gray-600">{course.desc}</p>

      <Link
        to={`/courses/${course.slug}`}
        className="mt-2 font-bold text-blue-700 transition hover:text-blue-900"
      >
        Explore →
      </Link>
    </div>
  );
};

const TopCourses = () => {
  return (
    <section className="w-full px-4 py-5 sm:px-8 lg:px-16">
      {/* Heading */}
      <div className="mb-10 flex flex-col items-center text-center">
        <span className="mb-1 flex items-center gap-2 text-sm font-semibold text-blue-700 sm:text-base">
          <span>→</span> Popular Courses <span>←</span>
        </span>

        <h2 className="text text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
          Our Top <span className=" text-orange-500">Courses</span>
        </h2>
      </div>

      {/* Cards */}
      <div
        className="mx-auto grid max-w-7xl grid-cols-1 gap-5 rounded-3xl border border-white/40 p-5 shadow-lg backdrop-blur-xl sm:grid-cols-2 sm:p-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7"
        style={{
          background: "rgba(255,255,255,.25)",
        }}
      >
        {courses.map((course, index) => (
          <CourseCard key={course.slug} course={course} index={index} />
        ))}
      </div>
    </section>
  );
};

export default TopCourses;