 

import React from "react";
import { topPerformer } from "../../config/topPerformer";

const attemptLabel = (n) => {
  if (n === 1) return "1st";
  if (n === 2) return "2nd";
  if (n === 3) return "3rd";
  return `${n}th`;
};

const PerformerCard = ({ data }) => {
  const {
    name,
    image,
    category,
    year,
    rank,
    marks,
    post,
    state,
    course,
    attempt,
    testimonial,
    photoVerified,
  } = data;

  return (
    <div
      className="shrink-0 w-[85vw] xs:w-[300px] sm:w-[320px] mx-2 sm:mx-3
                 rounded-[24px] sm:rounded-[28px]
               border-white/50 shadow-xl
                 p-5 sm:p-6"
    >
      
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="relative shrink-0">
          <img
            src={image}
            alt={name}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
          />
          {photoVerified && (
            <span
              title="Verified"
              className="absolute -bottom-0.5 -right-0.5 flex items-center justify-center
                         w-5 h-5 sm:w-5 sm:h-5 rounded-full bg-[#2fa84f] border-2 border-[#f3e3d1]"
            >
              <svg viewBox="0 0 24 24" width="10" height="10" fill="none">
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          )}
        </div>

        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-[#1f2a1c] truncate">
            {name}
          </h3>
          <p className="text-xs sm:text-sm text-[#7a7166]">
            {category} &middot; {year}
          </p>
        </div>
      </div>

      {/* rank */}
      <p className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-extrabold text-[#e2711d] leading-none">
        Rank {rank}
      </p>

      {/* tags */}
      <div className="mt-3 flex flex-wrap gap-2">
        <span className="text-xs sm:text-sm font-medium text-[#2f5ec4] bg-[#dce6fb] rounded-full px-3 py-1">
          {post}
        </span>
        <span className="text-xs sm:text-sm font-medium text-[#4a463f] bg-white/70 rounded-full px-3 py-1">
          {state}
        </span>
      </div>

      {/* stats */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-[#f9f1e7] px-4 py-3">
          <p className="text-xs sm:text-sm text-[#8a8175]">Marks</p>
          <p className="text-base sm:text-lg font-bold text-[#1f2a1c]">{marks}</p>
        </div>
        <div className="rounded-2xl bg-[#f9f1e7] px-4 py-3">
          <p className="text-xs sm:text-sm text-[#8a8175]">Attempt</p>
          <p className="text-base sm:text-lg font-bold text-[#1f2a1c]">
            {attemptLabel(attempt)}
          </p>
        </div>
      </div>

      {/* course */}
      <div className="mt-4">
        <p className="text-xs sm:text-sm text-[#8a8175]">Course</p>
        <p className="text-sm sm:text-base font-semibold text-[#1f2a1c]">{course}</p>
      </div>

      {testimonial && (
        <>
          <div className="mt-4 border-t border-[#e3d3bd]" />
          <p className="mt-3 text-xs sm:text-sm italic text-[#5c584f] leading-relaxed">
            &ldquo;{testimonial}&rdquo;
          </p>
        </>
      )}
    </div>
  );
};

const TopPerformer = () => {
  // duplicate the array once so the marquee loop is seamless (no visible jump)
  const track = [...topPerformer, ...topPerformer];

  return (
    <section className="relative py-2    sm:py-14 overflow-hidden  ">
    <div className="mb-8 sm:mb-10 px-4 sm:text-5xl md:px-40  text-center md:text-left">

  <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#2f3d2a] ">
    Our Star <span className="text-orange-500">Performers</span>
  </h2>
  <span className="text-[15px]  sm:text-[11px] uppercase tracking-[0.2em] text-[#7a8a6f] font-semibold">
    Top Performer
  </span>
</div>
      {/* fade edges so cards don't cut off abruptly */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 z-10 bg-gradient-to-r from-[#faf6f1] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 z-10 bg-gradient-to-l from-[#faf6f1] to-transparent" /> */}

      <div className="marquee-row ">
        <div className="marquee-track py-10">
          {track.map((p, i) => (
            <PerformerCard key={`${p.id}-${i}`} data={p} />
          ))}
        </div>
      </div>

      <style>{`
        .marquee-row {
          overflow: hidden;
          width: 100%;
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 40s linear infinite;
        }
        .marquee-row:hover .marquee-track {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (max-width: 640px) {
          .marquee-track {
            animation-duration: 25s;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
            overflow-x: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default TopPerformer;