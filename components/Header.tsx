import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";

const Header: React.FC = ({}) => {
  const DELAY = 3.0;
  const [pageActive, setPageActive] = useState<number>(1);
  const [mobMenu, setMobMenu] = useState<boolean>(false);

  const sections = [
    { label: "HOME", id: "home", index: 1 },
    { label: "PROJECTS", id: "Projects", index: 2 },
    { label: "ABOUT ME", id: "About", index: 3 },
    { label: "TECHSTACKS", id: "TechStacks", index: 4 },
    { label: "CONTACTS", id: "Contacts", index: 5 },
  ];

  const mobMenuVariants = {
    closed: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.25,
        staggerDirection: 1,
      },
    },
  };

  const mobMenuItems = {
    closed: {
      y: 100,
      transition: {
        duration: 0.3,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  return (
    <>
      <motion.div
        className="2xl:h-12 md:h-10 text-center  font-BitxMap text-[2vh] px-[2vw] rounded-xl fixed mix-blend-difference text-white top-[5.5vh] [transform:translate(0%,-50%)] z-[35]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        initial={{
          top: "-10vh",
        }}
        animate={{
          top: "5.5vh",
          transition: {
            duration: 1.5,
            delay: DELAY + 0.25,
            ease: [0.22, 0.7, 0, 1],
          },
        }}
      >
        {/* Navigation Buttons */}
        <div className="relative lg:w-full lg:opacity-100 h-full w-0 opacity-0 backdrop-blur-[1px] border border-white/70 rounded-sm">
          <div className="w-full h-full flex items-center justify-center">
            <Link href="/">
              <div className=" text-[2.5vh] h-full px-6 leading-none mix-blend-difference font-MonumentExtended  flex justify-center items-center relative">
                <motion.span
                  className=" inline-block"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: DELAY + 0.65,
                    ease: [0.22, 0.7, 0, 1],
                  }}
                >
                  ✦ SAHIL{" "}
                </motion.span>
              </div>
            </Link>
            {sections.map(({ label, id, index }) => (
              <motion.button
                key={id}
                className={`mx-4 relative overflow-hidden   ${
                  pageActive === index ? "text-white" : "text-white/70"
                }`}
                onClick={() => {
                  document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth" });
                  setPageActive(index);
                }}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: DELAY + 0.5 + index * 0.1,
                  ease: [0.22, 0.7, 0, 1],
                }}
              >
                <div className="text-base whitespace-nowrap flex gap-2 items-center">
                  <motion.div
                    className="p-1 w-6 h-6 aspect-square  mix-blend-difference rounded-full flex items-center justify-center"
                    animate={
                      pageActive === index
                        ? { opacity: 1, scale: 1, rotate: 120 }
                        : { opacity: 0, scale: 0.0, rotate: 0 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    <p>✱</p>
                  </motion.div>

                  <p className="  font-medium">{label}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Toggle */}
      <div
        onClick={() => setMobMenu(!mobMenu)}
        className="lg:scale-0 fixed top-0 right-0 z-[1001] p-4 text-white mix-blend-difference"
      >
        {mobMenu ? <X /> : <MenuIcon />}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobMenu && (
          <motion.div
            className="w-full h-screen flex flex-col justify-center items-center font-BitxMap fixed top-0 z-[1000] origin-top"
            style={{
              background:
                "linear-gradient(360deg, #9d9dee -50%, rgba(17,19,19,1) 34%, #4242b4 150%)",
            }}
            initial={{
              scaleY: 0,
            }}
            animate={{
              scaleY: 1,
              transition: {
                duration: 0.5,
                ease: [0.22, 0.7, 0.2, 1],
              },
            }}
            exit={{
              scaleY: 0,
              transition: {
                duration: 0.5,
                ease: [0.22, 0.7, 0.2, 1],
                delay: 0.5,
              },
            }}
          >
            <motion.div
              variants={mobMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {sections.map(({ label, id }) => (
                <div
                  key={id}
                  className="text-[4.5vh] overflow-hidden text-center"
                  onClick={() => {
                    document
                      .getElementById(id)
                      ?.scrollIntoView({ behavior: "smooth" });
                    setMobMenu(false);
                  }}
                >
                  <motion.div
                    variants={mobMenuItems}
                    className=" mix-blend-difference text-white"
                  >
                    {label}
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
