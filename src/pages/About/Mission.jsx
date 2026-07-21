import React from "react";
import { Target, BookOpen, Trophy } from "lucide-react";

const missions = [
  {
    id: 1,
    icon: <Target size={34} />,
    title: "Quality Education",
    desc: "Provide high-quality education with experienced faculty, updated study materials, and modern teaching methods.",
  },
  {
    id: 2,
    icon: <BookOpen size={34} />,
    title: "Affordable Learning",
    desc: "Ensure every student can access excellent coaching through affordable fees and equal learning opportunities.",
  },
  {
    id: 3,
    icon: <Trophy size={34} />,
    title: "Student Success",
    desc: "Guide every aspirant towards success through disciplined preparation, regular tests, and personal mentorship.",
  },
];

const Mission = () => {
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

      {/* Blur Effects */}
      <div className="absolute -top-10 -left-10 -z-10 h-64 w-64 rounded-full bg-orange-200/40 blur-[100px]" />
      <div className="absolute bottom-0 -right-10 -z-10 h-72 w-72 rounded-full bg-sky-200/40 blur-[110px]" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Our Mission
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
            Empowering Students Through
            <span className="text-orange-600"> Quality Education</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-slate-600">
            Our mission is to provide excellent education, affordable learning
            opportunities, and continuous guidance that helps every student
            achieve success in competitive examinations.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {missions.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl border border-white/70 bg-white/40 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;