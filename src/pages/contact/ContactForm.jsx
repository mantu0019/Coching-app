import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "917484932591"; // 👉 Apna WhatsApp Number

    const message = `🎓 *New Admission Inquiry*

👤 Full Name: ${formData.name}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}
📚 Course Interested: ${formData.course}

💬 Message:
${formData.message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="py-14 ">
      <div className="max-w-3xl mx-auto px-5">
        <div className=" rounded-3xl shadow-xl p-6 sm:p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Send Us a Message
          </h2>

          <p className="text-slate-500 mb-8">
            Fill in your details and we'll connect with you on WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            {/* Course */}
            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Course Interested In
              </label>

              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-orange-500"
              >
                <option value="">Select Course</option>
                <option>SSC CGL</option>
                <option>SSC CHSL</option>
                <option>Railway</option>
                <option>BPSC</option>
                <option>Banking</option>
                <option>UPSC</option>
                <option>Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Message
              </label>

              <textarea
                rows={5}
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none resize-none focus:border-orange-500"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-3 rounded-xl"
            >
              Send Message on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;