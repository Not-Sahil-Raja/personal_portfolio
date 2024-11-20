"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Homepage from "@/components/HomePage";
import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import TechStacks from "@/components/TechStacks";
import Connect from "@/components/Connect";
import ThankYou from "@/components/ThankYou";
import StackProject from "@/components/StackProject";
import Reveal from "@/components/Reveal";
// import noise from "/noise.svg";

interface ProjectDataItem {
  projectName: string;
  image: string;
  link: string;
  details: string;
  pageLink: string;
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [techTranslateX, setTechTranslateX] = useState("-80%");
  const container = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    if (window.innerWidth < 768) setTechTranslateX("-140%");
  }, []);

  // For Homepage Component  Animation with Scroll
  const HomepageScale = useTransform(scrollYProgress, [0.01, 0.12], [1, 0.5]);
  const HomepageRotation = useTransform(
    scrollYProgress,
    [0.01, 0.12],
    ["0", "10deg"]
  );
  const HomepageOpacity = useTransform(
    scrollYProgress,
    [0.01, 0.09],
    [1, 0.25]
  );

  const TechstackVertical = useTransform(
    scrollYProgress,
    [0.63, 1],
    ["5%", techTranslateX]
  ); // For TechStacks Component Vertical Animation with Scroll

  const scaleProgressThankYouComp = useTransform(
    scrollYProgress,
    [0.8, 1],
    [0, 1]
  ); // For ThankYou Component Scale Animation with Scroll

  const rotationProgressThankYouComp = useTransform(
    scrollYProgress,
    [0.8, 1],
    ["15deg", "0deg"]
  ); // For ThankYou Component Rotation Animation with Scroll

  const ProjectData: ProjectDataItem[] = [
    {
      projectName: "Cypher",
      image: "./test.jpg",
      link: "https://cypher-theta.vercel.app/",
      details:
        "Our payment fraud application employs machine learning algorithms to detect suspicious transactions, flagging potential fraudulent activity in real-time.",
      pageLink: "/projects/cypher",
    },
    {
      projectName: "Agrico",
      image: "./test.jpg",
      details:
        "Agrico is an innovative EdTech platform empowering individuals and communities to learn modern farming practices and cultivate sustainable agricultural success.",

      link: "https://agrico.vercel.app/",
      pageLink: "/projects/agrico",
    },
    {
      projectName: "Cook's Book",
      image: "./test.jpg",
      details:
        "Cook's Book could evolve into a meal planning tool, suggesting recipes for the entire week that utilize overlapping ingredients and minimize waste.",

      link: "https://github.com/AvirupRay/CookBook",
      pageLink: "/projects/cooks_book",
    },
    {
      projectName: "RobinFood",
      image: "./test.jpg",
      details:
        "RobinFood is a web platform that bridges the gap between restaurants with surplus food and non-governmental organizations (NGOs), food banks, dedicated to distributing food to those in need.",

      link: "https://github.com/AvirupRay/reckon_5.0",
      pageLink: "/projects/robinfood",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <motion.div
      className={`relative select-none ${
        isLoading ? "h-screen overflow-hidden" : ""
      }`}
    >
      <Reveal />

      {/* Logo at the top left corner */}

      <div ref={container} className=" ">
        {/* Header Component with Navigation Links */}
        <Header delayTime={3.0} />
        <motion.section className="block">
          {/* Rending the Homepage Component */}
          <section
            className=" block w-[calc(100vw-3px)] min-h-[200vh] mb-[-100vh]"
            id="home"
          >
            <Homepage
              scaleV={HomepageScale}
              rotationV={HomepageRotation}
              opacityV={HomepageOpacity}
              color={"1f2a47"}
            />
          </section>

          {/* Rendering the Projects Component List */}
          <section
            ref={projectRef}
            className="h-[400vh] sticky top-0 z-30"
            id="Projects" // For Navigation
          >
            {ProjectData.map((data, index) => (
              <StackProject index={index} key={index} data={data} />
            ))}
          </section>
        </motion.section>

        {/* Rendering the AboutMe Component */}

        <AboutMe />

        {/* Rendering the TechStacks Component */}

        <motion.section className="relative h-[300vh] text-5xl" ref={techRef}>
          <section
            className="h-screen w-[calc(100vw-3px)] flex flex-col  sticky top-[0px] z-30"
            style={{ position: "sticky" }}
            id="TechStacks" // For Navigation
          >
            <div className="h-[15%]  overflow-hidden"></div>
            <TechStacks TechstackVertical={TechstackVertical} />
          </section>
        </motion.section>

        {/* Rendering the Connect Component */}

        <section
          className="h-[200vh] w-[calc(100vw-3px)]  flex flex-col relative"
          ref={connectRef}
          id="Contacts" // For Navigation
        >
          <Connect />
          <ThankYou
            scaleProgress={scaleProgressThankYouComp}
            rotationProgress={rotationProgressThankYouComp}
          />
        </section>

        {/* Rendering the ThankYou Component */}
      </div>
    </motion.div>
  );
}
