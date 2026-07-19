import React from "react";
import {
  Target,
  Eye,
  BookOpen,
  Users,
  Award,
  Clock,
} from "lucide-react";

const About = () => {
  const stats = [
    { value: "8+", label: "Years of Experience" },
    { value: "1200+", label: "Students Selected" },
    { value: "15+", label: "Expert Faculty" },
    { value: "10+", label: "Courses Offered" },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      desc: "To provide affordable, high-quality coaching that helps every student from Bihar crack their dream government exam.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      desc: "To become the most trusted name in competitive exam preparation across Bihar and beyond.",
    },
  ];

  const whyUs = [
    {
      icon: BookOpen,
      title: "Structured Curriculum",
      desc: "Exam-wise structured courses designed by experts, updated with the latest patterns.",
    },
    {
      icon: Users,
      title: "Experienced Faculty",
      desc: "Learn from mentors who have years of experience training successful candidates.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      desc: "1200+ selections across SSC, Railway, Banking, Bihar Police, BPSC and more.",
    },
    {
      icon: Clock,
      title: "Flexible Batches",
      desc: "Morning, afternoon and evening batches to fit every student's schedule.",
    },
  ];

  return (
    <div className="w-full bg-white text-black">
      {/* Header */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 pt-16 pb-10 text-center">
        <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase border border-black/20 rounded-full px-4 py-1.5 mb-5">
          About Us
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          Building Government Officers, <br className="hidden sm:block" />
          One Batch at a Time
        </h1>
        <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
          Success Academy is Bihar Sharif's trusted coaching institute for SSC,
          Railway, Banking, Bihar Police, BPSC, UPSC, CTET, STET and other
          government competitive exams.
        </p>
      </section>

      {/* Story + Image */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold">Our Story</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Success Academy started with a simple goal — to make quality
              exam preparation accessible to every student in Nalanda and
              nearby districts, without the need to move to a big city.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Over the years, we've grown into a full-fledged institute
              offering structured courses, experienced mentorship, and a
              disciplined study environment — helping over a thousand
              students turn their government job dream into reality.
            </p>
          </div>
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
              alt="Success Academy classroom"
              className="w-full max-w-md rounded-2xl object-cover  shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-black/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-bold">{stat.value}</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col gap-4 border border-black/10 rounded-2xl p-7 transition-all duration-300 hover:border-black hover:shadow-lg hover:shadow-black/5"
            >
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t border-black/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 py-14">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold">Why Choose Us</h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-lg mx-auto">
              Everything you need to prepare with focus and confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col gap-3 border border-black/10 rounded-2xl p-6 text-center items-center transition-all duration-300 hover:border-black hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1"
              >
                <div className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center">
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <h3 className="text-base font-bold">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;