import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { courses } from "../../config/courseData";
import CouresesOffered from "./CouresesOffered";

const Course = () => {
  return (
    <>
      <div className="w-full px-4 py-14 sm:px-8 lg:px-16">
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="mb-1 flex items-center gap-2 text-sm font-semibold text-orange-700 sm:text-base">
            <span>→</span> All Courses <span>←</span>
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
            Explore Our Courses
          </h1>
        </div>

        <div
          className="mx-auto grid max-w-7xl grid-cols-1 gap-6 rounded-3xl border border-white/40 p-6 shadow-lg backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-3"
          style={{ background: "rgba(255,255,255,.25)" }}
        >
          {courses.map((course) => (
            <div
              key={course.slug}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/50 bg-white/60 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={course.img}
                  alt={course.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <span className="mb-1 text-xs font-semibold text-orange-700">
                  {course.shortTitle}
                </span>
                <h3 className="text-lg font-extrabold text-slate-900">
                  {course.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                  {course.overview}
                </p>

                <div className="mt-4 flex items-center justify-between text-sm font-semibold text-slate-700">
                  <span>{course.duration}</span>
                  <span>{course.fees}</span>
                </div>

                <Link
                  to={`/courses/${course.slug}`}
                  className="mt-4 flex w-fit items-center gap-2 font-bold text-orange-700 transition hover:text-orange-900"
                >
                  View Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CouresesOffered />
    </>
  );
};

export default Course;
