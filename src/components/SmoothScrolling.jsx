import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      smoothWheel: true,
      touchMultiplier: 2,
    });

    return () => lenis.destroy();
  }, []);

  return children;
};

export default SmoothScroll;
