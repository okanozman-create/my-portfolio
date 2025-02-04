import React from "react";
//images
import Image from "../assets/example.png";
//icoons
// import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

import resume from "../assets/okanozmancv-en.pdf";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[80px]"
            >
              OKAN <span>OZMAN</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a </span>
              <TypeAnimation
                sequence={["Developer", 2000]}
                speed={1}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 text-sm sm:text-[18px]"
            >
              Hello, my name is Okan, and I am 36 years old. After years, I
              finally achieved my dream, and since 2022, I have been programming
              and writing code on my own. I know I am still at the beginning of
              the road, and every day I add something new to myself in terms of
              programming. This is a passion for me. On this page, you can find
              information about me. Have a nice surf!
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg btn-sm">
                <a href={resume} download="resume">
                  {" "}
                  Download CV
                </a>
              </button>
            </motion.div>
            {/* socials */}
          </div>
          {/* IMAGE */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w[482px]"
          >
            <img
              className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden"
              src={Image}
              alt="Okanphoto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
