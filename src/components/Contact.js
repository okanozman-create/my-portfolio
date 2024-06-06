import React from "react";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <div className="lg:section py-16" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/*    text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-1 items-center justify-center"
          >
            <div>
              <h4 className="mb-2 text-xl font-medium uppercase tracking-wide text-accent">
                Get in touch
              </h4>
              <h2 className="mb-3 text-[45px] leading-none lg:text-[90px]">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-1 flex-col gap-y-6 border-2 border-dashed border-indigo-600 p-6 pb-12 text-center"
          >
            <div>
              <span className="mb-2 text-2xl font-medium uppercase tracking-wide text-accent">
                Email
              </span>
              <p className="text-2xl">okanozman88@gmail.com</p>
            </div>
            <div>
              <span className="mb-2 text-2xl font-medium uppercase tracking-wide text-accent">
                Phone
              </span>
              <p>+90 533 338 15 35</p>
            </div>
            <div>
              <span className="mb-2 text-2xl font-medium uppercase tracking-wide text-accent">
                Address
              </span>
              <p className="text-2xl">Ankara, Turkey</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
