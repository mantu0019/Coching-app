import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "How can I take admission?",
    answer:
      "You can take admission by visiting our institute or contacting us through WhatsApp. Our team will guide you through the complete admission process.",
  },
  {
    question: "Which exams do you prepare for?",
    answer:
      "We prepare students for SSC, Railway, Banking, BPSC, UPSC, Police, and various other competitive examinations.",
  },
  {
    question: "Is online class available?",
    answer:
      "Yes. We provide both online and offline classes with recorded lectures and live doubt sessions.",
  },
  {
    question: "Do you provide study materials?",
    answer:
      "Yes. Students receive printed notes, PDFs, mock tests, previous year papers, and regular practice assignments.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 80%",
      },
    });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="uppercase tracking-[0.2em] text-orange-500 font-semibold text-sm">
            FAQ
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>

          <p className="mt-3 text-slate-500">
            Find quick answers to the most common questions.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="rounded-2xl border border-slate-200 bg-white/50  shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <h3 className="text-base sm:text-lg text-orange-500 font-semibold ">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`w-6 h-6 text-orange-500 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-500 ${
                  activeIndex === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;



