import React from "react";

const Heading = () => {
  return (
    <section className="w-full py-6 sm:py-16">
      <div className="max-w-7xl mx-auto px-5 text-center">
        <span className="inline-block text-orange-500 font-semibold uppercase tracking-[0.2em] text-sm sm:text-base">
          📞 Get In Touch
        </span>

        <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
          We're Here to Help You <br className="hidden sm:block" />
          <span className="text-orange-500">Achieve Your Dream Job</span>
        </h1>

        <p className="mt-5 max-w-2xl mx-auto text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
          Have questions about our courses, admissions, or career guidance?
          Our team is always ready to assist you and help you take the next
          step toward a successful future.
        </p>
      </div>
    </section>
  );
};

export default Heading;