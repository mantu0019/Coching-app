import React from "react";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPinned,
} from "lucide-react";

const QuickContact = () => {
  const whatsappNumber = "919876543210";
  const phoneNumber = "+919876543210";
  const email = "info@coaching.com";

  const buttons = [
    {
      id: 1,
      title: "WhatsApp",
      icon: <MessageCircle className="w-7 h-7" />,
      color: "bg-green-500 hover:bg-green-600",
      onClick: () =>
        window.open(
          `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            "Hello! I want to know more about your coaching."
          )}`,
          "_blank"
        ),
    },
    {
      id: 2,
      title: "Call Now",
      icon: <Phone className="w-7 h-7" />,
      color: "bg-blue-500 hover:bg-blue-600",
      onClick: () => (window.location.href = `tel:${phoneNumber}`),
    },
    {
      id: 3,
      title: "Email Us",
      icon: <Mail className="w-7 h-7" />,
      color: "bg-orange-500 hover:bg-orange-600",
      onClick: () =>
        (window.location.href = `mailto:${email}?subject=Admission Inquiry`),
    },
    {
      id: 4,
      title: "Get Directions",
      icon: <MapPinned className="w-7 h-7" />,
      color: "bg-red-500 hover:bg-red-600",
      onClick: () =>
        window.open(
          "https://www.google.com/maps/search/?api=1&query=Bihar+Sharif+Nalanda+Bihar",
          "_blank"
        ),
    },
  ];

  return (
    <section className="py-7 ">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Quick <span className="text-orange-500">Contact</span>
          </h2>

          <p className="text-slate-500 mt-2">
            Reach us instantly using your preferred method.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {buttons.map((btn) => (
            <button
              key={btn.id}
              onClick={btn.onClick}
              className={`${btn.color}
                text-white
                rounded-2xl
                p-6
                flex
                flex-col
                items-center
                justify-center
                gap-3
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl`}
            >
              {btn.icon}

              <span className="font-semibold text-lg">
                {btn.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickContact;