import React from "react";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <div className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/*    text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-center items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-3">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>



         



  <motion.div
variants={fadeIn("left", 0.3)}
initial="hidden"
whileInView={"show"}
viewport={{ once: false, amount: 0.3 }}
className="flex-1 border-dashed border-2 border-indigo-600  flex flex-col gap-y-6 text-center pb-12 p-6"
>

<div >
                  <span className="text-2xl text-accent font-medium mb-2 tracking-wide uppercase">Email</span>
                  <p className="text-2xl">
                    okanozman88@gmail.com
                  </p>
                </div>
                <div>
                  <span className="text-2xl text-accent font-medium mb-2 tracking-wide uppercase">Phone</span>
                  <p >
                    +90 533 338 15 35
                  </p>
                </div>
                <div>
                  <span className="text-2xl text-accent font-medium mb-2 tracking-wide uppercase">Address</span>
                  <p className="text-2xl">Ankara, Turkey</p>
                </div>



                </motion.div>




        </div>
      </div>
    </div>
  );
};

export default Contact;


