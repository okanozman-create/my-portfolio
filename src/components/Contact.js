import React from "react";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";



import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';


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
            className="flex flex-1 flex-col gap-y-6 bg-black p-6 pb-12 text-center rounded bg-opacity-50"
          >
            <div className="flex justify-start items-center gap-x-8 mt-0 md:mt-3">
              {/* <span className="mb-2 text-2xl font-medium uppercase tracking-wide text-accent">
                Email
              </span> */}
              <ContactMailIcon  className="w-7 h-7  text-accent" fontSize="medium" />
              <p className="text-1xl ml-1">okanozman88@gmail.com</p>
            </div>

            <div className="flex justify-start items-center gap-x-8">
              {/* <span className="mb-2 text-2xl font-medium uppercase tracking-wide text-accent">
                Phone
              </span> */}
              <AddToHomeScreenIcon  className="w-7 h-7  text-accent gap-x-8" fontSize="medium" />
              <p className="text-1xl">+90 533 338 15 35</p>
            </div>

            <div className="flex justify-start items-center gap-x-8">
              {/* <span className="mb-2 text-2xl font-medium uppercase tracking-wide text-accent">
                Address
              </span> */}
                 <MapsHomeWorkIcon className="w-7 h-7  text-accent" fontSize="medium" />
              <p className="text-1xl ml-2">Ankara, Turkey</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
