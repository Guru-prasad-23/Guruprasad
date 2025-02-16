import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-4xl font-bold"
      >
        About Me
      </motion.h2>

      {/* Name & Designation */}
      <motion.h3
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl font-extrabold uppercase mt-8 text-center"
      >
        Guru Prasad
      </motion.h3>
      <p className="text-center text-lg font-medium mt-2">
        Full-Stack Developer | Mechanical Engineer
      </p>

      {/* Short Introduction */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-6 text-lg leading-relaxed text-center"
      >
        I build modern, responsive, and functional web applications with a focus on clean UI and seamless user experience.  
        Passionate about problem-solving, I create full-stack solutions that bring ideas to life.
      </motion.p>

      {/* Projects Info */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <h3 className="text-2xl font-semibold">Projects</h3>
        <p className="mt-2 text-lg">
          All my projects are personal and practice-based, built to enhance my skills and explore new technologies.
        </p>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <h3 className="text-2xl font-semibold">Technical Skills</h3>
        <ul className="mt-4 space-y-2 text-lg list-disc pl-6">
          <li>React.js, Node.js, Express.js, MongoDB</li>
          <li>JavaScript, HTML, CSS, Tailwind CSS, Framer Motion</li>
          <li>Authentication: JWT, Firebase</li>
          <li>Real-time features: WebSockets, Socket.io</li>
          <li>Backend APIs & Database Management</li>
        </ul>
      </motion.div>

      {/* Capabilities with Animated Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <h3 className="text-2xl font-semibold">What I Can Build</h3>
        <div className="mt-4 grid grid-cols-2 gap-6">
          <Capability title="Responsive Web Design" />
          <Capability title="Minimal Animations" />
          <Capability title="RESTful API Development" />
          <Capability title="Secure Authentication" />
          <Capability title="Full-Stack Web Applications" />
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <h3 className="text-2xl font-semibold">Education</h3>
        <p className="mt-2 text-lg">
          Bachelor’s Degree in Mechanical Engineering
        </p>
      </motion.div>

      {/* Client Expectations */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <h3 className="text-2xl font-semibold">What You Get From Me</h3>
        <p className="mt-2 text-lg">
          As a developer, I deliver high-quality, secure, and optimized web applications tailored to client needs.  
          Whether it's a dynamic web app or a personal portfolio, I ensure functionality and performance.
        </p>
      </motion.div>
    </div>
  );
};

/* Animated Capability Component */
const Capability = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex items-center justify-center p-4 border rounded-lg shadow-sm"
    >
      <span className="text-lg font-medium">{title}</span>
    </motion.div>
  );
};

export default About;
