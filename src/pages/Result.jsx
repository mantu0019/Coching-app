  


import React, { useState } from "react";
import { Trophy, Award } from "lucide-react";

const Result = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "SSC", "Railway", "Banking", "Bihar Police", "BPSC"];

  const stats = [
    { value: "1200+", label: "Selections" },
    { value: "50+", label: "Top Rankers" },
    { value: "8", label: "Years of Excellence" },
    { value: "95%", label: "Success Rate" },
  ];

  const achievers = [
    {
      name: "Rahul Kumar",
      exam: "SSC",
      rank: "AIR 42",
      post: "SSC CGL — Income Tax Inspector",
      photo:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Priya Sharma",
      exam: "Railway",
      rank: "AIR 118",
      post: "RRB NTPC — Station Master",
      photo:
        "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Amit Verma",
      exam: "Bihar Police",
      rank: "AIR 27",
      post: "Bihar Police — Sub Inspector",
      photo:
        "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Neha Singh",
      exam: "Banking",
      rank: "AIR 65",
      post: "IBPS PO — Probationary Officer",
      photo:
        "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Suresh Yadav",
      exam: "BPSC",
      rank: "AIR 9",
      post: "BPSC — Block Development Officer",
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Anjali Kumari",
      exam: "SSC",
      rank: "AIR 88",
      post: "SSC CHSL — Data Entry Operator",
      photo:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
    },
  ];

  const filteredAchievers =
    activeFilter === "All"
      ? achievers
      : achievers.filter((a) => a.exam === activeFilter);

  return (
    <div className="w-full bg-white text-black">
      {/* Header */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 pt-16 pb-10 text-center">
        <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase border border-black/20 rounded-full px-4 py-1.5 mb-5">
          Our Achievers
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          Results That Speak for Themselves
        </h1>
        <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
          Meet the students who turned their preparation at Success Academy
          into government job selections.
        </p>
      </section>

      {/* Stats strip */}
      <section className="border-y border-black/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-bold">{stat.value}</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 pt-10">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-sm font-medium px-5 py-2 rounded-full border transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-black/20 hover:border-black"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Achievers grid */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievers.map((achiever) => (
            <div
              key={achiever.name}
              className="group flex flex-col items-center text-center gap-4 border border-black/10 rounded-2xl p-6 transition-all duration-300 hover:border-black hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={achiever.photo}
                  alt={achiever.name}
                  className="w-28 h-28 rounded-full object-cover object-center border-4 border-black/10"
                />
                <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-black flex items-center justify-center border-2 border-white">
                  <Trophy className="w-4 h-4 text-white" strokeWidth={2} />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold">{achiever.name}</h3>
                <p className="text-sm text-gray-600 mt-0.5">{achiever.post}</p>
              </div>

              <div className="flex items-center gap-1.5 bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                <Award className="w-3.5 h-3.5" strokeWidth={2} />
                {achiever.rank} — {achiever.exam}
              </div>
            </div>
          ))}
        </div>

        {filteredAchievers.length === 0 && (
          <p className="text-center text-sm text-gray-500 py-12">
            No results found for this category yet.
          </p>
        )}
      </section>
    </div>
  );
};

export default Result;