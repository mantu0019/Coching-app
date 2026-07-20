import { Link } from "react-router-dom";
import {
  Shield,
  Train,
  Landmark,
  TreePine,
  GraduationCap,
} from "lucide-react";

const courses = [
  {
    title: "SSC CGL",
    slug: "ssc-cgl",
    desc: "Staff Selection Commission",
    icon: Shield,
    iconBg: "bg-red-700",
  },
  {
    title: "SSC CHSL",
    slug: "ssc-chsl",
    desc: "Staff Selection Commission",
    icon: Shield,
    iconBg: "bg-green-700",
  },
  {
    title: "Railway",
    slug: "railway",
    desc: "Railway Examinations",
    icon: Train,
    iconBg: "bg-red-600",
  },
  {
    title: "Banking",
    slug: "banking",
    desc: "Banking Examinations",
    icon: Landmark,
    iconBg: "bg-blue-700",
  },
  {
    title: "BPSC",
    slug: "bpsc",
    desc: "Bihar Public Service Commission",
    icon: TreePine,
    iconBg: "bg-purple-700",
  },
  {
    title: "Bihar SI",
    slug: "bihar-si",
    desc: "Bihar Sub-Inspector Examination",
    icon: Shield,
    iconBg: "bg-slate-800",
  },
  {
    title: "CTET / TRE",
    slug: "ctet-tre",
    desc: "Teaching Examinations",
    icon: GraduationCap,
    iconBg: "bg-teal-600",
  },
];

const TopCourses = () => {
  return (
    <section className="w-full px-4 py-14 sm:px-8 lg:px-16">
      {/* Heading */}
      <div className="mb-10 flex flex-col items-center text-center">
        <span className="mb-1 flex items-center gap-2 text-sm font-semibold text-blue-700 sm:text-base">
          <span>→</span> Popular Courses <span>←</span>
        </span>

        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
          Our Top Courses
        </h2>
      </div>

      {/* Cards */}
      <div
        className="mx-auto grid max-w-7xl grid-cols-1 gap-5 rounded-3xl border border-white/40 p-5 shadow-lg backdrop-blur-xl sm:grid-cols-2 sm:p-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7"
        style={{
          background: "rgba(255,255,255,.25)",
        }}
      >
        {courses.map((course) => {
          const Icon = course.icon;

          return (
            <div
              key={course.slug}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/50 bg-white/60 px-4 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-full ${course.iconBg}`}
              >
                <Icon
                  className="h-8 w-8 text-white"
                  strokeWidth={1.8}
                />
              </div>

              <h3 className="text-lg font-extrabold text-slate-900">
                {course.title}
              </h3>

              <p className="text-sm text-gray-600">
                {course.desc}
              </p>

              <Link
                to={`/courses/${course.slug}`}
                className="mt-2 font-bold text-blue-700 transition hover:text-blue-900"
              >
                Explore →
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopCourses;