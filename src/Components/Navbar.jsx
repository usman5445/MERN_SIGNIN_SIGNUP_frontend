import React from "react";
import { FaUserAlt } from "react-icons/fa";
function Navbar() {
  return (
    <div className="mb-0 flex h-fit w-full justify-between px-10 py-5 text-4xl font-bold md:mb-16  lg:mb-0">
      <h1>Loggify.</h1>
      <FaUserAlt />
    </div>
  );
}

export default Navbar;
