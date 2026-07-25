import React from "react";

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing and using our website, you agree to comply with these Terms & Conditions. If you do not agree with any part of these terms, please do not use our services.",
  },
  {
    title: "Admissions & Enrollment",
    content:
      "Admission to our coaching institute is subject to eligibility, seat availability, and successful completion of the registration process. The institute reserves the right to accept or reject any application.",
  },
  {
    title: "Fees & Payments",
    content:
      "All course fees must be paid on time. Fees once paid are generally non-refundable unless otherwise stated by the institute. Late payments may result in suspension of services.",
  },
  {
    title: "Student Responsibilities",
    content:
      "Students are expected to maintain discipline, attend classes regularly, and follow the institute's code of conduct. Misconduct may result in suspension or cancellation of admission.",
  },
  {
    title: "Study Materials",
    content:
      "All study materials provided by the institute are for personal educational use only. Copying, sharing, or distributing materials without permission is strictly prohibited.",
  },
  {
    title: "Online Classes",
    content:
      "Online classes are intended solely for registered students. Sharing login credentials or recorded sessions with others is not permitted.",
  },
  {
    title: "Intellectual Property",
    content:
      "All website content, logos, graphics, videos, notes, and educational resources are the intellectual property of the institute and may not be reproduced without written consent.",
  },
  {
    title: "Limitation of Liability",
    content:
      "While we strive to provide accurate educational content, the institute does not guarantee examination success. Individual performance depends on personal effort and preparation.",
  },
  {
    title: "Privacy",
    content:
      "Your personal information is collected and handled in accordance with our Privacy Policy. We do not sell or misuse your personal data.",
  },
  {
    title: "Changes to Terms",
    content:
      "The institute reserves the right to modify these Terms & Conditions at any time. Continued use of the website constitutes acceptance of the updated terms.",
  },
];

const TermandCondition = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-5xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="uppercase tracking-[0.25em] text-orange-500 font-semibold text-sm">
            Legal Information
          </span>

          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
            Terms & <span className="text-orange-500">Conditions</span>
          </h1>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Please read these Terms & Conditions carefully before using our
            website or enrolling in any of our courses.
          </p>
        </div>

        {/* Content */}
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

        {/* Footer Note */}
        <div className="mt-12 rounded-3xl bg-orange-500 text-white p-6 text-center shadow-xl">
          <h3 className="text-2xl font-bold">Need Help?</h3>

          <p className="mt-2 text-orange-100">
            If you have any questions regarding these Terms & Conditions,
            please contact our support team before enrolling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermandCondition;