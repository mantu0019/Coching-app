import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BriefcaseBusiness,
  BookOpen,
  Award,
  ArrowRight,
} from "lucide-react";

const faculty = [
  {
    id: 1,
    name: "Er. Rahul Kumar",
    designation: "Senior Mathematics Faculty",
    qualification: "M.Tech (NIT Patna)",
    experience: "12+ Years",
    subject: "Mathematics",
    achievement: "5000+ Students Trained",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Amit Singh",
    designation: "Reasoning Faculty",
    qualification: "M.Sc Mathematics",
    experience: "10+ Years",
    subject: "Reasoning",
    achievement: "4000+ Selections",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 3,
    name: "Neha Sharma",
    designation: "English Faculty",
    qualification: "M.A English",
    experience: "8+ Years",
    subject: "English",
    achievement: "3000+ Students",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const Faculty = () => {
  return (
    <section className="relative w-full overflow-hidden  px-6 py-24 sm:px-10 lg:px-20">
      <div
        className="pointer-events-none absolute -top-24 -left-24 -z-10 h-96 w-96 rounded-full bg-orange-300/25 blur-[120px]"
      />
      <div
        className="pointer-events-none absolute bottom-0 -right-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-sky-300/25 blur-[130px]"
      />
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-200/15 blur-[110px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
            👨‍🏫 Our Faculty
          </span>

          <h2 className="mt-5 text text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Meet Our Expert  <span className=" text-orange-500">Faculty</span> 
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            Learn from highly qualified and experienced educators who have
            helped thousands of students achieve success in competitive
            examinations.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {faculty.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
              className="group relative rounded-[30px] border border-white/60 bg-white/40 p-8 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-2"
                    />
                  </div>

                  <span className="absolute -bottom-1 right-0 inline-flex items-center gap-1 rounded-full border border-orange-200 bg-white px-2.5 py-1 text-[10px] font-bold text-orange-600 shadow-md">
                    ⭐ Expert
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-orange-600">
                  {member.designation}
                </p>

                <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                <div className="w-full space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 transition-transform duration-500 group-hover:scale-110">
                      <GraduationCap size={18} strokeWidth={2.2} />
                    </span>
                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-slate-400">
                        Qualification
                      </p>
                      <p className="text-sm font-semibold text-slate-700">
                        {member.qualification}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 transition-transform duration-500 group-hover:scale-110">
                      <BriefcaseBusiness size={18} strokeWidth={2.2} />
                    </span>
                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-slate-400">
                        Experience
                      </p>
                      <p className="text-sm font-semibold text-slate-700">
                        {member.experience}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 transition-transform duration-500 group-hover:scale-110">
                      <BookOpen size={18} strokeWidth={2.2} />
                    </span>
                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-slate-400">
                        Subject Expertise
                      </p>
                      <p className="text-sm font-semibold text-slate-700">
                        {member.subject}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 transition-transform duration-500 group-hover:scale-110">
                      <Award size={18} strokeWidth={2.2} />
                    </span>
                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-slate-400">
                        Achievement
                      </p>
                      <p className="text-sm font-semibold text-slate-700">
                        {member.achievement}
                      </p>
                    </div>
                  </div>
                </div>

               
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;




