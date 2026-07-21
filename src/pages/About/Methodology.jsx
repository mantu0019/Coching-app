import React from "react";
import {
  UserPlus,
  GraduationCap,
  BookOpen,
  ClipboardCheck,
  BarChart3,
  MessageCircleQuestion,
  Trophy,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Admission",
    desc: "Easy admission process with proper counseling.",
    icon: <UserPlus size={26} />,
  },
  {
    id: 2,
    title: "Classroom Learning",
    desc: "Interactive classes by experienced faculty.",
    icon: <GraduationCap size={26} />,
  },
  {
    id: 3,
    title: "Daily Practice",
    desc: "Regular assignments and practice questions.",
    icon: <BookOpen size={26} />,
  },
  {
    id: 4,
    title: "Weekly Test",
    desc: "Weekly mock tests to evaluate progress.",
    icon: <ClipboardCheck size={26} />,
  },
  {
    id: 5,
    title: "Performance Analysis",
    desc: "Detailed analysis and personalized feedback.",
    icon: <BarChart3 size={26} />,
  },
  {
    id: 6,
    title: "Doubt Session",
    desc: "Dedicated sessions to clear every doubt.",
    icon: <MessageCircleQuestion size={26} />,
  },
  {
    id: 7,
    title: "Final Selection",
    desc: "Achieve success with confidence.",
    icon: <Trophy size={26} />,
  },
];

const Methodology = () => {
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

      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Teaching Methodology
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
            Our <span className="text-orange-600">Learning Process</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            We follow a structured learning process that helps every student
            prepare effectively and achieve success in competitive exams.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-14 flex flex-col items-center">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex w-full max-w-2xl items-center gap-6 rounded-3xl border border-white/70 bg-white/40 p-6 backdrop-blur-2xl shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                  {step.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    {step.desc}
                  </p>
                </div>
              </div>

              {index !== steps.length - 1 && (
                <div className="my-4 flex h-10 items-center justify-center">
                  <div className="text-3xl text-orange-500">↓</div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;