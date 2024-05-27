import React from "react";
//images
import Image from "../assets/example.png";
//icoons
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

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
              whileInView={'show'}
              viewport={{once:false, amount:0.7}}
              className="text-[55px] font-bold leading-[0.8] lg:text-[80px]"
            >
              OKAN <span>OZMAN</span>
            </motion.h1>
            <motion.div 
             variants={fadeIn("up", 0.4)}
             initial="hidden"
             whileInView={'show'}
             viewport={{once:false, amount:0.7}}
            className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="text-white mr-4">I am a </span>
              <TypeAnimation
                sequence={["Developer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p 
             variants={fadeIn("up", 0.5)}
             initial="hidden"
             whileInView={'show'}
             viewport={{once:false, amount:0.7}}
            className="mb-8 max-w-lg mx-auto lg:mx-0">
              Starting my software development journey in 2022, I've rapidly
              become proficient in key web technologies such as HTML, CSS,
              JavaScript, and React, with additional self-taught expertise in
              Amazon Web Services. This journey has sharpened my ability to
              think critically and solve complex problems, skills that are
              essential for creative web and application development. I'm eager
              to bring my determination, technical proficiency, and continuous
              learning mindset to your projects. As a Junior Frontend Developer,
              I am committed to delivering high-quality solutions and staying at
              the forefront of technology trends. Let's collaborate to turn your
              vision into reality.
            </motion.p>
            <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
            {/* socials */}
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaDribbble />
              </a>
            </div>
          </div>
          {/* IMAGE */}
          <div className="hidden lg:flex flex-1 max-w-[320px] lg:max-w[482px]">
            {/* <img
              className="w-32 h-32 md:w-400 md:h-400 rounded-full overflow-hidden"
              src={Image}
              alt="Okanphoto"
            /> */}
            <img
              className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden"
              src={Image}
              alt="Okanphoto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
