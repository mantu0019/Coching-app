import React from 'react'
import { useParams } from 'react-router-dom'
import { courses } from '../config/courseData';

const CourseDetails = () => {
  const { slug } = useParams();

  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return (
      <div className="flex min-h-[60vh] w-full items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-700">Course Not Found</h1>
      </div>
    );
  }

  return (
    <div className="w-full px-4 py-10 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Hero card - image + title + overview */}
        <div
          className="mb-8 grid grid-cols-1 gap-6 overflow-hidden rounded-3xl border border-white/40 p-6 shadow-lg backdrop-blur-xl sm:p-8  md:items-center"
          style={{ background: "rgba(255, 255, 255, 0.25)" }}
        > 

<div className="flex flex-col items-center gap-3 text-center md:items-center md:text-left">
  <span className="rounded-full bg-blue-600/10 px-4 py-1 text-sm font-semibold text-blue-700">
    {course.shortTitle}
  </span>

  <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
    {course.title}
  </h1>

  <p className="text-sm font-medium text-gray-700 sm:text-base">
    {course.overview}
  </p>
</div>

          {/* <div className="flex flex-col gap-3 text-center md:text-left">
            <span className="mx-auto rounded-full bg-blue-600/10 px-4 py-1 text-sm font-semibold text-blue-700 md:block md:mx-0">
              {course.shortTitle}
              
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              {course.title}
            </h1>
            <p className="text-sm font-medium text-gray-700 sm:text-base">
              {course.overview}
            </p>
          </div> */}
        </div>

        {/* Quick info grid - duration, timing, fees, eligibility, language */}
        <div
          className="mb-8 grid grid-cols-2 gap-4 rounded-3xl border border-white/40 p-6 shadow-lg backdrop-blur-xl sm:grid-cols-3 sm:p-8 lg:grid-cols-5"
          style={{ background: "rgba(255, 255, 255, 0.25)" }}
        >
          {[
            { label: "Duration", value: course.duration },
            { label: "Batch Timing", value: course.batchTiming },
            { label: "Fees", value: course.fees },
            { label: "Eligibility", value: course.eligibility },
            { label: "Language", value: course.language },
          ].map((item, i) => (
             <div
              key={i}
              className="flex flex-col items-center gap-1 rounded-2xl border border-white/50 bg-white/60 px-3 py-4 text-center shadow-sm"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                {item.label}
              </span>
              <span className="text-sm font-bold text-slate-900 sm:text-base">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Faculty, Syllabus, Features - 3 column */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Faculty */}
          <div
            className="rounded-3xl border border-white/40 p-6 shadow-lg backdrop-blur-xl"
            style={{ background: "rgba(255, 255, 255, 0.25)" }}
          >
            <h3 className="mb-4 text-lg font-extrabold text-slate-900">
              Faculty
            </h3>
            <ul className="flex flex-col gap-3">
              {course.faculty.map((f, i) => (
                <li
                  key={i}
                  className="rounded-xl border border-white/50 bg-white/60 px-3 py-2.5 text-sm font-medium text-gray-800 shadow-sm"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Syllabus */}
          <div
            className="rounded-3xl border border-white/40 p-6 shadow-lg backdrop-blur-xl"
            style={{ background: "rgba(255, 255, 255, 0.25)" }}
          >
            <h3 className="mb-4 text-lg font-extrabold text-slate-900">
              Syllabus
            </h3>
            <ul className="flex flex-col gap-3">
              {course.syllabus.map((s, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 rounded-xl border border-white/50 bg-white/60 px-3 py-2.5 text-sm font-medium text-gray-800 shadow-sm"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-blue-600"></span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div
            className="rounded-3xl border border-white/40 p-6 shadow-lg backdrop-blur-xl"
            style={{ background: "rgba(255, 255, 255, 0.25)" }}
          >
            <h3 className="mb-4 text-lg font-extrabold text-slate-900">
              Features
            </h3>
            <ul className="flex flex-col gap-3">
              {course.features.map((f, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 rounded-xl border border-white/50 bg-white/60 px-3 py-2.5 text-sm font-medium text-gray-800 shadow-sm"
                >
                  <span className="text-green-600">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href={`https://wa.me/917484932591?text=Hello%20Sir,%20mujhe%20${encodeURIComponent(
              course.title
            )}%20course%20ke%20baare%20me%20jaankari%20chahiye.`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-500 px-8 py-3 text-sm font-bold text-white shadow-md transition-transform duration-200 hover:scale-105 sm:text-base"
          >
            Enroll via WhatsApp →
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;




 