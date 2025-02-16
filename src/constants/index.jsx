import { FaXTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";

import image1 from "../assets/project1.jpeg";
import image2 from "../assets/project2.jpeg";
import image3 from "../assets/project3.jpeg";
import image4 from "../assets/project4.jpeg";
import ChatpApp from '../assets/chat-app.png'

export const NAVIGATION_LINKS = [
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Blogs", to: "/blogs" },
  { label: "Contact", href: "#contact"},
];

export const PROFILE = {
  name: "Guru prasad",
  info: "MERN Stack Developer | Building Scalable & Interactive Web Applications.",
};

export const ABOUT = {
  text1:
    "I create dynamic, responsive websites that blend creativity with efficiency",
  text2:
    "Hello! I'm Guru Prasad, a full-stack developer passionate about building both static and dynamic websites, especially portfolio websites. I specialize in crafting sleek, responsive, and user-friendly web experiences. With expertise in the MERN stack, I can independently develop small-scale full-stack applications, handling both frontend and backend seamlessly. My focus is on delivering functional, visually appealing, and high-performance websites that meet modern web standards.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "R Events",
    subtitle:
      "I built a static website for an event management company using React, Tailwind CSS, and Framer Motion to showcase their services and gallery. The site features a visually appealing design with smooth animations for an engaging user experience.",
    image: image1,
    description:
      "I developed a visually captivating static website for an event management company using React, Tailwind CSS, and Framer Motion. The site effectively highlights their services and gallery with a clean, modern layout and smooth animations, enhancing user engagement. Leveraging Tailwind CSS, I ensured a responsive and aesthetically pleasing design, while Framer Motion added dynamic transitions for an interactive experience. The website provides potential clients with an immersive overview of the company’s offerings, making it both functional and visually compelling.",
    url: "https://r-events-guru-prasads-projects-c14c6795.vercel.app/",
    tech_stack: [
      {
        title: "React Js",
        icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
      },
      {
        title: "TailwindCSS",
        icon: <SiTailwindcss className="text-4xl lg:text-6xl text-green-600" />,
      },
      {
        title: "Framer Motion",
        icon: (
          <TbBrandFramerMotion className="text-4xl lg:text-6xl text-green-600" />
        ),
      },
    ],
  },
  {
    id: 2,
    title: "Authentication and Authorization",
    subtitle:
      "Developed a secure MERN stack app with Firebase authentication, JWT, and Redux Toolkit integration.",
    image: image2,
    url: "",
    description:
      "I developed a secure full-stack web application using the MERN stack, implementing JWT authentication for robust user security. Redux Toolkit was integrated to efficiently manage global state, ensuring smooth and scalable application performance. The backend, built with Node.js and Express, securely handles authentication and API requests, while MongoDB serves as a reliable database for user and application data. The frontend, powered by React and Tailwind CSS, offers a responsive and user-friendly interface with seamless state management through Redux. This application prioritizes security, scalability, and performance, making it a well-structured and efficient solution.",
    tech_stack: [
      {
        title: "React Js",
        icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
      },
      {
        title: "TailwindCSS",
        icon: <SiTailwindcss className="text-4xl lg:text-6xl text-green-600" />,
      },
      {
        title: "Node Js",
        icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
      },
      {
        title: "Express Js",
        icon: <SiExpress className="text-4xl lg:text-6xl text-white" />,
      },
      {
        title: "MongoDB",
        icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
      },
    ],
  },
  {
    id: 3,
    title: "Personal Portfolio website",
    subtitle:
      "Developed the front-end portfolio website, highlighting skills, projects, and experiences.",
    image: image3,
    url: "https://guruprasad-phi.vercel.app/",
    description:
      "I have built a dynamic portfolio website using React, Tailwind CSS, and Framer Motion, with React Router handling seamless navigation. The site features smooth animations and a clean, responsive design to highlight your skills and projects. It serves as a professional showcase, reflecting my expertise and passion for web development.",
      tech_stack: [
        {
          title: "React Js",
          icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
        },
        {
          title: "TailwindCSS",
          icon: <SiTailwindcss className="text-4xl lg:text-6xl text-green-600" />,
        },
        {
          title: "Framer Motion",
          icon: (
            <TbBrandFramerMotion className="text-4xl lg:text-6xl text-green-600" />
          ),
        },
      ],
  },
  {
    id: 4,
    title: "Responsive SaaS Landing Page",
    subtitle: "Designed and developed a responsive landing page.”",
    image: image4,
    url: "https://responsive-saas-website.vercel.app/",
    description:
      "I designed and developed a fully responsive landing page using React, Tailwind CSS, and Framer Motion. The page features a modern and clean layout with smooth animations to enhance user engagement. Tailwind CSS ensures a flexible and optimized design, making the page adapt seamlessly to all screen sizes. Framer Motion adds dynamic transitions, creating an interactive and visually appealing experience. The landing page is structured for clarity and performance, providing users with an intuitive and engaging interface.",
      tech_stack: [
        {
          title: "React Js",
          icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
        },
        {
          title: "TailwindCSS",
          icon: <SiTailwindcss className="text-4xl lg:text-6xl text-green-600" />,
        },
        {
          title: "Framer Motion",
          icon: (
            <TbBrandFramerMotion className="text-4xl lg:text-6xl text-green-600" />
          ),
        },
      ],
  },
  {
    id: 5,
    title: "Real-Time Chat Application",
    subtitle: "A seamless and interactive messaging platform.",
    image: ChatpApp,
    description:
      "I built a real-time chat application that enables users to send messages instantly, see online statuses, and engage in smooth one-on-one conversations. The app ensures a responsive and user-friendly experience with a modern UI. It features authentication, real-time updates, and user presence indicators, providing a reliable communication platform.",
    url: "https://r-events-guru-prasads-projects-c14c6795.vercel.app/",
    tech_stack: [
      {
        title: "React Js",
        icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
      },
      {
        title: "TailwindCSS",
        icon: <SiTailwindcss className="text-4xl lg:text-6xl text-green-600" />,
      },
      {
        title: "Node Js",
        icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
      },
      {
        title: "Express Js",
        icon: <SiExpress className="text-4xl lg:text-6xl text-white" />,
      },
      {
        title: "MongoDB",
        icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
      },
      {
        title:"Socket.io",
        icon:<SiSocketdotio className="text-4xl lg:text-6xl text-white" />
      }
    ],
  },
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
  },
  {
    icon: <SiExpress className="text-4xl lg:text-6xl text-white" />,
    name: "Express.js",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
  },
  {
    icon: (
      <TbBrandFramerMotion className="text-4xl lg:text-6xl text-green-600" />
    ),
    name: "Framer Motion",
  },
  {
    icon: <SiTailwindcss className="text-4xl lg:text-6xl text-green-600" />,
    name: "TailwindCSS",
  },
  {
    icon:<SiSocketdotio className="text-4xl lg:text-6xl text-white" />,
    name:"Socket.io"
  }
];

export const BLOGS = [];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.instagram.com/1311_dom?igsh=MWptbDl3NXdzOGV5OA%3D%3D&utm_source=qr",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/BANDLA-BOT",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/bandla-guru-prasad-608b09204",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
