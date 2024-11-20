"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeftIcon, Github, Globe } from "lucide-react";
import Link from "next/link";

interface ProjectDetails {
  projectName: string;
  projectTitle: string;
  details: string[];
  link: string[];
  images?: string[];
}

const page = () => {
  const projectDetails: ProjectDetails[] = [
    {
      projectName: "kidney_disease_ai",
      projectTitle: "Kidney Disease AI: classifies kidney disease",
      details: [
        "Kidney Disease AI uses a TensorFlow sequential model to classify kidney diseases via CT scans. It achieves 99.5% accuracy and offers FastAPI endpoints for seamless predictions.",
        "The model trains on a dataset featuring normal kidneys, cysts, tumors, and stones. Including non-kidney images improves classification precision, ensuring reliable performance in diverse real-world scenarios.",
        "Key challenges addressed include reducing model size, enhancing classification for varied images, and deploying efficiently. This project showcases deep learning transformative potential in advancing healthcare diagnostics.",
        "Leveraging TensorFlow's sequential architecture, this model excels in kidney disease classification with 99.5% accuracy. FastAPI integration transforms predictions into swift, actionable insights, empowering healthcare with real-time CT scan analysis and robust identification of kidney anomalies across diverse cases.",
      ],
      images: ["/test.jpg", "/test.jpg", "/test.jpg"],
      link: [
        "https://github.com/Not-Sahil-Raja/KindneyDiseaseClassification",
        "https://kidneyhealthai.vercel.app/",
      ],
    },
    {
      projectName: "cypher",
      projectTitle: "Cypher: A payment fraud detection application",
      details: [
        "Real-Time Monitoring: TransactionGuard keeps an eye on every transaction as it happens, quickly spotting anything unusual or suspicious. Our system makes sure no fraudulent activity slips through the cracks, giving you peace of mind.",
        "Advanced Machine Learning: With cutting-edge machine learning models, TransactionGuard analyzes tons of data. Our models learn from past transactions to get better at detecting fraud over time, staying ahead of new and evolving threats.",
        "Behavioral Analysis: TransactionGuard looks at user behavior and transaction patterns to catch anything that seems off. By understanding what typical actions look like, our system can quickly spot any unusual activity that might indicate fraud.",
        "Our fraud detection model uses supervised learning on historical transaction data, employing features like transaction amount, type, and user behavior. Algorithms such as Random Forest and Gradient Boosted Trees classify transactions, continuously improving accuracy for real-time fraud prevention.",
      ],
      images: ["/test.jpg", "/test.jpg", "/test.jpg"],

      link: [
        "https://github.com/Roushan1512/Payments-Fraud-Detection",
        "https://cypher-theta.vercel.app/",
      ],
    },
    {
      projectName: "agrico",
      projectTitle: "Agrico: an innovative EdTech platform",
      details: [
        "Access a rich library of courses, tutorials, and resources covering diverse farming topics, from soil science and crop management to pest control and business skills.",
        "Explore self-paced learning paths based on your interests and experience level. Earn badges and track your progress as you master new skills.",
        "Connect with fellow learners, share experiences, and ask questions in our vibrant online forums and discussion groups.",
        "Agrico is an innovative EdTech platform empowering individuals and communities to learn modern farming practices and cultivate sustainable agricultural success. ",
      ],
      images: ["/test.jpg", "/test.jpg", "/test.jpg"],
      link: [
        "https://github.com/Not-Sahil-Raja/Agrico_",
        "https://agrico.vercel.app/",
      ],
    },
    {
      projectName: "cooks_book",
      projectTitle: "Cooks Book: Recipe Generator Built to Rescue Your Fridge",
      details: [
        "Cook's Book is a recipe generator with a twist. Unlike traditional recipe sites, it doesn't require a specific shopping list. Instead, you tell Cook's Book your ingredients, and it creates recipes based on those.",
        "Users input available ingredients, and Cook's Book generates recipes based on those items.",
        "Connect with fellow learners, share experiences, and ask questions in our vibrant online forums and discussion groups.",
        "It all began with a burnt pan and a fridge overflowing with forgotten leftovers. A hungry college student facing a culinary wasteland, I stared at a lone chicken breast and withering vegetables, yearning for a recipe that used what I actually had. Frustrated by existing recipe databases that demanded specific ingredients, a spark ignited! Why not create a recipe generator that empowers, not restricts? Imagine a tool that transforms your random fridge finds into delicious dishes!",
      ],
      images: ["/test.jpg", "/test.jpg", "/test.jpg"],
      link: [
        "https://github.com/Not-Sahil-Raja/Agrico_",
        "https://agrico.vercel.app/",
      ],
    },
  ];

  const { projectId } = useParams();
  const project = projectDetails.find(
    (project) => projectId === project.projectName
  );

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const buttonVariants = {
    initial: { y: 0 },
    hidden: { y: 100 },
  };

  return (
    <motion.div
      className="pt-[10vh] px-[5vw] h-fit w-full"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={staggerContainer}
    >
      {project && (
        <div className="flex flex-col">
          {/* Heading Part */}
          <motion.div className="h-[70vh] mt-[13vh] p-4" variants={fadeInUp}>
            <div className="flex flex-col h-full gap-4 items-center">
              <motion.div
                className="text-4xl font-MonumentExtended mb-4 px-8 text-center"
                variants={fadeInUp}
              >
                {project?.projectTitle}
              </motion.div>
              <motion.div className="flex gap-4" variants={fadeInUp}>
                <Link
                  href={project.link[1] || "#"}
                  target="_blank"
                  className="text-lg flex items-center gap-2 px-2 py-1 bg-[#344783] text-white/90 rounded font-ppneuemonteral font-medium tracking-wider hover:scale-105 transition-transform"
                >
                  <Globe />
                  Live Application
                </Link>
                <Link
                  href={project?.link[0] || "#"}
                  target="_blank"
                  className="text-lg flex items-center gap-2 px-2 py-1 bg-[#2f3853] text-white/90 rounded font-ppneuemonteral font-medium tracking-wider hover:scale-105 transition-transform"
                >
                  <Github />
                </Link>
              </motion.div>
              <motion.div
                className="text-lg flex flex-col mt-auto mb-4 px-8"
                variants={staggerContainer}
              >
                {project.details.slice(0, 3).map((detail, index) => (
                  <motion.div
                    key={index}
                    className="h-full font-ppneuemonteral font-medium text-[1.35rem] mb-2"
                    variants={fadeInUp}
                  >
                    {detail}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
          {/* First Image Part */}
          <motion.div className="h-[80vh] px-5 py-5">
            {project.images?.[0] && (
              <motion.img
                src={project?.images?.[0]}
                alt=""
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                variants={imageAnimation}
              />
            )}
          </motion.div>
          {/* Second Text Part */}
          <motion.div
            className="text-lg flex flex-col pt-16 px-8 pb-24"
            variants={fadeInUp}
          >
            {project.details.slice(3, 4).map((detail, index) => (
              <motion.div
                key={`detail-${index}`}
                className="h-full text-center font-ppneuemonteral font-medium text-[1.35rem] mb-2"
                variants={fadeInUp}
              >
                {detail}
              </motion.div>
            ))}
          </motion.div>
          {/* Other Images Part */}
          {project?.images?.slice(1).map((image, index) => (
            <motion.div className="h-[80vh] px-5 py-5" key={`image-${index}`}>
              <motion.img
                src={image}
                alt={`Project image ${index + 2}`}
                className="object-cover w-full h-full mb-10 hover:scale-105 transition-transform duration-500"
                variants={imageAnimation}
              />
            </motion.div>
          ))}
          {/* Go Back and Contact Buttons */}
          <motion.div
            className="h-[10vh] px-10 flex items-center justify-between"
            variants={fadeInUp}
          >
            <motion.div initial="initial" whileHover="hidden">
              <Link
                href="/"
                className="bg-[#4242b4] text-white border border-[#303083] rounded-sm px-3 py-1 font-BitxMap   flex"
              >
                <div className="relative overflow-hidden">
                  <motion.div
                    variants={buttonVariants}
                    className=" inline-block"
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                    }}
                  >
                    GO BACK
                  </motion.div>
                  <motion.div
                    variants={{
                      initial: { y: "-200%" },
                      hidden: { y: 0 },
                    }}
                    className=" inline-block absolute inset-0"
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                    }}
                  >
                    GO BACK
                  </motion.div>
                </div>
              </Link>
            </motion.div>
            <Link
              href="mailto:sahilraja2002@gmail.com"
              className="text-[#4242b4] hover:text-[#191946] border bg-white/50 border-[#303083] rounded-sm px-3 py-1 font-BitxMap "
            >
              DROP ME A LINE
            </Link>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default page;
