import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactCard = () => {
  const contacts = [
    {
      icon: <MapPin size={28} />,
      title: "Visit Us",
      value: "Bihar Sharif, Nalanda, Bihar",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: <Phone size={28} />,
      title: "Call Us",
      value: "+91 98765 43210",
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: <Mail size={28} />,
      title: "Email",
      value: "info@coaching.com",
      color: "from-yellow-500 to-orange-400",
    },
    {
      icon: <Clock size={28} />,
      title: "Working Hours",
      value: "Mon - Sat | 8 AM - 8 PM",
      color: "from-purple-500 to-pink-400",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {contacts.map((item, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-3xl
          border border-white/15
          bg-white/10 backdrop-blur-xl
          p-6 transition-all duration-500
          hover:-translate-y-2 hover:border-yellow-400/40"
        >
          {/* Glow */}
          <div
            className={`absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${item.color} opacity-20 blur-3xl transition-all duration-500 group-hover:scale-150`}
          />

          <div
            className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl
            bg-gradient-to-br ${item.color} text-white shadow-lg`}
          >
            {item.icon}
          </div>

          <h3 className="text-xl font-semibold text-white">
            {item.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-300">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ContactCard;