import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex gap-x-7">
          <a href="https://www.linkedin.com/in/okan-ozman/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/okanozman-create">
            <FaGithub />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
