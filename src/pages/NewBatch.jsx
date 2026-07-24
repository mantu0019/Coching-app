import React from "react";
import {
  Clock,
  Calendar,
  Users,
  IndianRupee,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

// Replace with the academy's real WhatsApp number (country code + number, no + or spaces)
const WHATSAPP_NUMBER = "917484932591";

const tagStyles = {
  "Filling Fast": "bg-orange-400/20 text-orange-700 border-orange-400/40",
  New: "bg-emerald-500/15 text-emerald-700 border-emerald-500/30",
  Popular: "bg-rose-400/20 text-rose-700 border-rose-400/40",
};

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

  const openWhatsApp = (text) => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const handleEnroll = (batch) => {
    openWhatsApp(
      `Hi, I want to enroll in the ${batch.name} batch (starting ${batch.startDate}). Please share more details.`
    );
  };

  const handleContact = () => {
    openWhatsApp(
      "Hi, I'm not sure which batch is right for me. Can I get some guidance?"
    );
  };

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden text-[#2b241d]"
      style={{
        background: `
          radial-gradient(circle at 15% 20%, rgba(255, 183, 155, 0.55) 0%, rgba(255, 183, 155, 0) 45%),
          radial-gradient(circle at 25% 60%, rgba(255, 140, 105, 0.35) 0%, rgba(255, 140, 105, 0) 40%),
          radial-gradient(circle at 80% 30%, rgba(168, 213, 186, 0.5) 0%, rgba(168, 213, 186, 0) 45%),
          radial-gradient(circle at 70% 75%, rgba(150, 200, 170, 0.45) 0%, rgba(150, 200, 170, 0) 50%),
          #faf6f1
        `,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(18px, -22px); }
        }
        @keyframes floatSlower {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-22px, 18px); }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.4); }
        }
        .anim-fade-up {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .anim-float-a { animation: floatSlow 11s ease-in-out infinite; }
        .anim-float-b { animation: floatSlower 13s ease-in-out infinite; }
        .anim-pulse-dot { animation: pulseDot 1.6s ease-in-out infinite; }
      `}</style>

      {/* Extra soft floating blobs, echoing the page background palette */}
      <div className="pointer-events-none absolute top-10 -right-16 -z-10 h-72 w-72 rounded-full bg-orange-200/40 blur-[100px] anim-float-a" />
      <div className="pointer-events-none absolute bottom-10 -left-16 -z-10 h-72 w-72 rounded-full bg-emerald-200/40 blur-[100px] anim-float-b" />

      {/* Header */}
      <section className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 pt-16 pb-10 text-center">
        <span
          className="anim-fade-up inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-full border border-white/60 bg-white/40 px-4 py-1.5 mb-5 backdrop-blur-xl text-[#5a4632]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Admissions Open
        </span>
        <h1
          className="anim-fade-up text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-[#2b241d]"
          style={{ fontFamily: "Sora, sans-serif", animationDelay: "80ms" }}
        >
          New Batches Starting <span className=" text-orange-500">Soon</span>
        </h1>
        <p
          className="anim-fade-up mt-4 text-sm sm:text-base text-[#6b5f50] max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif", animationDelay: "160ms" }}
        >
          Join Success Academy's upcoming batches for SSC, Railway, Banking,
          Bihar Police, BPSC, UPSC, CTET/STET and other government exams.
          Limited seats available.
        </p>
      </section>

      {/* Highlights strip */}
      <section className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20">
        <div
          className="anim-fade-up rounded-2xl border border-white/60 bg-white/35 backdrop-blur-xl px-6 sm:px-8 py-6"
          style={{
            animationDelay: "220ms",
            boxShadow: "0 8px 30px rgba(120,90,60,0.08)",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <CheckCircle2
                  className="w-4 h-4 mt-0.5 shrink-0 text-emerald-600"
                  strokeWidth={2}
                />
                <span
                  className="text-sm text-[#4a4034]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Batch cards */}
      <section className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {batches.map((batch, i) => (
            <div
              key={batch.name}
              className="anim-fade-up group relative flex flex-col gap-5 rounded-2xl border border-white/60 bg-white/35 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/90 hover:bg-white/55"
              style={{
                animationDelay: `${260 + i * 90}ms`,
                boxShadow: "0 8px 30px rgba(120,90,60,0.09)",
              }}
            >
              {/* top sheen */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-white/80 to-transparent" />

              {batch.tag && (
                <span
                  className={`absolute top-6 right-6 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border backdrop-blur-md ${
                    tagStyles[batch.tag] ||
                    "bg-white/40 text-[#5a4632] border-white/60"
                  }`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {batch.tag === "Filling Fast" && (
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500 anim-pulse-dot" />
                  )}
                  {batch.tag}
                </span>
              )}

              <div>
                <h3
                  className="text-lg font-bold pr-16 text-[#2b241d]"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  {batch.name}
                </h3>
                <p className="text-xs text-[#847766] mt-1">{batch.mode}</p>
              </div>

              <div
                className="flex flex-col gap-2.5 text-sm text-[#4a4034]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 shrink-0 text-orange-500" strokeWidth={2} />
                  <span>Starts {batch.startDate}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 shrink-0 text-orange-500" strokeWidth={2} />
                  <span>{batch.timing}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 shrink-0 text-orange-500" strokeWidth={2} />
                  <span>{batch.seats}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 mt-auto border-t border-[#e4d9c8]">
                <div>
                  <p className="text-xs text-[#847766]">{batch.duration} course</p>
                  <p className="text-xl font-bold flex items-center text-[#2b241d]">
                    <IndianRupee className="w-4 h-4" strokeWidth={2.5} />
                    {batch.fee.replace("₹", "")}
                  </p>
                </div>
                <button
                  onClick={() => handleEnroll(batch)}
                  className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/15 text-emerald-800 text-sm font-semibold px-4 py-2.5 backdrop-blur-md transition-all duration-200 hover:gap-2.5 hover:bg-emerald-500/25"
                >
                  <MessageCircle className="w-3.5 h-3.5" strokeWidth={2.5} />
                  Enroll
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative border-t border-white/60">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 py-14 flex flex-col items-center text-center gap-4">
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#2b241d]"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Not sure which batch is right for you?
          </h2>
          <p
            className="text-sm sm:text-base text-[#6b5f50] max-w-md"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Talk to our counsellors and get free guidance on choosing the
            right exam and batch timing.
          </p>
          <button
            onClick={handleContact}
            className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/40 text-[#2b241d] text-sm font-semibold px-6 py-3 backdrop-blur-xl transition-all duration-200 hover:bg-white/60 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" strokeWidth={2.5} />
            Contact Us on WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
}

export default NewBatch;