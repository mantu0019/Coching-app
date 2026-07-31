import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* lucide-react removed brand/logo icons (trademark reasons), so social
   icons are small inline SVGs instead — no extra dependency needed. */
const Instagram = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const Facebook = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const Youtube = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);
const Linkedin = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const Twitter = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "Faculty", to: "/faculty" },
  { label: "Results", to: "/results" },
  { label: "Gallery", to: "/gallery" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
];

const courseLinks = [
  { label: "SSC", to: "/courses/ssc-cgl" },
  { label: "Railway", to: "/courses/railway" },
  { label: "Banking", to: "/courses/banking" },
  { label: "BPSC", to: "/courses/bpsc" },

  { label: "Police", to: "/courses/bihar-si" },
  { label: "CTET", to: "/courses/ctet-tre" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/vikascoachinginstitute?igsh=MTMxcjI4MHF0Mzl4Zw==",
    Icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1DFR4Khvzz/",
    Icon: Facebook,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@vikascoachinginstitute",
    Icon: Youtube,
  },
];

const contactInfo = {
  address: "Bihar shrif, Near machhli market  Bihar 803101",
  addressMapUrl:
    "https://www.google.com/maps/place/Vikas+Coaching+Institute/@25.1958631,85.5150726,17z/data=!4m6!3m5!1s0x39f2f35955555523:0xda40d7cb2280c52f!8m2!3d25.195864!4d85.5150741!16s%2Fg%2F11bx8m06zt?hl=en&entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D",
  phone: "+917808900900",
  email: "vikascoachinginstitute@gmail.com",
  hours: "Mon – Sat, 7 AM – 7 PM",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Bihar+Sharif,Nalanda,Bihar&output=embed",
};

const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    className="group inline-flex items-center text-sm text-[#5c5347] transition-all duration-300 hover:text-[#f97316] hover:translate-x-1"
  >
    <span className="relative">
      {children}
      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#f97316] transition-all duration-300 group-hover:w-full" />
    </span>
  </Link>
);

const CourseLink = ({ to, children }) => (
  <Link
    to={to}
    className="group flex items-center gap-1.5 text-sm text-[#5c5347] transition-all duration-300 hover:text-[#f97316] hover:translate-x-1"
  >
    <ChevronRight
      size={14}
      className="shrink-0 text-[#f97316]/60 transition-transform duration-300 group-hover:translate-x-0.5"
    />
    {children}
  </Link>
);

const Footer = () => {
  const footerRef = useRef(null);
  const columnsRef = useRef([]);
  const mapRef = useRef(null);
  const socialRef = useRef(null);

  columnsRef.current = [];
  const addColumnRef = (el) => {
    if (el && !columnsRef.current.includes(el)) columnsRef.current.push(el);
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.set(footerRef.current, { opacity: 0, y: 60 });
      gsap.to(footerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: footerRef.current, start: "top 90%" },
      });

      gsap.set(columnsRef.current, { opacity: 0, y: 24 });
      gsap.to(columnsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: footerRef.current, start: "top 88%" },
      });

      gsap.set(mapRef.current, { opacity: 0, x: 40 });
      gsap.to(mapRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: mapRef.current, start: "top 95%" },
      });

      gsap.set(socialRef.current?.children || [], { opacity: 0, y: 12 });
      gsap.to(socialRef.current?.children || [], {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: { trigger: socialRef.current, start: "top 98%" },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="relative bg-transparent px-4 py-8 sm:px-6 lg:px-10">
      <div
        ref={footerRef}
        className="relative mx-auto max-w-7xl rounded-[32px] border border-white/30 bg-white/20 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-2xl sm:p-8 lg:p-10"
      >
        <div className="pointer-events-none absolute -top-16 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#f97316]/10 blur-3xl" />

        {/* Main grid */}
        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Logo + About */}
          <div ref={addColumnRef}>
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl  font-bold text-white ">
                <img
                  className=" w-[165px]"
                  src={`${import.meta.env.BASE_URL}only-logo.png`}
                  alt=""
                />
              </span>
              <span className="text-base font-bold tracking-tight text-[#2a251e]">
                Vikash Coaching Institute
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-[#6b6155]">
              Result-driven coaching for SSC, Banking, Railway, BPSC and more.
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              <Link
                to="/get-admission"
                className="rounded-full bg-gradient-to-r from-[#f97316] to-[#fb923c] px-4 py-2 text-xs font-semibold text-white shadow-[0_6px_18px_rgba(249,115,22,0.35)] transition-transform duration-300 hover:scale-105"
              >
                Get admission Information
              </Link>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div ref={addColumnRef}>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#2a251e]">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink to={link.to}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Courses */}
          <div ref={addColumnRef}>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#2a251e]">
              Courses
            </h4>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5">
              {courseLinks.map((course) => (
                <li key={course.label}>
                  <CourseLink to={course.to}>{course.label}</CourseLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact + Map */}
          <div ref={addColumnRef}>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#2a251e]">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-[#5c5347]">
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 transition-colors duration-300 hover:text-[#f97316]"
                >
                  <Phone size={14} className="shrink-0 text-[#f97316]" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 transition-colors duration-300 hover:text-[#f97316]"
                >
                  <Mail size={14} className="shrink-0 text-[#f97316]" />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.addressMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 transition-colors duration-300 hover:text-[#f97316]"
                >
                  <MapPin
                    size={14}
                    className="mt-0.5 shrink-0 text-[#f97316]"
                  />
                  <span>{contactInfo.address}</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="shrink-0 text-[#f97316]" />
                {contactInfo.hours}
              </li>
            </ul>

            <a
              ref={mapRef}
              href={contactInfo.addressMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block overflow-hidden rounded-2xl border border-white/40 bg-white/30 shadow-[0_8px_24px_rgba(0,0,0,0.1)] backdrop-blur-md transition-transform duration-300 hover:scale-[1.02]"
            >
              <iframe
                title="Institute location map"
                src={contactInfo.mapEmbedUrl}
                className="h-[150px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </div>

        {/* Bottom row — social + copyright + links, all compact */}
        <div className="relative mt-8 flex flex-col items-center gap-4 border-t border-white/40 pt-5 text-center lg:flex-row lg:justify-between lg:text-left">
          <div ref={socialRef} className="flex items-center gap-2.5">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-6 w-6 items-center justify-center rounded-full text-blue-400 transition-colors duration-75 hover:text-orange-500"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          <p className="text-xs text-[#8a8072]">
            © 2026 Vikash Coaching Institute. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs text-[#8a8072]">
            <Link
              to="/privacy-policy"
              className="transition-colors hover:text-[#f97316]"
            >
              Privacy Policy
            </Link>
            <Link
              to="/term&codition"
              className="transition-colors hover:text-[#f97316]"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
