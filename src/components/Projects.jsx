import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import Card from "./Card";

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
  visible: { opacity: 1, scale: 1, y:0, transition: { delay:0.5,duration: 2 } },
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
        {PROJECTS.map((project, index) => (
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
    </div>
  );
};

export default Projects;
