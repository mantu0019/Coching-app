import React from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactDetails = [
    {
      icon: MapPin,
      label: "Address",
      value: "Bihar Sharif, Nalanda, Bihar",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@successacademy.com",
      href: "mailto:info@successacademy.com",
    },
    {
      icon: Clock,
      label: "Working Hours",
      value: "Mon – Sat | 8:00 AM – 7:00 PM",
    },
  ];

  return (
    <div className="w-full bg-white text-black">
      {/* Header */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 pt-16 pb-10 text-center">
        <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase border border-black/20 rounded-full px-4 py-1.5 mb-5">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          Contact Success Academy
        </h1>
        <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
          Have questions about admissions, batches, or fees? Reach out to us
          — we're here to help you start your government job preparation.
        </p>
      </section>

      {/* Form + Info */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Contact form */}
          <div className="lg:col-span-3 border border-black/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-6">Send us a message</h2>
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="border border-black/15 rounded-lg px-4 py-2.5 text-sm outline-none transition-colors duration-200 focus:border-black placeholder:text-gray-400"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="border border-black/15 rounded-lg px-4 py-2.5 text-sm outline-none transition-colors duration-200 focus:border-black placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border border-black/15 rounded-lg px-4 py-2.5 text-sm outline-none transition-colors duration-200 focus:border-black placeholder:text-gray-400"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">
                  Interested In
                </label>
                <select className="border border-black/15 rounded-lg px-4 py-2.5 text-sm outline-none transition-colors duration-200 focus:border-black text-gray-700">
                  <option>SSC</option>
                  <option>Railway</option>
                  <option>Bihar Police</option>
                  <option>Banking</option>
                  <option>BPSC</option>
                  <option>UPSC</option>
                  <option>CTET / STET</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your message..."
                  className="border border-black/15 rounded-lg px-4 py-2.5 text-sm outline-none transition-colors duration-200 focus:border-black placeholder:text-gray-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="self-start flex items-center gap-2 bg-black text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:gap-3 hover:bg-gray-900"
              >
                Send Message
                <Send className="w-3.5 h-3.5" strokeWidth={2.5} />
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-start gap-4 border border-black/10 rounded-2xl p-5 transition-colors duration-200 hover:border-black"
              >
                <div className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm font-medium hover:underline"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="w-full">
        <div className="w-full h-[350px] sm:h-[420px] lg:h-[480px] grayscale hover:grayscale-0 transition-all duration-500">
          <iframe
            title="Success Academy Location"
            src="https://www.google.com/maps?q=Bihar+Sharif,+Nalanda,+Bihar&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;