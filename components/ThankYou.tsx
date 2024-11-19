import { ArrowUp } from "lucide-react";
import React, { useRef, useState, MouseEvent } from "react";
import { motion, MotionValue } from "framer-motion";
import Link from "next/link";
import { line, linearGradient } from "framer-motion/client";

interface ThankYouProps {
  scaleProgress: MotionValue<number>;
  rotationProgress: MotionValue<string>;

  // other props
}

const ThankYou: React.FC<ThankYouProps> = ({
  scaleProgress,
  rotationProgress,
}) => {
  const [arrowHover, setArrowHover] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const ref = useRef<HTMLDivElement | null>(null);

  const mouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const { clientX, clientY } = e;
      const { width, height, top, left } = ref.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      setPosition({ x, y });
    }
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setArrowHover(false);
  };

  const { x, y } = position;

  return (
    <motion.div
      className="w-full select-none h-screen bg-[#d6dee9] flex items-center font-Blackbird justify-center relative"
      style={{
        scale: scaleProgress,
        rotate: rotationProgress,
        background: "linear-gradient(0deg, #f5f5f5, #303083)",
      }}
    >
      <div className="flex flex-col text-center">
        <motion.span
          className="lg:text-[6vh] text-[3vh] leading-none whitespace-nowrap font-Coolvetica text-[#FFFFFF]"
          initial={{
            opacity: 0,
            rotateX: "30deg",
            y: 20,
            x: -10,
          }}
          whileInView={{
            opacity: 1,
            rotateX: "0deg",
            y: 0,
            x: 0,
          }}
          transition={{
            delay: 0.5,
          }}
        >
          Thank You For Visiting My Website !
        </motion.span>
        <motion.span
          className="text-[5vh] font-Coolvetica text-[#e9e9ff]"
          initial={{
            opacity: 0,
            rotateX: "30deg",
            y: 20,
            x: -10,
          }}
          whileInView={{
            opacity: 1,
            rotateX: "0deg",
            y: 0,
            x: 0,
          }}
          transition={{
            delay: 0.625,
          }}
        >
          Have a great day
        </motion.span>
        <motion.div
          className=" text-lg mt-7 text-[#303083] "
          initial={{
            opacity: 0,
            rotateX: "30deg",
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            rotateX: "0deg",
            y: 0,
          }}
          transition={{
            delay: 0.7,
          }}
        >
          <Link
            href="/"
            className="text-[#4242b4] hover:text-[#191946] border bg-white/50 border-[#303083] rounded-sm px-3 py-1 font-BitxMap"
          >
            DROP ME A LINE
          </Link>
        </motion.div>
        {/* Copyright */}
        <div className="text-[2vh] mt-[5vh] absolute bottom-[2%] right-[5%]">
          <span>© 2024 Sahil Raja</span>
        </div>
        <div className="text-[2vh] mt-[5vh] rounded-full absolute bottom-[10%] left-[8%]">
          <motion.div
            className="w-[5rem] h-[5rem] rounded-full cursor-pointer overflow-hidden z-30 bg-[#213577] border flex relative"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            ref={ref}
            onMouseEnter={() => setArrowHover(true)}
            onMouseLeave={mouseLeave}
            onMouseMove={mouseMove}
            animate={{
              x,
              y,
              scale: arrowHover ? 0.8 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
              mass: 0.1,
            }}
          >
            <ArrowUp
              className="m-auto text-white/90 mix-blend-difference opacity-0"
              size={40}
            />
            <motion.div
              className="flex items-center justify-center absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)]"
              animate={{
                transform: arrowHover
                  ? "translate(-50%,-250%)"
                  : "translate(-50%,-50%)",
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.22, 0.7, 0, 1],
              }}
            >
              <ArrowUp className="text-white mix-blend-difference" size={40} />
            </motion.div>
            <motion.div
              className="flex items-center justify-center absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)]"
              animate={{
                transform: arrowHover
                  ? "translate(-50%,-50%)"
                  : "translate(-50%,250%)",
              }}
              transition={{
                duration: 0.5,
                delay: 0.03,
                ease: [0.22, 0.7, 0, 1],
              }}
            >
              <ArrowUp className="text-white/70" size={40} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ThankYou;
