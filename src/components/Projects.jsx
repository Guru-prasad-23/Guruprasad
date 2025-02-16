import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import Card from "./Card";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 3,
      staggerChildren: 0.2,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: 0.5, duration: 2 },
  },
};

const Projects = () => {
  return (
    <div id="projects">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="mt-20 text-center text-4xl font-semibold"
      >
        {" "}
        Projects
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center py-8"
      >
        {PROJECTS.slice(0, 4).map((project, index) => (
          <motion.div variants={itemVariants} key={index}>
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
      <div className="w-full flex items-center justify-center">
        <Link to={'/projects'} className="text-center w-max p-2 border border-neutral-600 text-neutral-400 hover:text-neutral-200 hover:border-neutral-800 rounded-md hover:scale-105 transition-all duration-100">
          Explore More Projects
        </Link>
      </div>
    </div>
  );
};

export default Projects;
