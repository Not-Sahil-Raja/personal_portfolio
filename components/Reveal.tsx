import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Reveal = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setisLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const textVariants = {
    hidden: { y: "100%" },
    visible: { y: 0 },
    exit: { y: "-100%" },
  };

  const exitVariants = {
    exit: { scaleY: 0 },
    initial: { scaleY: 1 },
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className=" bg-[#313169] h-screen sticky top-0 z-[100] flex items-center justify-center origin-top"
            initial="initial"
            exit="exit"
            variants={exitVariants}
            transition={{
              duration: 0.4,
              type: "tween",
              ease: [0.22, 0.7, 0.2, 1],
              delay: 0.5,
            }}
          >
            <motion.div
              className=" text-[5vh] text-[#f5f5f5] leading-none  tracking-wider font-MonumentExtended overflow-hidden"
              initial="hidden"
              animate="visible"
              exit="exit" // Exit animation
            >
              {isLoading && (
                <>
                  <motion.span
                    className=" tracking-wider inline-block px-1"
                    variants={textVariants}
                    transition={{
                      duration: 0.25,
                      type: "tween",
                      ease: [0.42, 0, 0.58, 1],
                    }}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    ✦
                  </motion.span>
                  <motion.span
                    className=" tracking-wider inline-block"
                    variants={textVariants}
                    initial="exit"
                    animate="visible"
                    exit="hidden"
                  >
                    SAHIL
                  </motion.span>{" "}
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Reveal;
