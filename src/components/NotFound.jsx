import React from "react";
import { Home, ArrowRight, SearchX } from "lucide-react";

const NotFound = () => {
  return (
    <div className="w-full min-h-screen bg-white text-black flex items-center justify-center px-6">
      <div className="max-w-lg w-full flex flex-col items-center text-center gap-6 py-16">
        <div className="w-16 h-16 rounded-full border border-black/15 flex items-center justify-center">
          <SearchX className="w-7 h-7" strokeWidth={2} />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-6xl sm:text-7xl font-bold tracking-tight">404</h1>
          <h2 className="text-xl sm:text-2xl font-bold">Page Not Found</h2>
        </div>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-sm">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to preparing for your exam.
        </p>

        <a
          href="/"
          className="flex items-center gap-2 bg-black text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:gap-3 hover:bg-gray-900"
        >
          <Home className="w-4 h-4" strokeWidth={2} />
          Back to Home
          <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
        </a>
      </div>
    </div>
  );
};

export default NotFound;