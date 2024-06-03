import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex gap-x-7">
          <a href="https://www.linkedin.com/in/okan-ozman/" className="text-accent text-base  hover:text-fuchsia-200 sm:text-3xl">
            <FaLinkedin />
          </a>
          <a href="https://github.com/okanozman-create">
            <FaGithub className="text-accent text-base hover:text-fuchsia-200 sm:text-3xl" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
