"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import {
  SiAngular,
  SiNodedotjs,
  SiPython,
  SiFlutter,
  SiFirebase,
  SiFastapi,
  SiPostgresql,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    subtitle: "Full Stack Solution",
    description: "A comprehensive scalable e-commerce application handling thousands of concurrent users.",
    image: "/ecommerce-screenshot.jpg",
    tags: ["Next.js", "Node.js", "MongoDB"],
    link: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Government Portal",
    subtitle: "Public Service App",
    description: "Secure web portal built for regional government public services.",
    image: "/gov-portal-screenshot.jpg",
    tags: ["Angular", "Python", "PostgreSQL"],
    link: "#",
  },
  {
    id: 3,
    title: "Health & Fitness Tracker",
    subtitle: "Mobile Application",
    description: "Cross-platform mobile application for tracking daily fitness goals.",
    image: "/fitness-app-screenshot.jpg",
    tags: ["Flutter", "Firebase"],
    link: "#",
  },
  {
    id: 4,
    title: "AI Chat Assistant",
    subtitle: "Machine Learning",
    description: "Intelligent chatbot with natural language processing capabilities.",
    image: "/ai-chat-screenshot.jpg",
    tags: ["Python", "FastAPI"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Selected Works.
          </h2>
          <p className="apple-subheading max-w-2xl">
            A showcase of applications I've built using modern technologies. From e-commerce platforms to scalable mobile apps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {projects.map((project, index) => (
             <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`apple-card group block ${project.featured ? "md:col-span-2" : ""}`}
            >
              <a href={project.link} className="block relative h-full">
                 <div className={`relative w-full overflow-hidden bg-gray-100 dark:bg-appleGray-950 ${project.featured ? "h-64 sm:h-96" : "h-56 sm:h-72"}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  {/* Fallback */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600 font-medium">
                    {project.title} Image Placeholder
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-sm font-semibold text-appleBlue tracking-wide uppercase mb-1">{project.subtitle}</p>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-appleBlue transition-colors">{project.title}</h3>
                    </div>
                    <span className="p-2 bg-gray-50 dark:bg-appleGray-800 rounded-full text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      <FiArrowUpRight className="w-5 h-5" />
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-appleGray-800 text-gray-600 dark:text-gray-300 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 sm:mt-24 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-button apple-button-secondary gap-2"
          >
            <FiGithub className="w-5 h-5" />
            View all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
