"use client";

import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";

const projects = [
  {
    title: "Project Alpha",
    description: "An advanced AI-driven data visualization tool designed for exploring multi-dimensional datasets with real-time processing capabilities.",
    tags: ["React", "Python", "WebGL"],
    github: "#",
    live: "#",
    year: "MMXXIII",
  },
  {
    title: "System Beta",
    description: "A decentralized architecture for secure document verification and storage, utilizing cryptographic proofs and distributed ledgers.",
    tags: ["Next.js", "Solidity", "Tailwind"],
    github: "#",
    live: "#",
    year: "MMXXII",
  },
  {
    title: "Omni Engine",
    description: "A high-performance physics engine built from scratch for web-based interactive simulations and generative art pieces.",
    tags: ["TypeScript", "Canvas API", "Rust"],
    github: "#",
    live: "#",
    year: "MMXXI",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen py-24 px-6 lg:px-12 z-10 bg-matte-black">
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-gold mb-4">
            The Gallery
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-gold/50"></div>
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-parchment/60">
              Selected Works
            </span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gold/50"></div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Image / Artwork Frame */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="relative aspect-[4/3] p-3 gold-border bg-matte-gray/50 backdrop-blur-sm shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                  <div className="w-full h-full bg-matte-black/80 border border-gold/20 flex items-center justify-center relative overflow-hidden">
                    {/* Placeholder for project image - styling as an architectural blueprint or arcane diagram */}
                    <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(212,175,55,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                    <div className="w-32 h-32 border border-gold/40 rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-1000 ease-in-out">
                       <div className="w-24 h-24 border border-gold/20 rotate-45"></div>
                    </div>
                  </div>

                  {/* Ornaments */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 bg-gold"></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gold"></div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gold"></div>
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
                <div>
                  <span className="font-serif italic text-gold/60 text-sm mb-2 block">
                    Anno {project.year}
                  </span>
                  <h3 className="font-cinzel text-3xl md:text-4xl text-parchment">
                    {project.title}
                  </h3>
                </div>

                <p className="font-serif text-lg text-parchment/70 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 border border-gold/30 text-gold text-xs font-sans tracking-widest uppercase bg-gold/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-6 mt-4">
                  <a
                    href={project.live}
                    className="group relative px-6 py-2 border border-gold/50 text-gold font-sans text-xs tracking-[0.2em] uppercase overflow-hidden hover:text-matte-black transition-colors duration-300"
                  >
                    <div className="absolute inset-0 bg-gold transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                    <span className="relative z-10">Examine</span>
                  </a>
                  <a
                    href={project.github}
                    className="text-parchment/60 hover:text-gold transition-colors duration-300 flex items-center gap-2 font-sans text-xs tracking-widest uppercase"
                  >
                    <SiGithub className="w-5 h-5" />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
