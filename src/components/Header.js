import React from "react";

import { FaGithub, FaLinkedin} from "react-icons/fa";
// images
// import Logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between ">
          <a href="https://www.linkedin.com/in/okan-ozman/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/okanozman-create">
            <FaGithub />
          </a>

          {/* <img className='w-28 h-auto  bg-purple-900 p-1' src={Logo} alt='' /> */}

          {/* <img width="111" height="48" viewBox="0 0 111 48" fill="none" src={Logo} alt=''/>  */}
        </div>
      </div>
    </header>
  );
};

export default Header;
