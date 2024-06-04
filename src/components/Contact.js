// import React from "react";
// //motion
// import { motion } from "framer-motion";
// //variants
// import { fadeIn } from "../variants";

// const Contact = () => {
//   return (
//     <div className="py-16 lg:section" id="contact">
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-row">
//           {/*    text */}
//           <motion.div
//             variants={fadeIn("right", 0.3)}
//             initial="hidden"
//             whileInView={"show"}
//             viewport={{ once: false, amount: 0.3 }}
//             className="flex-1 flex justify-center items-center"
//           >
//             <div>
//               <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
//                 Get in touch
//               </h4>
//               <h2 className="text-[45px] lg:text-[90px] leading-none mb-3">
//                 Let's work <br /> together!
//               </h2>
//             </div>
//           </motion.div>

//           <motion.div
//             variants={fadeIn("left", 0.3)}
//             initial="hidden"
//             whileInView={"show"}
//             viewport={{ once: false, amount: 0.3 }}
//             className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-12 p-6"
//           >
//             <p className="text-2xl">
//               <span className="text-3xl text-accent font-medium mb-2 tracking-wide">
//                 Email:
//               </span>{" "}
//               okanozman88@gmail.com
//             </p>
//             <p className="text-2xl">
//               <span className="text-3xl text-accent font-medium mb-2 tracking-wide">
//                 Phone:
//               </span>{" "}
//               0090 533 338 15 35
//             </p>
//             <p className="text-2xl">
//               <span className="text-3xl text-accent font-medium mb-2 tracking-wide">
//                 Address:
//               </span>{" "}
//               Ankara/Turkey
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    // <div className="py-16 lg:section bg-gray-100" id="contact">
    //   <div className="container mx-auto px-4">
    //     <div className="flex flex-col lg:flex-row items-center">
    //       {/* Text Section */}
    //       <motion.div
    //         variants={fadeIn("right", 0.3)}
    //         initial="hidden"
    //         whileInView={"show"}
    //         viewport={{ once: false, amount: 0.3 }}
    //         className="flex-1 mb-8 lg:mb-0"
    //       >
    //         <div>
    //           <h4 className="text-xl uppercase text-accent font-medium mb-4 tracking-wide">
    //             Get in touch
    //           </h4>
    //           <h2 className="text-[45px] lg:text-[90px] leading-none mb-6">
    //             Let's work <br /> together!
    //           </h2>
    //         </div>
    //       </motion.div>

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

          {/* Contact Information */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=""
          >
            <div className="text-lg leading-relaxed space-y-4">
              <div>
                <span className="block text-xl text-accent font-semibold">Email:</span>
                <a href="mailto:okanozman88@gmail.com" className="text-2xl text-gray-100  hover:text-fuchsia-200">
                  okanozman88@gmail.com
                </a>
              </div>
              <div>
                <span className="block text-xl text-accent font-semibold">Phone:</span>
                <p className="text-2xl  text-gray-100">
                  +90 533 338 15 35
                </p>
              </div>
              <div>
                <span className="block text-xl text-accent font-semibold">Address:</span>
                <p className="text-2xl  text-gray-100">Ankara, Turkey</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
