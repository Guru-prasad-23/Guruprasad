import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Blogs from "../components/Blogs";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <Blogs />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
