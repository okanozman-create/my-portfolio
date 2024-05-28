import React from "react";
// icon
import { BsArrowUpRight } from "react-icons/bs";
//motion
import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import { Link } from "react-scroll";

//services data
const services = [
  {
    name: "UI/UX Design",
    description: "lorem ipsum dolor sit amet consectetur elit",
    link: "learn more",
  },
  {
    name: "Web Development",
    description: "lorem ipsum dolor sit amet consectetur elit",
    link: "learn more",
  },
  {
    name: "Full Stack Deployment with AWS",
    description: "lorem ipsum dolor sit amet consectetur elit",
    link: "learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text &  image */}
          <div className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'am a Freelance Web Developer.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </div>
          {/* services */}
          <div>
            {/* services list */}
            <div>

{services.map((service, index) => {
  return <div>service</div>
}  )}

            </div>
           
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
