"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const buttonVariants = {
    initial: { y: 0 },
    hidden: { y: 100 },
  };
  return (
    <div className="relative ">
      <div className=" fixed px-3 py-4 w-full z-50 bg-[#ffffff42] backdrop-blur-md">
        <motion.div initial="initial" whileHover="hidden" className="  w-fit">
          <Link
            href="/"
            className=" border border-[#303083] rounded-sm px-3 w-fit  font-BitxMap flex"
          >
            <div className="relative overflow-hidden mix-blend-difference text-black">
              <motion.div
                variants={buttonVariants}
                className=" flex gap-2"
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                }}
              >
                {" "}
                <ArrowLeft className=" w-5 text-[#303083]" />
                GO BACK
              </motion.div>
              <motion.div
                variants={{
                  initial: { y: "-200%" },
                  hidden: { y: 0 },
                }}
                className=" flex gap-2 absolute inset-0"
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                }}
              >
                <ArrowLeft className=" w-5" /> GO BACK
              </motion.div>
            </div>
          </Link>
        </motion.div>
      </div>
      {children}
    </div>
  );
};

export default layout;
