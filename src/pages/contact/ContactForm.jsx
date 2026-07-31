// import React, { useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     course: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const whatsappNumber = "917484932591"; // 👉 Apna WhatsApp Number

//     const message = `🎓 *New Admission Inquiry*

// 👤 Full Name: ${formData.name}
// 📞 Phone: ${formData.phone}
// 📧 Email: ${formData.email}
// 📚 Course Interested: ${formData.course}

// 💬 Message:
// ${formData.message}`;

//     const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
//       message
//     )}`;

//     window.open(url, "_blank");

 

//   };

//   return (
//     <section className="py-14 ">
//       <div className="max-w-3xl mx-auto px-5">
//         <div className=" rounded-3xl shadow-xl p-6 sm:p-8">
//           <h2 className="text-3xl font-bold text-slate-900 mb-2">
//             Send Us a Message
//           </h2>

//           <p className="text-slate-500 mb-8">
//             Fill in your details and we'll connect with you on WhatsApp.
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             {/* Name */}
//             <div>
//               <label className="block mb-2 font-medium text-slate-700">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter your full name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-orange-500"
//               />
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="block mb-2 font-medium text-slate-700">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Enter your phone number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//                 className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-orange-500"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block mb-2 font-medium text-slate-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-orange-500"
//               />
//             </div>

//             {/* Course */}
//             <div>
//               <label className="block mb-2 font-medium text-slate-700">
//                 Course Interested In
//               </label>

//               <select
//                 name="course"
//                 value={formData.course}
//                 onChange={handleChange}
//                 required
//                 className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-orange-500"
//               >
//                 <option value="">Select Course</option>
//                 <option>SSC CGL</option>
//                 <option>SSC CHSL</option>
//                 <option>Railway</option>
//                 <option>BPSC</option>
//                 <option>Banking</option>
//                 <option>UPSC</option>
//                 <option>Other</option>
//               </select>
//             </div>

//             {/* Message */}
//             <div>
//               <label className="block mb-2 font-medium text-slate-700">
//                 Message
//               </label>

//               <textarea
//                 rows={5}
//                 name="message"
//                 placeholder="Write your message..."
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none resize-none focus:border-orange-500"
//               ></textarea>
//             </div>

//             {/* Button */}
//             <button
//               type="submit"
//               className="w-full bg-orange-500 hover:bg-orange-600 active:scale-95 transition text-white font-semibold py-3 rounded-xl"
//             >
//               Send Message on WhatsApp
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;




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

  const inputClasses =
    "w-full rounded-2xl border border-white/50 bg-white/40 px-4 py-3 text-slate-800 placeholder:text-slate-500/70 outline-none backdrop-blur-md transition-all duration-300 focus:border-orange-400 focus:bg-white/60 focus:ring-4 focus:ring-orange-300/30";

  return (
    <section className="relative py-16 px-4">
      {/* extra ambient glow blobs so the card really feels like glass on this bg */}
      <div className="pointer-events-none absolute -left-10 top-10 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-10 bottom-10 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl"></div>

      <div className="relative mx-auto max-w-3xl">
        <div
          className="relative overflow-hidden rounded-[2rem] border border-white/50 p-6 shadow-[0_8px_40px_rgba(31,38,135,0.15)] backdrop-blur-2xl sm:p-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.25) 100%)",
          }}
        >
          {/* inner glow accents inside the glass card */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange-300/30 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-emerald-300/30 blur-3xl"></div>

          <div className="relative">
            <span className="mb-3 inline-block rounded-full border border-white/60 bg-white/40 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-orange-600 backdrop-blur-md">
              Get In Touch
            </span>

            <h2 className="text text-3xl font-bold text-slate-900 sm:text-4xl">
              Start Your Admission
            </h2>

            <p className="mt-2 text mb-8 text-slate-600">
             Fill in your details below and our admission counselor will contact you shortly via phone or WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Phone side by side on larger screens */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium text-slate-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>

              {/* Course */}
              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Course Interested In
                </label>

                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className={`${inputClasses} cursor-pointer`}
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
                <label className="mb-2 block font-medium text-slate-700">
                  Message
                </label>

                <textarea
                  rows={5}
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`${inputClasses} resize-none`}
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-orange-400 to-orange-500 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-orange-500/50 active:scale-95"
              >
                Send Message on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;