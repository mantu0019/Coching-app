import { GraduationCap } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router";

const navItems = [
  { label: "Home", to: "/" },
  { label: "New Batch", to: "/newbatch" },
  { label: "Results", to: "/results" },
  { label: "Contact", to: "/contact" },
  { label: "About", to: "/about" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative sticky top-0 z-50 w-full overflow-hidden border-b border-black/10 bg-white/95 px-4 py-3 text-black shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] backdrop-blur-[14px]">
      <div className="pointer-events-none absolute -right-10 top-4 h-36 w-36 rounded-full bg-black/5 blur-3xl opacity-35"></div>
      <div className="pointer-events-none absolute left-4 top-8 h-24 w-24 rounded-full bg-black/5 blur-3xl opacity-20"></div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 md:px-6">
        <NavLink
          to="/"
          className="flex items-center gap-3 text-lg font-semibold tracking-tight text-black transition duration-300 hover:text-black/70"
          onClick={() => setMenuOpen(false)}
        >
          <GraduationCap className="h-7 w-7 text-black" />
          <span className="text-2xl">Success Academy</span>
        </NavLink>

        <div className="hidden items-center gap-4 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} className="relative group">
              {({ isActive }) => (
                <span
                  className={`relative inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] transition duration-300 ${
                    isActive ? "text-black" : "text-black/70 hover:text-black"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-4 right-4 -bottom-0.5 h-[2px] rounded-full bg-black transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </span>
              )}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/5 text-black transition duration-300 hover:border-black/20 hover:bg-black/10 md:hidden"
        >
          <span className="sr-only">Open mobile menu</span>
          <div className="flex h-5 w-5 flex-col items-center justify-between">
            <span className={`block h-0.5 w-5 rounded-full bg-black transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}></span>
            <span className={`block h-0.5 w-5 rounded-full bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block h-0.5 w-5 rounded-full bg-black transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}></span>
          </div>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-black/10 bg-white/95 backdrop-blur-[14px] transition-[max-height] duration-500 ease-in-out md:hidden ${menuOpen ? "max-h-96" : "max-h-0"}`}
      >
        <div className="flex flex-col gap-1 px-4 pb-4 pt-3">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} className="relative group" onClick={() => setMenuOpen(false)}>
              {({ isActive }) => (
                <span
                  className={`relative block rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition duration-300 ${
                    isActive ? "text-black" : "text-black/70 hover:text-black"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-4 right-4 bottom-2 h-[2px] rounded-full bg-black transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </span>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
