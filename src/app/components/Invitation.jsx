"use client";
import React, { useState, useRef } from "react";
//import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";


const projectsData = [
  {
    id: 1,
    title: "Deshboard",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "ClientSide"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const Invitation = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mt-4 mb-8 md:mb-12">
         הזמנה
      </h2>
      <ul ref={ref} className="grid gap-8 md:gap-12">
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
             <div>
             <div className="flex justify-center items-center w-full h-full">
                  <img src={"/images/projects/feldmanWedding.jpeg"} alt="Centered Image" className="h-[500px] w-[800px]" />
             </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        {/* <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p> */}
      </div>
    </div>
          </motion.li>
      </ul>
    </section>
  );
};
export default Invitation;
