 

import React, { useEffect, useRef, useState } from "react";
import { Users, Trophy, User, Award,BookOpen } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 30000,
    suffix: "+",
    label: "Students Trained",
    bg: "bg-blue-800",
  },
  {
    icon: Trophy,
    value: 1300,
    suffix: "+",
    label: "Selections",
    bg: "bg-yellow-500",
  },
  {
    icon: BookOpen,
    value: 100,
    suffix: "%",
    label: "Study Material",
    bg: "bg-blue-800",
  },
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Years of Excellence",
    bg: "bg-yellow-500",
  },
];

// Card viewport me aate hi visible = true
const useInView = (options = { threshold: 0.3 }) => {
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

// inView hote hi 0 se target tak count-up karega
const useCountUp = (target, inView, duration = 1500) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return count;
};

const StatItem = ({ stat, index, inView }) => {
  const Icon = stat.icon;
  const count = useCountUp(stat.value, inView);

  return (
    <div
      className="flex flex-col items-center text-center lg:flex-row lg:justify-center lg:text-left lg:px-8 transition-all duration-700 ease-out"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-full shadow-md ${stat.bg} transition-transform duration-700 ease-out`}
        style={{
          transform: inView ? "scale(1)" : "scale(0.6)",
          transitionDelay: `${index * 120 + 100}ms`,
        }}
      >
        <Icon className="h-8 w-8 text-white" strokeWidth={2} />
      </div>

      <div className="mt-3 lg:mt-0 lg:ml-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          {count.toLocaleString()}
          {stat.suffix}
        </h2>

        <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-tight">
          {stat.label}
        </p>
      </div>
    </div>
  );
};

const StatsBar = () => {
  const [ref, inView] = useInView();

  return (
    <section className="mt-12 px-4">
      <div
        ref={ref}
        className="mx-auto w-full max-w-7xl rounded-3xl border border-white/40 bg-white/20 backdrop-blur-xl shadow-xl p-6 sm:p-8 lg:p-10"
      >
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-gray-300/40">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;