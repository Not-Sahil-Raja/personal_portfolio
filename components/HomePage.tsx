import React from "react";
import { motion, MotionValue } from "framer-motion";
import { Globe } from "lucide-react";
import BgAnim from "./BgAnim";

interface HomepageProps {
  scaleV: MotionValue<number>;
  rotationV: MotionValue<string>;
  opacityV: MotionValue<number>;
  color: string;
}

// Convert the component to TypeScript
const Homepage: React.FC<HomepageProps> = ({ scaleV, rotationV, opacityV }) => {
  const DELAY = 3.0;

  return (
    <div className="h-screen bg-[#2d2d6d] sticky top-0 -z-10">
      <motion.div
        className=" h-screen select-none overflow-hidden bg-[#f5f5f5]  flex flex-col pt-[18vh] py-[5vh] px-[3.5vw] origin-bottom"
        style={{
          scale: scaleV,
          rotate: rotationV,
          opacity: opacityV,
        }}
      >
        <BgAnim />
        <div className="md:h-[12vh] sm:h-[8vh] h-[7vh] flex items-center justify-between sm:p-2 sm:py-0 md:py-2 z-[1]">
          <div className=" w-fit h-full flex md:gap-3 sm:gap-1 gap-0">
            <motion.div
              className=" h-full  aspect-square bg-[#232352] sm:p-2 p-1"
              initial={{ scale: 0, rotate: 45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.35,
                delay: DELAY + 0.5,
                ease: [0.85, 0, 0.15, 1],
              }}
            >
              {" "}
              <Globe className=" w-full h-full text-[white]" />
            </motion.div>
            <div className=" h-full sm:px-2 pl-1 w-fit flex flex-col justify-center overflow-hidden">
              <motion.p
                className=" font-MonumentExtended tracking-wide  leading-none md:text-2xl sm:text-base text-xs whitespace-nowrap "
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.35,
                  delay: DELAY + 0.65,
                  ease: [0.85, 0, 0.15, 1],
                }}
              >
                MD SAHIL RAJA
              </motion.p>
              <motion.p
                className="font-BitxMap leading-none md:text-2xl sm:text-base text-sm whitespace-nowrap"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.35,
                  delay: DELAY + 0.65,
                  ease: [0.85, 0, 0.15, 1],
                }}
              >
                BASED IN INDIA
              </motion.p>
            </div>
          </div>
          <div className=" w-fit h-full flex gap-3">
            <div className=" h-full  px-2 w-fit flex flex-col justify-center overflow-hidden">
              <motion.p
                className="font-BitxMap leading-none md:text-2xl sm:text-base text-sm whitespace-nowrap text-right"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.35,
                  delay: DELAY + 0.65,
                  ease: [0.85, 0, 0.15, 1],
                }}
              >
                WELCOME TO <br /> MY PORTFOLIO
              </motion.p>
            </div>
          </div>
        </div>
        <motion.div
          className=" h-full overflow-hidden px-4 py-3"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.35,
            delay: DELAY + 0.5,
            ease: [0.85, 0, 0.15, 1],
          }}
        ></motion.div>
        <div className="  h-fit flex flex-col justify-end pt-[3vh] md:pb-20 pb-5 z-[1]">
          <div className="font-BitxMap text-lg flex justify-end mr-[5vw] text-[#303083]">
            <motion.p
              className="border border-[#303083] px-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.35,
                delay: DELAY + 0.7,
                ease: [0.85, 0, 0.15, 1],
              }}
            >
              OPEN TO WORK
            </motion.p>
          </div>
          <div className=" font-MonumentExtended font-medium overflow-hidden 2xl:text-6xl lg:text-4xl sm:text-2xl text-xl lg:mt-0 mt-3 2xl:pl-[7vw] pl-4">
            <p>
              {"FULL STACK".split(" ").map((letter, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: DELAY + 0.85 + i * 0.1,
                    ease: [0.85, 0, 0.15, 1],
                  }}
                >
                  {letter}&nbsp;
                </motion.span>
              ))}
            </p>
          </div>
          <div className="font-MonumentExtended 2xl:text-9xl lg:text-7xl md:text-5xl sm:text-3xl text-2xl text-center overflow-hidden">
            <p>
              {"WEB DEVELOPER".split(" ").map((letter, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: DELAY + 0.85 + i * 0.1,
                    ease: [0.85, 0, 0.15, 1],
                  }}
                >
                  {letter}&nbsp;
                </motion.span>
              ))}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Necessary for `forwardRef`

export default Homepage;
