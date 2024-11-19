import React from "react";
import { motion, MotionValue } from "framer-motion";

// Define the type for each tech stack category
interface TechStackCategory {
  name: string;
  stacks: string[];
  details: string;
}

// Define the props for the TechStacks component
interface TechStacksProps {
  TechstackVertical: MotionValue<string>;
}

// Define the static data with type annotations
const AllTechStacks: TechStackCategory[] = [
  {
    name: "Front end Technologies",
    stacks: [
      "Next JS",
      "React Js",
      "Tailwind Css",
      "JavaScript",
      "Redux Toolkit",
    ],
    details: "creating functional and optimized website with these techStacks.",
  },
  {
    name: "Back end Technologies",
    stacks: ["Express Js", "Node Js", "Fast API", "Flask", "Mongo DB"],
    details: "creating APIs, Server & Databases with all of these.",
  },
  {
    name: "Programming Languages",
    stacks: ["JavaScript", "C++", "Python"],
    details: "writing optimized code with these languages.",
  },
  {
    name: "Design Tools",
    stacks: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "After Effects"],
    details: "creating wireframes, mockups, and designs with these tools.",
  },
];

const TechStacks: React.FC<TechStacksProps> = ({ TechstackVertical }) => {
  return (
    <div className="h-[80%] select-none bg-gradient-to-b  relative overflow-hidden ">
      <div
        className="absolute h-full lg:w-[15%] w-[0%] bg-gradient-to-r from-[#00000000] from-[#ffffff88 z-20 right-0 mix-blend-difference"
        style={{
          maskImage: "linear-gradient(to left,  white 5%, transparent 100%)",
        }}
      ></div>
      <div
        className="absolute h-full lg:w-[15%] w-[0%] bg-gradient-to-r to-[#00000000] from-[#ffffff88] z-20 left-0 mix-blend-difference"
        style={{
          maskImage: "linear-gradient(to right, white 5%, transparent 100%)",
        }}
      ></div>
      <motion.div
        className="h-full w-fit flex brightness-50 opacity-0 border-t-[1px] border-[#213577]/30"
        initial={{
          x: "200%",
        }}
        style={{
          x: TechstackVertical,
        }}
        whileInView={{
          filter: "brightness(100%)",
          opacity: 1,
          transition: { duration: 0.5, ease: [0.22, 0.7, 0.2, 1] },
        }}
      >
        {AllTechStacks.map((item, index) => (
          <motion.div
            className={`h-full lg:w-[35vw] w-[80vw] border-[#213577]/30  border-l border-b ${
              index === 3 && "border-r"
            } px-[1.5vw] py-[2vh] flex flex-col font-FixelText`}
            key={index}
          >
            <div className="pt-[3vh] h-[70%] flex flex-col lg:text-[3.2vh] text-[2vh]">
              {item.stacks.map((stack, stackIndex) => (
                <motion.div
                  className="w-full py-[.5vh] border-b mb-[2vh] relative border-[#213577]/30 text-black/80"
                  key={stackIndex}
                  whileHover={{
                    x: 10,
                    color: "#404097",
                    transition: { duration: 0.2, ease: [0.22, 0.7, 0.2, 1] },
                  }}
                >
                  <motion.div className="overflow-hidden font-ppneuemonteral font-medium mix-blend-difference ">
                    <motion.span
                      className="relative"
                      animate={{
                        y: -10,
                      }}
                    >
                      {stack}
                    </motion.span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            <div className="h-[30%] flex flex-col justify-center  mix-blend-difference ">
              <span className="lg:text-[3.6vh] text-[2.5vh] pb-[1vh] font-ppneuemonteral font-medium  text-[#282869]">
                {item.name}
              </span>
              <span className="text-wrap lg:text-[3vh] text-[2vh] leading-none font-ppneuemonteral font-medium  text-[#404097]">
                {item.details}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStacks;
