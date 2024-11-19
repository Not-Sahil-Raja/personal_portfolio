import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import Link from "next/link";
import Image from "next/image";

const AboutMe: React.FC = () => {
  const abtTextRef = useRef<HTMLDivElement>(null);
  const abtTextInV = useInView(abtTextRef);

  const textVariants = {
    hidden: { y: "-100%" },
    visible: { y: 0 },
  };

  return (
    <div className="h-[200vh] relative w-[calc(100vw-3px)]" id="About">
      <div className="w-full h-full absolute flex flex-col select-none overflow-hidden">
        <div className="flex-1 relative">
          <motion.div
            className="absolute h-fit left-1/2 top-1/2 lg:w-1/3 w-[95%] mix-blend-color-difference text-white/80 font-ppneuemonteral flex-wrap flex text-[3vh] leading-none flex-col text-center tracking-wide [transform:translate(-50%,-50%)]"
            ref={abtTextRef}
            animate={{
              opacity: abtTextInV ? 1 : 0,
            }}
            transition={{
              duration: 0.5,
              type: "tween",
              ease: [0.42, 0, 0.58, 1],
              delay: 0.2,
            }}
          >
            <span className="text-[6vh] pb-[3vh] font-BitxMap">
              Hi! I'm Sahil
            </span>
            A full-stack web developer passionate about creating seamless online
            experiences. With expertise in both front-end and back-end
            technologies, I specialize in turning ideas into polished,
            functional websites.
            <br />
            ._.
          </motion.div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col w-full h-full">
            <div className="h-3/5"></div>
            <div className="h-2/5 flex flex-col justify-end items-center">
              <div className="lg:w-full w-full flex flex-col z-50 mb-[3vh] items-center font-ppneuemonteral mix-blend-difference font-medium tracking-wider justify-center pl-[2vw] overflow-hidden text-white ">
                {[
                  "Crafting ideas into seamless web experiences.",
                  "Bridging code and creativity with passion.",
                  "Empowering innovation through technology and learning.",
                ].map((texts, index) => {
                  return (
                    <motion.div
                      key={index}
                      className=" text-[5vh] relative block overflow-hidden whitespace-nowrap leading-none "
                      initial="hidden"
                      whileInView="visible"
                    >
                      {texts.split("").map((letter, i) => (
                        <motion.span
                          key={i}
                          className={`inline-block ${
                            letter === " " ? "w-[0.25em]" : "" // Add space for whitespace
                          }`}
                          variants={textVariants}
                          transition={{
                            duration: 0.5,
                            type: "tween",
                            ease: [0.42, 0, 0.58, 1],
                            delay: i * 0.02,
                          }}
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </motion.div>
                  );
                })}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  ease: [0.42, 0, 0.58, 1],
                }}
              >
                <Link
                  className="text-[#e1e8ff] bg-[#1c2330] w-fit flex items-center justify-center mb-[3vh] border border-b-4 max-h-16 overflow-hidden rounded-2xl "
                  href="https://drive.google.com/file/d/1gIHebwsb9Bf1h_k8N3FHjM03bNIPaXIT/view?usp=sharing"
                  target="_blank"
                  style={{
                    backgroundImage: "linear-gradient(#0006,#0006)",
                  }}
                >
                  <div className="relative  inline-block rounded-2xl overflow-hidden">
                    <div className=" h-14 z-[2] gap-0 flex flex-col flex-wrap justify-start items-start absolute inset-0 overflow-hidden">
                      {Array.from({ length: 50 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-4 aspect-square  backdrop-blur-lg"
                        ></div>
                      ))}
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/66eaf405e1b746ebf4dc5359/66fb35560a24e0a7004e3dcc_Nuages.gif%20to%20WebP.webp"
                      alt=""
                      className="z-[1] max-h-16  absolute w-full inset-0 object-cover opacity-40 mix-blend-color-dodge"
                    />
                    <motion.div
                      className="text-[2.35vh]   px-5 py-2 font-MonumentExtended z-[3] whitespace-nowrap shadow-xl box-content block overflow-hidden relative"
                      initial="initial"
                      whileHover="hovered"
                    >
                      <div className=" relative overflow-hidden tracking-wide">
                        <div className="  leading-tight tracking-wider">
                          {"View Resume".split("").map((letter, index) => (
                            <motion.span
                              className={`inline-block ${
                                letter === " " ? "w-[0.25em]" : ""
                              }`}
                              key={index}
                              variants={{
                                initial: { y: 0 },
                                hovered: { y: "200%" },
                              }}
                              transition={{
                                delay: index * 0.025,
                                duration: 0.25,
                                ease: "easeInOut",
                              }}
                            >
                              {letter}
                            </motion.span>
                          ))}
                        </div>
                        <div className=" absolute inset-0 tracking-wider">
                          {"View Resume".split("").map((letter, index) => (
                            <motion.span
                              className={`inline-block leading-tight  ${
                                letter === " " ? "w-[0.25em]" : ""
                              }`}
                              key={index}
                              variants={{
                                initial: { y: "-200%" },
                                hovered: { y: 0 },
                              }}
                              transition={{
                                delay: index * 0.025,
                                duration: 0.25,
                                ease: "easeInOut",
                              }}
                            >
                              {letter}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/Image.png"
        className="w-full h-full object-cover -z-10"
        alt=""
        fill
      />
    </div>
  );
};

export default AboutMe;
