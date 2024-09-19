import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-[60px] bg-black/75 backdrop-blur z-50 ">
      <div className="flex items-center w-full h-full px-4">
        <span className="text-3xl font-bold tracking-tight">
          Ani<span className="text-cyan-600">play</span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
