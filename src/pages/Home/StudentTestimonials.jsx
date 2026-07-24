import React, { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";
import { testimonials } from "../../config/studentTestimonial";
 

const useInView = (options = { threshold: 0.15 }) => {
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

const TestimonialCard = ({ t, index }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className="relative flex flex-col rounded-3xl p-6 transition-all duration-700 ease-out hover:-translate-y-1"
      style={{
        background: "rgba(255, 255, 255, 0.25)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.4)",
        boxShadow: "0 8px 32px rgba(31, 38, 135, 0.12)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${(index % 3) * 120}ms`,
      }}
    >
      <Quote className="absolute top-4 right-5 h-8 w-8 text-orange-500" />

      <div className="flex items-center gap-4">
        <img
          src={t.image}
          alt={t.name}
          className="h-14 w-14 rounded-full object-cover ring-2 ring-white/60"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{t.name}</h3>
          <span className="inline-block mt-1 rounded-full bg-white/40 px-3 py-0.5 text-xs font-medium text-gray-700">
            {t.course}
          </span>
        </div>
      </div>

      <div className="mt-4 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < t.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-gray-700">{t.review}</p>
    </div>
  );
};

const StudentTestimonials = () => {
  return (
    <section className="relative z-10 w-full px-6 py-16 md:px-12">
      <div className="mx-auto max-w-6xl text-center mb-12">
        <h2 className="text-3xl text md:text-4xl font-bold text-gray-800">
          Our Students <span className=" text-orange-500">Speak</span>
        </h2>
        <p className="mt-3 text-gray-600">
          Real success stories from SSC, Banking, Railway, BPSC aur teaching
          exams ke students
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.slice(0, 3).map((t, index) => (
          <TestimonialCard key={t.id} t={t} index={index} />
        ))}
      </div>
    </section>
  );
};

export default StudentTestimonials;
