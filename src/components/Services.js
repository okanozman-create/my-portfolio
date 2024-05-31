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
        <div className="flex flex-col lg:flex-row">
          {/* text &  image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16 text-base sm:text-[24px] leading-[1.5]">
              I'am a Freelance <br/>Web Developer.
            </h3>
            {/* <button className="btn btn-sm">See my work</button> */}
            <h2 className="h2 text-accent mb-6">Skills</h2>
            <div className="flex flex-col">
              <span className="font-primary font-semibold text-sm sm:text-[18px] mb-4 leading-[46px]">
                React
              </span>
              <span className="font-primary font-semibold text-sm sm:text-[18px] mb-4 leading-[46px]">
                Vanillia JavaScript
              </span>
              <span className="font-primary font-semibold text-sm sm:text-[18px] mb-4 leading-[46px]">
                Tailwind
              </span>
              <span className="font-primary font-semibold text-sm sm:text-[18px] mb-4 leading-[46px]">
                CSS
              </span>
              <span className="font-primary font-semibold text-sm sm:text-[18px] mb-4 leading-[46px]">
                HTML
              </span>
              <span className="font-primary font-semibold text-sm sm:text-[18px] mb-4 leading-[46px]">
                AWS Services
              </span>
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
                    className="border-b border-white/20 h-auto md:h-[146px] mb-[38px] flex flex-col md:flex-row"
                    key={index}
                  >
                    <div className="w-full md:max-w-[476px]">
                      <h4 className="text-base sm:text-[20px] md:text-[24px] tracking-wider font-primary font-semibold mb-4 md:mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight mb-8 text-sm sm:text-[18px]">
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
