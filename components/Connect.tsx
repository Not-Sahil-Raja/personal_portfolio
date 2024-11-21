import { ArrowUpRight } from "lucide-react";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

// Define variants for animations
const variants = {
  visible: {
    height: "100%",
  },
  hidden: {
    height: "0%",
  },
};

const Connect: React.FC = () => {
  // State for hover effects
  const [linkedinHover, setLinkedinHover] = useState<boolean>(false);
  const [githubHover, setGithubHover] = useState<boolean>(false);
  const [twitterHover, setTwitterHover] = useState<boolean>(false);
  const [emptyHover, setEmptyHover] = useState<boolean>(false);

  // Ref and in-view hook
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    margin: "-20%",
  });

  return (
    <div
      className="w-full h-screen flex flex-col select-none sticky top-0 "
      ref={ref}
    >
      <div className="lg:h-[45%] h-[30%] mt-auto pt-[3vh] flex flex-col items-center justify-center">
        <div className="lg:text-[10vh] md:text-5xl text-4xl leading-none overflow-hidden font-ppneuemonteral font-medium  opacity-80 relative text-[#171f3b]">
          <motion.div
            className="sticky"
            animate={{
              opacity: inView ? 1 : 0.8,
              y: inView ? 0 : 100,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 0.7, 0.2, 1],
              delay: 0.5,
            }}
          >
            Connect With Me
          </motion.div>
        </div>
        <div className="xl:text-[25vh] text-3xl whitespace-nowrap font-medium font-ppneuemonteral overflow-hidden leading-none relative text-[#13182e]">
          <motion.div
            className="sticky"
            animate={{
              opacity: inView ? 1 : 0.8,
              y: inView ? 0 : 500,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 0.7, 0.2, 1],
              delay: 0.35,
            }}
          >
            Get In Touch
          </motion.div>
        </div>
      </div>
      <div className="h-[45%] pb-[10vh] flex md:text-[6.5vh] sm:text-2xl text-xl font-MonumentExtended font-thin">
        <div className="w-1/2 flex flex-col px-[2vw]">
          {/* LinkedIn */}
          <motion.div
            className="h-1/2 flex items-center ml-[2vw] overflow-hidden relative text-white bg-background"
            onHoverStart={() => setLinkedinHover(true)}
            onHoverEnd={() => setLinkedinHover(false)}
          >
            <motion.div
              className="w-full bg-[#131212] absolute"
              variants={variants}
              animate={linkedinHover ? "visible" : "hidden"}
              transition={{ duration: 0.5, ease: [0.22, 0.7, 0.2, 1] }}
            ></motion.div>
            <motion.div
              className="relative w-full"
              animate={{
                y: inView ? 0 : 140,
                mixBlendMode: "difference",
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 0.7, 0.2, 1],
                delay: 0.6,
              }}
            >
              <Link
                href="https://www.linkedin.com/in/mdsahil-raja/"
                className="flex items-center justify-center pl-[2vw] w-full h-full z-10 mix-blend-difference"
              >
                LinkedIn
                <ArrowUpRight className="text-[50vh]" size={30} />
              </Link>
            </motion.div>
          </motion.div>

          {/* GitHub */}
          <motion.div
            className="h-1/2 flex items-center ml-[2vw] overflow-hidden relative bg-background"
            onHoverStart={() => setGithubHover(true)}
            onHoverEnd={() => setGithubHover(false)}
          >
            <motion.div
              className="w-full bg-[#251f1f] absolute"
              variants={variants}
              animate={githubHover ? "visible" : "hidden"}
              transition={{ duration: 0.5, ease: [0.22, 0.7, 0.2, 1] }}
            ></motion.div>
            <motion.div
              className="relative w-full"
              animate={{
                y: inView ? 0 : 140,
                mixBlendMode: "difference",
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 0.7, 0.2, 1],
                delay: 0.7,
              }}
            >
              <Link
                href="https://github.com/Not-Sahil-Raja/"
                className="flex items-center justify-center pl-[2vw] w-full h-full z-10 mix-blend-difference text-white"
              >
                GitHub
                <ArrowUpRight className="" size={30} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="w-1/2 flex flex-col px-[2vw]">
          {/* Twitter */}
          <motion.div
            className="h-1/2 flex items-center ml-[2vw] overflow-hidden relative bg-background"
            onHoverStart={() => setTwitterHover(true)}
            onHoverEnd={() => setTwitterHover(false)}
          >
            <motion.div
              className="w-full bg-[#3a3737] absolute"
              variants={variants}
              animate={twitterHover ? "visible" : "hidden"}
              transition={{ duration: 0.5, ease: [0.22, 0.7, 0.2, 1] }}
            ></motion.div>
            <motion.div
              className="relative w-full"
              animate={{
                y: inView ? 0 : 140,
                mixBlendMode: "difference",
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 0.7, 0.2, 1],
                delay: 0.8,
              }}
            >
              <Link
                href="https://twitter.com/NotSahilRaja"
                className="flex items-center justify-center pl-[2vw] w-full h-full z-10 mix-blend-difference text-white"
              >
                Twitter
                <ArrowUpRight className="" size={30} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Email */}
          <motion.div
            className="h-1/2 flex items-center ml-[2vw] overflow-hidden relative bg-background"
            onHoverStart={() => setEmptyHover(true)}
            onHoverEnd={() => setEmptyHover(false)}
          >
            <motion.div
              className="w-full bg-[#4b3e34] absolute"
              variants={variants}
              animate={emptyHover ? "visible" : "hidden"}
              transition={{ duration: 0.5, ease: [0.22, 0.7, 0.2, 1] }}
            ></motion.div>
            <motion.div
              className="relative w-full"
              animate={{
                y: inView ? 0 : 1000,
                mixBlendMode: "difference",
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 0.7, 0.2, 1],
                delay: 0.9,
              }}
            >
              <Link
                href="mailto:sahilraja2002@gmail.com"
                className="flex items-center justify-center pl-[2vw] w-full h-full z-10 mix-blend-difference text-white"
              >
                Email
                <ArrowUpRight className="" size={30} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
