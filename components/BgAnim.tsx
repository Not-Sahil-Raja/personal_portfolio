import React from "react";
import { motion } from "framer-motion";

const BgAnim = () => {
  return (
    <div className=" absolute z-0 w-full h-screen inset-0  overflow-hidden ">
      <div className=" relative w-full h-full">
        <div className=" absolute w-[100vw] border-2 border-white aspect-square rounded-full -top-full bg-transparent "></div>
        <div className=" absolute w-[100vw] h-1 rounded-full bg-[#ffffff] -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className=" relative w-full h-full ">
            <motion.div
              className=" h-1 w-3  bg-[#19193d] rounded-xl blur-sm shadow-lg  shadow-[#2b2b49] mix-blend-normal"
              animate={{ x: ["-10vw", "110vw"] }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: [0.85, 0, 0.15, 1],
                delay: 4,
              }}
            ></motion.div>
          </div>
        </div>
        <div className=" absolute w-[100vw] border-2 aspect-square rounded-full border-white -bottom-full bg-transparent"></div>
        {/* <div className=" absolute w-full h-full bg-gradient-to-r from-[#2d2d6d] to-[#232352]"></div> */}
      </div>
    </div>
  );
};

export default BgAnim;
