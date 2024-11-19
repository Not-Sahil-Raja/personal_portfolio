import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Pause, Play } from "lucide-react";

interface ProjectData {
  projectName: string;
  details: string;
  video: string;
  color: string;
  link: string;
}

interface StackProjectProps {
  index: number;
  data: ProjectData;
}

const StackProject: React.FC<StackProjectProps> = ({ index, data }) => {
  const [vidPlaying, setVidPlaying] = useState(false);
  const [videoHover, setVideoHover] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div
      key={index}
      className={`h-screen w-full pb-5   flex items-center justify-center  text-white `}
      style={{
        background:
          index === 0
            ? "linear-gradient(0deg, #F5F5F5 0%, rgba(225,223,221,1) 100%)"
            : "#F5F5F5",
      }}
    >
      <div
        className={`lg:w-full h-[89%] mt-10 lg:mx-4 w-[80%] p-1 lg:p-4 flex flex-col relative   rounded-md `}
      >
        <video
          src={data.video}
          className="rounded aspect-video lg:h-[90%] object-cover object-center"
          loop
          ref={videoRef}
          onMouseEnter={() => setVideoHover(true)}
          onMouseLeave={() => setVideoHover(false)}
          muted={true}
        />
        <div className="h-[9%] mt-[.5vh] lg:w-full flex text-center px-[.5vw] py-[2vh] items-center text-[#303083] font-Geist">
          <div className=" text-[4vh] whitespace-nowrap font-MonumentExtended pb-[1vh] flex-1">
            {data.projectName}
          </div>
          <div className=" text-[1.8vh]  opacity-85 overflow-hidden text-ellipsis  flex-[3]">
            <div className="mx-10 text-lg text-[#323269] font-ppneuemonteral font-medium">
              {data.details}
            </div>
          </div>
          <div className="flex items-start justify-center flex-1">
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
      </div>
    </div>
  );
};

export default StackProject;
