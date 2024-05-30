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
            className="flex-1 flex justify-sr items-center"
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

          {/*   form */}

          {/* <motion.form 
           variants={fadeIn("left", 0.3)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.3 }}
          
          className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start">
            <input className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            type="text"
            placeholder="Your name"
            />
            <input className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            type="text"
            placeholder="Your email"
            />
            <textarea className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
            placeholder="Your message"
            ></textarea>
            <button className="btn btn-lg">Send message</button>
          </motion.form> */}

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-12 p-6"
            
          >
            {/* <input className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            type="text"
            placeholder="Your name"
            />
            <input className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            type="text"
            placeholder="Your email"
            />
            <textarea className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
            placeholder="Your message"
            ></textarea>
            <button className="btn btn-lg">Send message</button> */}

            <p className="text-2xl"><span className="text-3xl text-accent font-medium mb-2 tracking-wide">Email:</span> okanozman88@gmail.com</p>
            <p className="text-2xl"><span className="text-3xl text-accent font-medium mb-2 tracking-wide">Phone:</span> 0090 533 338 15 35</p>
            <p className="text-2xl"><span className="text-3xl text-accent font-medium mb-2 tracking-wide">Address:</span> Ankara/Turkey</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
