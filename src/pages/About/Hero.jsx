import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className=" relative w-full overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');

        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(18px, -22px); }
        }
        @keyframes floatSlower {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 18px); }
        }
        .anim-fade-up { opacity: 0; animation: fadeInUp 0.7s ease-out forwards; }
        .anim-float-a { animation: floatSlow 12s ease-in-out infinite; }
        .anim-float-b { animation: floatSlower 14s ease-in-out infinite; }
        .anim-gradient {
          background-size: 200% 200%;
          animation: gradientShift 12s ease-in-out infinite;
        }
      `}</style>

      
      { <div
        className=" anim-gradient absolute inset-0 -z-20"
        style={{
          backgroundImage: `linear-gradient(120deg,
            #faf6f1 0%,
            rgba(255,183,155,0.55) 20%,
            rgba(255,140,105,0.30) 40%,
            #faf6f1 55%,
            rgba(168,213,186,0.55) 75%,
            rgba(150,200,170,0.35) 90%,
            #faf6f1 100%)`,
        }}
      /> }

      

      {/* Ambient floating glows */}
      <div className="pointer-events-none absolute -top-16 -left-16 -z-10 h-72 w-72 rounded-full bg-orange-300/30 blur-[110px] anim-float-a" />
      <div className="pointer-events-none absolute bottom-0 -right-16 -z-10 h-80 w-80 rounded-full bg-emerald-300/30 blur-[110px] anim-float-b" />

      <div className="relative z-10 mx-auto flex  w-full max-w-[1440px] flex-col-reverse items-center gap-10 px-6 py-2 sm:px-10 lg:flex-row lg:justify-between lg:gap-12 lg:px-20">
        {/* Text side */}
        <div className="w-full lg:w-1/2">
        
          <div
           
            className=" anim-fade-up rounded-3xl border border-white/60 bg-white/35 p-8 backdrop-blur-2xl sm:p-10"
            style={{ boxShadow: "0 20px 60px rgba(120,90,60,0.12)" }}
          >
            
            <span
              className="anim-fade-up inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#5a4632] backdrop-blur-xl"
              style={{
                fontFamily: "Inter, sans-serif",
                animationDelay: "80ms",
              }}
            >
              <Sparkles size={13} className="text-orange-500" />
              Vikash Coaching Institute
            </span>

            <h1
              className="anim-fade-up mt-5 text-4xl font-bold leading-[1.15] text-[#2b241d] sm:text-5xl"
              style={{
                fontFamily: "Sora, sans-serif",
                animationDelay: "160ms",
              }}
            >
              Building Careers,
              <br />
              Creating Success Stories
            </h1>

            <p
              className="anim-fade-up mt-5 text-base text-[#6b5f50] sm:text-lg"
              style={{
                fontFamily: "Inter, sans-serif",
                animationDelay: "240ms",
              }}
            >
              15+ Years of Excellence in Competitive Exam Coaching
            </p>

            <Link
              to="/courses"
              className="anim-fade-up group mt-8 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/15 px-6 py-3 text-sm font-semibold text-orange-800 backdrop-blur-md transition-all duration-200 hover:gap-3 hover:bg-orange-500/25"
              style={{
                fontFamily: "Inter, sans-serif",
                animationDelay: "320ms",
              }}
            >
              Explore Courses
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Image side */}
        <div
          className="anim-fade-up w-full lg:w-1/2"
          style={{ animationDelay: "180ms" }}
        >
          <div
            className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-white/60 bg-white/25 p-2 backdrop-blur-2xl sm:max-w-lg lg:max-w-none"
            style={{ boxShadow: "0 20px 60px rgba(120,90,60,0.15)" }}
          >
            <img
              src="https://i.pinimg.com/1200x/50/76/96/50769657aef503239b96434c1d24e77b.jpg"
              alt="Students celebrating their success"
              className="h-[280px] w-full rounded-2xl object-cover sm:h-[360px] lg:h-[440px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
