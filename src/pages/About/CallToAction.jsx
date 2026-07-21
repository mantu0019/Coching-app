import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
 
const CallToAction = () => {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-20">
      {/* Background */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background: `
            radial-gradient(circle at 15% 20%, rgba(255,180,120,0.20) 0%, transparent 40%),
            radial-gradient(circle at 85% 80%, rgba(147,197,253,0.20) 0%, transparent 40%),
            #ffffff
          `,
        }}
      />

      {/* Floating Blur */}
      <div className="absolute -top-12 -left-12 -z-10 h-64 w-64 rounded-full bg-orange-200/40 blur-[110px] animate-pulse" />
      <div className="absolute -bottom-10 -right-10 -z-10 h-72 w-72 rounded-full bg-sky-200/40 blur-[120px] animate-pulse" />

      <div className="mx-auto max-w-6xl">
        <div className="group rounded-[36px] border border-white/70 bg-white/40 p-10 text-center backdrop-blur-2xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(249,115,22,0.18)] md:p-14">
          {/* Badge */}
          <span className="inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
            🚀 Join Today
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Ready To Start Your
            <span className="block text-orange-600">Success Journey?</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Join thousands of successful students and prepare with Bihar's
            trusted coaching institute. Your dream government job starts here.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
             <a
              href="https://wa.me/919876543210?text=Hello%20Sir,%20I%20want%20to%20enroll%20in%20your%20coaching."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600"
            >
              Enroll Now
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <Link
              to="/contact"
              className="group/button inline-flex items-center gap-2 rounded-full border border-orange-300 bg-white/70 px-8 py-4 font-semibold text-orange-600 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-orange-50"
            >
              <Phone
                size={18}
                className="transition-transform duration-300 group-hover/button:rotate-12"
              />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
