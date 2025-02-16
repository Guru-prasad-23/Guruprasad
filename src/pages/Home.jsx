// import React from "react";
// import HeroSection from "../components/HeroSection";
// import About from "../components/About";
// import Projects from "../components/Projects";
// import Skills from "../components/Skills";
// import Blogs from "../components/Blogs";
// import ContactForm from "../components/ContactForm";


// const Home = () => {
//   return (
//     <div>
//       <HeroSection />
//       <About />
//       <Projects />
//       <Skills />
//       <Blogs />
//       <ContactForm />
//     </div>
//   );
// };

// export default Home;
import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Blogs from "../components/Blogs";
import ContactForm from "../components/ContactForm";
import { motion, useScroll, useTransform } from "framer-motion";

const Home = () => {
  const { scrollYProgress } = useScroll();

  // Reduce opacity and scale when scrolled near the top
  const opacity = useTransform(scrollYProgress, [0, 0], [1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.8]);

  return (
    <div>
      <motion.div style={{ opacity, scale }}>
        <HeroSection />
      </motion.div>
      
      <motion.div style={{ opacity, scale }}>
        <About />
      </motion.div>

      <motion.div style={{ opacity, scale }}>
        <Projects />
      </motion.div>

      <motion.div style={{ opacity, scale }}>
        <Skills />
      </motion.div>

      <motion.div style={{ opacity, scale }}>
        <Blogs />
      </motion.div>

      <motion.div style={{ opacity, scale }}>
        <ContactForm />
      </motion.div>
    </div>
  );
};

export default Home;

