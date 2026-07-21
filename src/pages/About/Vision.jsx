import React from "react";
import { Eye } from "lucide-react";

const Vision = () => {
  return (
    <section className="relative overflow-hidden px-6 py-16 sm:px-10 lg:px-20">
      {/* Background */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background: `
            radial-gradient(circle at 10% 20%, rgba(255,180,120,0.20) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(147,197,253,0.20) 0%, transparent 40%),
            #ffffff
          `,
        }}
      />

      {/* Floating Blur */}
      <div className="absolute -top-10 -left-10 -z-10 h-64 w-64 rounded-full bg-orange-200/40 blur-[100px]" />
      <div className="absolute bottom-0 -right-10 -z-10 h-72 w-72 rounded-full bg-sky-200/40 blur-[110px]" />

      <div className="mx-auto max-w-5xl">
        <div
          className="rounded-[32px] border border-white/60 bg-white/40 p-8 text-center backdrop-blur-2xl sm:p-12"
          style={{
            boxShadow: "0 20px 60px rgba(30,64,175,0.10)",
          }}
        >
          {/* Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
            <Eye size={30} />
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
            Our <span className="text-orange-600">Vision</span>
          </h2>

          {/* Quote */}
          <p className="mt-8 text-2xl font-semibold italic leading-relaxed text-slate-700 sm:text-3xl">
            “To become Bihar's most trusted competitive exam coaching
            institute.”
          </p>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            We envision creating a future where every student receives
            high-quality education, expert mentorship, and the confidence to
            achieve success in competitive examinations. Our goal is to become
            the first choice for aspirants across Bihar by consistently
            delivering outstanding results and building successful careers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;