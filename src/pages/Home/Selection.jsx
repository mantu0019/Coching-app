 

import React from "react";
import { Link } from "react-router-dom";

const results = [
  {
    id: 1,
    name: "Rohit Kumar",
    exam: "SSC CGL 2023",
    rank: "AIR 45",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Anjali Kumari",
    exam: "BPSC 67th",
    rank: "Rank 78",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Vikash Ranjan",
    exam: "SSC CHSL 2023",
    rank: "AIR 159",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: 4,
    name: "Neha Singh",
    exam: "BIHAR SI 2023",
    rank: "Rank 23",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const SelectionSection = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center md:text-left">
              Our Proud <span className="text-orange-500">Selections</span>
            </h2>

            <p className="text-slate-500 mt-2 text-center md:text-left">
              Your Success, Our Pride
            </p>
          </div>

          <Link
            to={"/selection"}
            className="rounded-xl border border-blue-300 bg-white/70 backdrop-blur-xl px-6 py-3 font-semibold text-orange-500 transition hover:bg-orange-400 hover:text-white whitespace-nowrap"
          >
            View All Results →
          </Link>
        </div>

        {/* Glass Container */}
        <div className="rounded-[24px] sm:rounded-[35px] border border-white/50 bg-white/30 backdrop-blur-xl shadow-2xl p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {results.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl lg:rounded-3xl bg-white/70 backdrop-blur-md border border-white shadow-lg p-4 lg:p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex items-center gap-3 lg:gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl lg:rounded-2xl object-cover flex-shrink-0"
                  />

                  <div className="min-w-0">
                    <h3 className="font-bold text-slate-900 text-base lg:text-lg truncate">
                      {item.name}
                    </h3>

                    <p className="text-slate-500 text-xs lg:text-sm mt-1 truncate">
                      {item.exam}
                    </p>

                    <h4 className="text mt-2 lg:mt-3 text-xl sm:text-2xl lg:text-3xl font-bold text-orange-500 whitespace-nowrap">
                      {item.rank}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectionSection;