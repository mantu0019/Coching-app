import React, { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

// Drop the director's photo in your public folder at this path,
// e.g. public/images/director.jpg
const DIRECTOR_IMAGE = "https://i.pinimg.com/1200x/01/c4/3b/01c43bbb39cf74d24c9190d4832a080c.jpg";
const DIRECTOR_NAME = "Er. Rahul Kumar";

// Falls back to a generated initials portrait if the photo is missing
const handleImgError = (e) => {
  e.currentTarget.onerror = null;
  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    DIRECTOR_NAME
  )}&background=e8f1fb&color=1d4ed8&bold=true&size=400`;
};

// Lightweight scroll-reveal hook — no external libraries
const useRevealOnScroll = (options = {}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

const DirectorMessage = () => {
  const [imageRef, imageVisible] = useRevealOnScroll();
  const [contentRef, contentVisible] = useRevealOnScroll();

  return (
    <section className="relative w-full  

   

     overflow-hidden px-6 py-2 sm:px-10 sm:py-28 lg:px-20 lg:py-10">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@1,600&display=swap');

        @keyframes floatSlow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(16px, -20px); }
        }
        @keyframes floatSlower {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-18px, 16px); }
        }
        @keyframes quoteFadeIn {
          from { opacity: 0; transform: translateY(-6px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .anim-float-a { animation: floatSlow 11s ease-in-out infinite; }
        .anim-float-b { animation: floatSlower 13s ease-in-out infinite; }

        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-quote {
          opacity: 0;
          animation: quoteFadeIn 0.6s ease-out 0.3s forwards;
        }
      `}</style>

      {/* Soft white + orange + light orange gradient backdrop */}
      <div
        className=" absolute inset-0 -z-20"
        style={{
          background: `
            radial-gradient(circle at 12% 15%, rgba(255,180,120,0.30) 0%, rgba(255,180,120,0) 45%),
            radial-gradient(circle at 88% 20%, rgba(147,197,253,0.35) 0%, rgba(147,197,253,0) 45%),
            radial-gradient(circle at 20% 85%, rgba(191,219,254,0.30) 0%, rgba(191,219,254,0) 50%),
            radial-gradient(circle at 85% 80%, rgba(253,186,116,0.25) 0%, rgba(253,186,116,0) 50%),
            #ffffff
          `,
        }}
      />

      {/* Decorative blurred gradient circles */}
      <div className="pointer-events-none absolute -top-10 -left-10 -z-10 h-64 w-64 rounded-full bg-orange-200/40 blur-[100px] anim-float-a" />
      <div className="pointer-events-none absolute bottom-0 -right-10 -z-10 h-72 w-72 rounded-full bg-sky-200/50 blur-[110px] anim-float-b" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Photo side */}
        <div
          ref={imageRef}
          className={`reveal ${imageVisible ? "is-visible" : ""} order-1 flex justify-center lg:order-none lg:justify-start`}
        >
          <div className="relative">
            {/* Floating accent shapes behind the photo */}
            <div className="absolute -top-6 -left-6 -z-10 h-full w-full rounded-[32px] bg-gradient-to-br from-orange-200/60 to-sky-200/60 blur-sm" />
            <div className="absolute -bottom-8 -right-8 -z-10 h-40 w-40 rounded-full bg-sky-300/30 blur-2xl anim-float-a" />

            <div
              className="group relative w-72 overflow-hidden rounded-[28px] border border-white/70 bg-white/40 p-2.5 backdrop-blur-2xl sm:w-80 lg:w-96"
              style={{ boxShadow: "0 24px 60px rgba(30,64,175,0.15)" }}
            >
              <img
                src={DIRECTOR_IMAGE}
                alt={DIRECTOR_NAME}
                onError={handleImgError}
                className="h-80 w-full rounded-[22px] object-cover transition-transform duration-500 ease-out group-hover:scale-105 sm:h-96"
              />
            </div>
          </div>
        </div>

        {/* Message side */}
        <div
          ref={contentRef}
          className={`reveal ${contentVisible ? "is-visible" : ""} rounded-[28px] border border-white/70 bg-white/40 p-8 text-center backdrop-blur-2xl sm:p-10 lg:text-left`}
          style={{ boxShadow: "0 20px 50px rgba(30,64,175,0.08)" }}
        >
          <div className="reveal-quote mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-600/10 text-orange-600">
            <Quote size={22} strokeWidth={2.2} fill="currentColor" />
          </div>

          <h2
            className="text-3xl font-bold leading-tight text-slate-800 sm:text-4xl"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Director&apos;s{" "}
            <span className="text-orange-600">Message</span>
          </h2>

          <div className="mx-auto mt-6 max-w-xl space-y-4 lg:mx-0" style={{ fontFamily: "Inter, sans-serif" }}>
            <p className="leading-relaxed text-slate-600">
              At Vikash coaching institute, we believe that every student has the
              potential to succeed. Our mission is to provide quality
              education, expert guidance, disciplined preparation, and
              continuous motivation so that every aspirant can achieve their
              dream government job.
            </p>
            <p className="leading-relaxed text-slate-600">
              We are committed to building confidence, knowledge, and success
              for every learner.
            </p>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6">
            <p
              className="text-2xl text-slate-800"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
            >
              — {DIRECTOR_NAME}
            </p>
            <p
              className="mt-1 text-sm font-medium uppercase tracking-[0.2em] text-orange-600"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Founder &amp; Director
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;