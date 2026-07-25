import React, { useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactCard = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      y: 80,
      opacity: 0,
      scale: 0.9,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const contactData = [
    {
      id: 1,
      icon: <MapPin className="w-8 h-8 text-orange-500" />,
      title: "Address",
      value: "Bihar Sharif, Nalanda, Bihar",
    },
    {
      id: 2,
      icon: <Phone className="w-8 h-8 text-orange-500" />,
      title: "Phone",
      value: "+91 98765 43210",
    },
    {
      id: 3,
      icon: <Mail className="w-8 h-8 text-orange-500" />,
      title: "Email",
      value: "info@coaching.com",
    },
    {
      id: 4,
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "Working Hours",
      value: "Mon - Sat\n9:00 AM - 7:00 PM",
    },
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {contactData.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (cardsRef.current[index] = el)}
              onMouseEnter={(e) =>
                gsap.to(e.currentTarget, {
                  y: -10,
                  scale: 1.04,
                  rotateY: 5,
                  duration: 0.3,
                  ease: "power2.out",
                })
              }
              onMouseLeave={(e) =>
                gsap.to(e.currentTarget, {
                  y: 0,
                  scale: 1,
                  rotateY: 0,
                  duration: 0.3,
                  ease: "power2.out",
                })
              }
              className="
                relative overflow-hidden
                rounded-3xl
                bg-white/20
                backdrop-blur-xl
                border border-white/40
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                p-7
                text-center
                cursor-pointer
              "
            >
              {/* Glow Effect */}
              <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-orange-400/20 blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-white/30 blur-3xl"></div>

              {/* Icon */}
              <div className="relative z-10 w-18 h-18 mx-auto rounded-2xl bg-white/30 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-lg">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 mt-6 text-xl font-bold text-slate-800">
                {item.title}
              </h3>

              {/* Value */}
              <p className="relative z-10 mt-3 text-slate-600 leading-relaxed whitespace-pre-line">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCard;