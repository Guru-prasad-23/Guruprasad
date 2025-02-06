import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((proj) => proj.id.toString() === id);

  if (!project) {
    return <h2 className="text-center text-2xl mt-10">Project Not Found</h2>;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="h-screen container mx-auto p-6 flex flex-col items-center"
    >
      <div className="relative w-full max-w-4xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[250px] object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
          <h1 className="text-white text-3xl font-bold p-4 text-center">
            {project.title}
          </h1>
        </div>
      </div>

      <motion.p
        className="mt-6 max-w-3xl text-2xl text-gray-700 dark:text-gray-300 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
      >
        {project.subtitle}
      </motion.p>
      <motion.p
        className="mt-6 max-w-3xl text-lg text-gray-700 dark:text-gray-500 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
      >
        {project.description}
      </motion.p>

      <motion.button
        onClick={() => window.open(project.url, "_blank")}
        className={
          project.url !== ""
            ? "mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            : "hidden"
        }
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.4 } }}
      >
        Visit Project
      </motion.button>
      <motion.p
      className={project.url ? "hidden":"text-gray-500 mt-12 "}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.4 } }}
      >
        *There is no Preview for this Project*
      </motion.p>
    </motion.div>
  );
};

export default ProjectDetails;
