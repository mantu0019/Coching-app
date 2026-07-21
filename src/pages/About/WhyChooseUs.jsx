 import React from "react";
import {
  GraduationCap,
  Users,
  BookOpenCheck,
  ClipboardCheck,
  MessageCircleQuestion,
  Briefcase,
} from "lucide-react";

const features = [
  {
    icon: <GraduationCap size={34} />,
    title: "Experienced Faculty",
    desc: "Learn from highly qualified and experienced teachers.",
  },
  {
    icon: <Users size={34} />,
    title: "Small Batch Size",
    desc: "Personal attention for every student in every class.",
  },
  {
    icon: <BookOpenCheck size={34} />,
    title: "Daily Practice",
    desc: "Regular practice questions to strengthen concepts.",
  },
  {
    icon: <ClipboardCheck size={34} />,
    title: "Weekly Tests",
    desc: "Performance evaluation through weekly mock tests.",
  },
  {
    icon: <MessageCircleQuestion size={34} />,
    title: "Doubt Sessions",
    desc: "Dedicated doubt-solving sessions with faculty.",
  },
  {
    icon: <Briefcase size={34} />,
    title: "Career Guidance",
    desc: "Complete mentorship until your final selection.",
  },
];

const WhyChooseUs = () => {
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

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
            Why Students <span className="text-orange-600">Trust Us</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-slate-600">
            We provide quality education, expert mentorship, and a disciplined
            learning environment to help every student achieve success.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-white/70 bg-white/40 p-8 backdrop-blur-2xl shadow-lg transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_25px_60px_rgba(249,115,22,0.18)]"
            >
              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-orange-500 group-hover:text-white">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-bold text-slate-900 transition-all duration-500 group-hover:text-orange-600">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-7 text-slate-600">
                {item.desc}
              </p>

              {/* Bottom Line Animation */}
              <div className="mt-6 h-1 w-12 rounded-full bg-orange-400 transition-all duration-500 group-hover:w-24"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;