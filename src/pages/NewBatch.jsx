import React from "react";
import { Clock, Calendar, Users, IndianRupee, ArrowRight, CheckCircle2 } from "lucide-react";

function NewBatch() {
  const batches = [
    {
      name: "SSC CGL / CHSL",
      mode: "Offline + Online",
      startDate: "1 August 2026",
      timing: "7:00 AM – 9:00 AM",
      seats: "40 Seats Left",
      duration: "6 Months",
      fee: "₹8,000",
      tag: "Filling Fast",
    },
    {
      name: "Railway (NTPC / Group D)",
      mode: "Offline",
      startDate: "5 August 2026",
      timing: "9:30 AM – 11:30 AM",
      seats: "25 Seats Left",
      duration: "5 Months",
      fee: "₹7,000",
      tag: "New",
    },
    {
      name: "Bihar Police Constable",
      mode: "Offline",
      startDate: "10 August 2026",
      timing: "12:00 PM – 2:00 PM",
      seats: "50 Seats Left",
      duration: "4 Months",
      fee: "₹6,000",
      tag: null,
    },
    {
      name: "Banking (IBPS / SBI)",
      mode: "Online + Offline",
      startDate: "12 August 2026",
      timing: "3:00 PM – 5:00 PM",
      seats: "35 Seats Left",
      duration: "6 Months",
      fee: "₹8,500",
      tag: "Popular",
    },
    {
      name: "BPSC",
      mode: "Offline",
      startDate: "15 August 2026",
      timing: "6:00 AM – 8:00 AM",
      seats: "20 Seats Left",
      duration: "8 Months",
      fee: "₹12,000",
      tag: null,
    },
    {
      name: "CTET / STET",
      mode: "Online + Offline",
      startDate: "18 August 2026",
      timing: "5:30 PM – 7:30 PM",
      seats: "30 Seats Left",
      duration: "3 Months",
      fee: "₹5,500",
      tag: "New",
    },
  ];

  const highlights = [
    "Daily practice sets & weekly full-length tests",
    "Experienced faculty with proven results",
    "Printed study material included",
    "Doubt-clearing sessions every week",
  ];

  return (
    <div className="w-full bg-white text-black">
      {/* Header */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 pt-16 pb-10 text-center">
        <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase border border-black/20 rounded-full px-4 py-1.5 mb-5">
          Admissions Open
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          New Batches Starting Soon
        </h1>
        <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
          Join Success Academy's upcoming batches for SSC, Railway, Banking,
          Bihar Police, BPSC, UPSC, CTET/STET and other government exams.
          Limited seats available.
        </p>
      </section>

      {/* Highlights strip */}
      <section className="border-y border-black/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" strokeWidth={2} />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Batch cards */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {batches.map((batch) => (
            <div
              key={batch.name}
              className="group relative flex flex-col gap-5 rounded-2xl border border-black/10 p-6 transition-all duration-300 hover:border-black hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1"
            >
              {batch.tag && (
                <span className="absolute top-6 right-6 text-[11px] font-semibold uppercase tracking-wide bg-black text-white px-2.5 py-1 rounded-full">
                  {batch.tag}
                </span>
              )}

              <div>
                <h3 className="text-lg font-bold pr-16">{batch.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{batch.mode}</p>
              </div>

              <div className="flex flex-col gap-2.5 text-sm text-gray-700">
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 shrink-0" strokeWidth={2} />
                  <span>Starts {batch.startDate}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 shrink-0" strokeWidth={2} />
                  <span>{batch.timing}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 shrink-0" strokeWidth={2} />
                  <span>{batch.seats}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 mt-auto border-t border-black/10">
                <div>
                  <p className="text-xs text-gray-500">{batch.duration} course</p>
                  <p className="text-xl font-bold flex items-center">
                    <IndianRupee className="w-4 h-4" strokeWidth={2.5} />
                    {batch.fee.replace("₹", "")}
                  </p>
                </div>
                <button className="flex items-center gap-1.5 bg-black text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-200 hover:gap-2.5 hover:bg-gray-900">
                  Enroll
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-black/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 py-14 flex flex-col items-center text-center gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Not sure which batch is right for you?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-md">
            Talk to our counsellors and get free guidance on choosing the
            right exam and batch timing.
          </p>
          <button className="mt-2 bg-black text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:bg-gray-900 hover:-translate-y-0.5">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

export default NewBatch;