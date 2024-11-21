import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectData {
  projectName: string;
  details: string;
  image: string;
  link: string;
  pageLink: string;
}

interface StackProjectProps {
  index: number;
  data: ProjectData;
}

const StackProject: React.FC<StackProjectProps> = ({ index, data }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.45 });

  const ImageScaleVariants = {
    hidden: {
      scale: 1.05,
    },
    visible: {
      scale: 1,
      transition: {
        ease: [0.85, 0, 0.15, 1],
        duration: 1,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      y: 200,
    },
    visible: {
      y: 0,
    },
  };

  return (
    <div
      ref={ref}
      key={index}
      className={`h-screen w-full pb-5 flex items-center justify-center overflow-hidden text-white`}
      style={{
        background:
          index === 0
            ? "linear-gradient(0deg, #F5F5F5 0%, rgba(225,223,221,1) 100%)"
            : "#F5F5F5",
      }}
    >
      <motion.div
        className={`lg:w-full h-[89%] mt-10 lg:mx-4 sm:w-[80%] w-[95%] sm:p-1 p-0 lg:p-4 flex flex-col relative rounded-md origin-bottom`}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 100,
          scale: isInView ? 1 : 0.85, // Add a scale effect for subtle pop-in
        }}
        transition={{
          duration: 0.8, // Increase the duration for a smoother effect
          ease: [0.6, -0.05, 0.01, 0.99], // Use a spring-like easing for bounce
          delay: 0.22, // Retain the delay for staging
        }}
      >
        {" "}
        <motion.div
          className="lg:h-[90%] h-[70%]  mb-5 overflow-hidden relative"
          initial="hidden"
          whileHover="visible"
        >
          <Link href={data.pageLink}>
            <motion.img
              src={data.image}
              className="rounded aspect-video object-contain h-full w-full"
              variants={ImageScaleVariants}
              alt={data.projectName}
              transition={{
                duration: 0.5,
                ease: [0.85, 0, 0.15, 1],
              }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-Coolvetica text-white overflow-hidden rounded  tracking-wider ">
              <motion.div
                className="px-4 py-2 bg-[#212129]"
                variants={buttonVariants}
                transition={{
                  duration: 0.5,
                  ease: [0.85, 0, 0.15, 1],
                }}
              >
                EXPLORE PROJECT
              </motion.div>
            </div>
          </Link>
        </motion.div>
        <div className="lg:h-[9%] h-[28%] mt-[.5vh] lg:w-full flex lg:flex-row flex-col text-center xl:px-[.5vw] md:px-0 py-[2vh] items-center lg:justify-normal justify-center text-[#303083] font-Geist">
          <div className="xl:text-[4vh] md:text-2xl whitespace-nowrap font-MonumentExtended pb-[1vh] lg:flex-1">
            {data.projectName}
          </div>
          <div className=" lg:text-lg lg:leading-tight lg:mb-0 mb-2  leading-none opacity-85 overflow-hidden text-ellipsis  lg:flex-[3]">
            <div className="sm:mx-10 mx-0 text-justify md:text-center text-[#323269] font-ppneuemonteral font-medium">
              {data.details}
            </div>
          </div>
          <div className="flex items-start justify-center lg:flex-1">
            <motion.div className="bg-[#213577] px-[1vw] py-[.5vh] rounded-sm ">
              <Link
                href={data.link}
                target="_blank"
                className="flex items-center justify-center gap-1 font-medium text-white font-BitxMap"
              >
                Visit {data.projectName} <ArrowUpRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StackProject;
