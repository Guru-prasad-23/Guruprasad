import React from "react";
import { PROJECTS } from "../constants";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { motion, useScroll, useTransform } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeIn", type: "spring", stiffness: 100 },
  },
};
const ProjectsPage = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  return (
    <div className="bg-black h-max max-w-[1400px] m-auto">
      <div className="">
        <h1 className="border-l-4 border-yellow-600  p-4  mt-20 tex-6xl font-semibold">
          Projects
        </h1>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center py-8 gap-6"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            style={{ opacity, scale }}
            variants={itemVariants}
            custom={index}
            key={index}
          >
            <Card
              url={project.url}
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
              id={project.id}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
