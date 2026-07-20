 
import { GraduationCap } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "New Batch", to: "/newbatch" },
  { label: "Results", to: "/results" },
  { label: "Contact", to: "/contact" },
  { label: "About", to: "/about" },
  { label: "Courses", to: "/courses" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-4 sm:px-8 lg:px-16">
      <div
        className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 overflow-hidden rounded-full border border-white/40 px-5 py-2.5 shadow-sm backdrop-blur-md md:px-6"
        style={{
          background: "rgba(255, 255, 255, 0.45)",
        }}
      >
        {/* decorative soft glow blobs - jaise reference me hote hain */}
        <div className="pointer-events-none absolute -right-10 top-4 h-36 w-36 rounded-full bg-white/40 blur-3xl opacity-40"></div>
        <div className="pointer-events-none absolute left-4 top-8 h-24 w-24 rounded-full bg-white/30 blur-3xl opacity-30"></div>

        {/* Logo */}
        <NavLink
          to="/"
          className="relative z-10 flex items-center gap-3 text-lg font-semibold tracking-tight text-black transition duration-300 hover:text-black/70"
          onClick={() => setMenuOpen(false)}
        >
           <span className=""><img 
            className=" w-[165px]"
           
           src=".\public\logo.png" alt="" /></span>
        </NavLink>

        {/* Desktop nav links */}
        <div className="relative z-10 hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} className="relative group">
              {({ isActive }) => (
                <span
                  className={`relative inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-white text-black shadow-sm"
                      : "text-black/70 hover:bg-white/50 hover:text-black"
                  }`}
                >
                  {item.label}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        {/* Login button (optional - image ki tarah) */}
        <div className="relative z-10 hidden md:block">
          <NavLink
            to="/login"
            className="rounded-full bg-gradient-to-r from-orange-400 to-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-transform duration-200 hover:scale-105"
          >
            LOGIN
          </NavLink>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/5 text-black transition duration-300 hover:border-black/20 hover:bg-black/10 md:hidden"
        >
          <span className="sr-only">Open mobile menu</span>
          <div className="flex h-5 w-5 flex-col items-center justify-between">
            <span className={`block h-0.5 w-5 rounded-full bg-black transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}></span>
            <span className={`block h-0.5 w-5 rounded-full bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block h-0.5 w-5 rounded-full bg-black transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        id="mobile-navigation"
        className={`mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl border border-white/40 backdrop-blur-md transition-[max-height] duration-500 ease-in-out md:hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
        style={{ background: "rgba(255, 255, 255, 0.7)" }}
      >
        <div className="flex flex-col gap-1 p-4">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} className="relative group" onClick={() => setMenuOpen(false)}>
              {({ isActive }) => (
                <span
                  className={`relative block rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                    isActive ? "bg-white text-black" : "text-black/70 hover:bg-white/60"
                  }`}
                >
                  {item.label}
                </span>
              )}
            </NavLink>
          ))}
          <NavLink
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 px-6 py-2.5 text-center text-sm font-semibold text-white shadow-md"
          >
            LOGIN
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;