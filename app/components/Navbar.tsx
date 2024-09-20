"use client";

import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOnTop, setOnTop] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 0) setOnTop(true);
      else setOnTop(false);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-black/75 h-[60px] backdrop-blur z-50 ${
        isOnTop &&
        "!bg-gradient-to-b !from-black/75 !bg-transparent !h-[75px] to-transparent backdrop-blur-0"
      } transition-all duration-300`}
    >
      <div className="flex items-center w-full h-full px-4">
        <span className="text-3xl font-bold tracking-tight">
          Ani<span className="text-cyan-600">play</span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
