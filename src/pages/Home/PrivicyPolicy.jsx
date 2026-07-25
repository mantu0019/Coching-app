import React from "react";

const sections = [
  {
    title: "Information We Collect",
    content:
      "We may collect personal information such as your name, phone number, email address, course preferences, and any information you provide while filling out forms on our website.",
  },
  {
    title: "How We Use Your Information",
    content:
      "Your information is used to process admissions, respond to inquiries, provide course updates, improve our services, and communicate important announcements related to our institute.",
  },
  {
    title: "Cookies & Analytics",
    content:
      "Our website may use cookies and analytics tools to understand visitor behavior, improve user experience, and optimize website performance.",
  },
  {
    title: "Data Protection",
    content:
      "We take appropriate security measures to protect your personal information from unauthorized access, misuse, or disclosure. However, no online system can guarantee complete security.",
  },
  {
    title: "Information Sharing",
    content:
      "We do not sell, rent, or trade your personal information to third parties. Information may only be shared when required by law or with trusted service providers for operational purposes.",
  },
  {
    title: "Third-Party Links",
    content:
      "Our website may contain links to external websites such as YouTube, Google Maps, or social media platforms. We are not responsible for the privacy practices of those websites.",
  },
  {
    title: "Student Communication",
    content:
      "By submitting your contact information, you agree to receive important updates, admission notifications, promotional messages, and course-related communication via phone, email, SMS, or WhatsApp.",
  },
  {
    title: "Your Rights",
    content:
      "You may request access to, correction of, or deletion of your personal information by contacting our support team. We will respond to your request in accordance with applicable laws.",
  },
  {
    title: "Changes to this Privacy Policy",
    content:
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.",
  },
];

const PrivicyPolicy = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-5xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="uppercase tracking-[0.25em] text-orange-500 font-semibold text-sm">
            Legal Information
          </span>

          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
            Privacy <span className="text-orange-500">Policy</span>
          </h1>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Your privacy is important to us. This Privacy Policy explains how
            we collect, use, and protect your personal information when you use
            our website or enroll in our courses.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white/40 backdrop-blur-xl border border-white/40 shadow-lg p-6 md:p-8"
            >
              <h2 className="text-xl font-bold text-slate-900">
                {index + 1}. {section.title}
              </h2>

              <p className="mt-3 text-slate-600 leading-8">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Box */}
        <div className="mt-12 rounded-3xl bg-orange-500 text-white p-6 md:p-8 text-center shadow-xl">
          <h3 className="text-2xl font-bold">
            Questions About Your Privacy?
          </h3>

          <p className="mt-3 text-orange-100">
            If you have any questions regarding this Privacy Policy or your
            personal data, please contact our support team. We will be happy to
            assist you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivicyPolicy;