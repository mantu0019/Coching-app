import React from "react";
import { Calendar, School, Users, Trophy } from "lucide-react";

const journeyData = [
  {
    year: "2015",
    title: "Institute Started",
    icon: <School size={28} />,
    color: "bg-orange-100 text-orange-600",
  },
  {
    year: "2017",
    title: "500+ Students",
    icon: <Users size={28} />,
    color: "bg-sky-100 text-sky-600",
  },
  {
    year: "2020",
    title: "1000+ Selections",
    icon: <Trophy size={28} />,
    color: "bg-green-100 text-green-600",
  },
  {
    year: "2025",
    title: "Top Coaching Institute",
    icon: <Calendar size={28} />,
    color: "bg-purple-100 text-purple-600",
  },
];

const Journey = () => {
  return (
    <section className="relative overflow-hidden px-6 py-16 sm:px-10 lg:px-20">
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

      {/* Blur */}
      <div className="absolute -top-10 -left-10 -z-10 h-64 w-64 rounded-full bg-orange-200/40 blur-[100px]" />
      <div className="absolute bottom-0 -right-10 -z-10 h-72 w-72 rounded-full bg-sky-200/40 blur-[110px]" />

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Institute Journey
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
            Our <span className="text-orange-600">Journey</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            Every milestone reflects our dedication towards quality education
            and student success.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Center Line */}
          <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 rounded-full bg-orange-200 lg:block"></div>

          <div className="space-y-12">
            {journeyData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center gap-6 lg:flex-row ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className="w-full lg:w-5/12">
                  <div className="rounded-3xl border border-white/70 bg-white/40 p-8 backdrop-blur-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}
                    >
                      {item.icon}
                    </div>

                    <h3 className="mt-6 text-3xl font-bold text-orange-600">
                      {item.year}
                    </h3>

                    <p className="mt-3 text-lg font-medium text-slate-700">
                      {item.title}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-10 hidden lg:flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 ring-8 ring-orange-100"></div>

                <div className="hidden lg:block lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;