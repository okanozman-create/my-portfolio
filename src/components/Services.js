import React from "react";
// icon
// import { BsArrowUpRight } from "react-icons/bs";
//motion
import { motion } from "framer-motion";

import { fadeIn } from "../variants";
// import { Link } from "react-scroll";

//services data
const services = [
  {
    name: "Full Stack Deployment with AWS",
    description: "Performing full-stack deployment using Amazon services.",
  },
  {
    name: "Web Development",
    description:
      "Meeting all kinds of frontend needs using React, JavaScript, Tailwind, CSS, and HTML.",
  },
  {
    name: "Responsive Designs",
    description:
      "Designs are responsive to all devices and adhere to friendly UI/UX principles with up-to-date information.",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* text &  image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="mb-12 flex-1 bg-no-repeat mix-blend-lighten lg:mb-0 lg:bg-bottom"
          
          >
            <h2 className="h2 mb-6 text-center text-3xl italic text-accent sm:text-left sm:text-5xl">
              Skills
            </h2>
            <div className="flex flex-col text-center sm:text-left">
              <h4 className="h4 text-[18px] sm:text-[32px]">React</h4>

              <h4 className="h4 text-[18px] sm:text-[32px]">
                Vanillia JavaScript
              </h4>
              <h4 className="h4  text-[18px] sm:text-[32px]">Tailwind CSS</h4>
              <h4 className="h4 text-[18px] sm:text-[32px]">CSS</h4>
              <h4 className="h4 text-[18px] sm:text-[32px]">HTML</h4>
              <h4 className="h4 text-[18px] sm:text-[32px]">AWS Services</h4>
            </div>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* services list */}
            <div>
              {services.map((service, index) => {
                //destructure service
                const { name, description } = service;
                return (
                  <div
                    // className="border-b border-white/20 h-auto md:h-[146px] mb-[38px] flex"
                    className="mb-[24px] flex h-auto flex-col border-b border-white/20 md:h-[146px] md:flex-row"
                    key={index}
                  >
                    <div className="flex w-full flex-col justify-center text-3xl sm:text-5xl md:max-w-[476px]">
                      <h2 className="h2">{name}</h2>
                      <p className="mb-4 font-secondary text-sm leading-tight sm:text-[18px]">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
