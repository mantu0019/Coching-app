import React from "react";
import { selectionData } from "../../config/selctionData";
import AllStudentTestimonials from "./AllStudentTestimonials";
 
const Results = () => {
  return (
    <>
    
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Our Proud <span className="text-orange-500">Results</span>
          </h2>
          <p className="text-slate-500 mt-2">
            Real students, real results
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {selectionData.map((student) => (
            <div
              key={student.id}
              className="rounded-3xl bg-white/30 backdrop-blur-xl border border-white/50 shadow-xl p-5 lg:p-6 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Top: photo + name */}
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-16 h-16 rounded-2xl object-cover"
                  />
                  {student.photoVerified && (
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-white flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                  )}
                </div>

                <div className="min-w-0">
                  <h3 className="font-bold text-slate-900 text-base truncate">
                    {student.name}
                  </h3>
                  <p className="text-slate-500 text-xs mt-0.5 truncate">
                    {student.exam} &middot; {student.year}
                  </p>
                </div>
              </div>

              {/* Rank */}
              <h4 className="mt-3 text-2xl lg:text-3xl font-bold text-orange-500">
                {student.rank}
              </h4>

              {/* Post + State tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs font-medium rounded-full bg-blue-50/70 backdrop-blur-sm border border-blue-200 text-blue-600 px-3 py-1 truncate max-w-full">
                  {student.post}
                </span>
                <span className="text-xs font-medium rounded-full bg-white/50 backdrop-blur-sm border border-white/60 text-slate-600 px-3 py-1">
                  {student.state}
                </span>
              </div>

              {/* Marks + Attempt */}
              <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
                <div className="rounded-xl bg-white/40 backdrop-blur-md border border-white/50 px-3 py-2">
                  <p className="text-slate-500 text-xs">Marks</p>
                  <p className="font-bold text-slate-900">{student.marks}</p>
                </div>
                <div className="rounded-xl bg-white/40 backdrop-blur-md border border-white/50 px-3 py-2">
                  <p className="text-slate-500 text-xs">Attempt</p>
                  <p className="font-bold text-slate-900">
                    {student.attempt === 1
                      ? "1st"
                      : student.attempt === 2
                      ? "2nd"
                      : student.attempt === 3
                      ? "3rd"
                      : `${student.attempt}th`}
                  </p>
                </div>
              </div>

              {/* Course */}
              <p className="text-slate-500 text-xs mt-4">Course</p>
              <p className="text-slate-900 text-sm font-semibold mt-0.5 truncate">
                {student.course}
              </p>

              {/* Testimonial */}
              <p className="text-slate-600 text-sm italic leading-relaxed mt-4 pt-4 border-t border-white/50 line-clamp-3">
                "{student.testimonial}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
     <AllStudentTestimonials/>
    </>
  );
};

export default Results;