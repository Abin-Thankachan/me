"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiFastapi,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: SiJavascript, level: "Master" },
  { name: "TypeScript", icon: SiTypescript, level: "Adept" },
  { name: "Python", icon: SiPython, level: "Master" },
  { name: "React", icon: SiReact, level: "Master" },
  { name: "Next.js", icon: SiNextdotjs, level: "Master" },
  { name: "Tailwind", icon: SiTailwindcss, level: "Adept" },
  { name: "Node.js", icon: SiNodedotjs, level: "Adept" },
  { name: "FastAPI", icon: SiFastapi, level: "Adept" },
  { name: "PostgreSQL", icon: SiPostgresql, level: "Adept" },
  { name: "MongoDB", icon: SiMongodb, level: "Initiate" },
  { name: "Firebase", icon: SiFirebase, level: "Adept" },
];

export default function Codex() {
  return (
    <section id="codex" className="relative min-h-screen py-24 px-6 lg:px-12 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-gold mb-4">
            Codex of Skills
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-gold/50"></div>
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-parchment/60">
              The Tools of Creation
            </span>
            <div className="h-[1px] w-12 bg-gold/50"></div>
          </div>
        </motion.div>

        {/* Manuscript Page Container */}
        <div className="relative max-w-5xl mx-auto gold-border p-8 md:p-12 lg:p-16 bg-parchment/5 backdrop-blur-sm shadow-2xl">
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-gold/40"></div>
          <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-gold/40"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b border-l border-gold/40"></div>
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-gold/40"></div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center justify-center gap-4 p-4 cursor-pointer"
              >
                <div className="relative w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gold/5 rounded-full blur-md group-hover:bg-gold/20 transition-colors duration-500"></div>
                  <skill.icon className="w-10 h-10 text-parchment/80 group-hover:text-gold transition-colors duration-300 relative z-10" />

                  {/* Rotating Alchemical Ring */}
                  <motion.div
                    className="absolute inset-[-10px] border border-gold/20 rounded-full border-dashed opacity-0 group-hover:opacity-100"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-cinzel text-parchment group-hover:text-gold transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <p className="font-serif text-sm text-parchment/50 italic mt-1">
                    {skill.level}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Central spine/fold decorative line (subtle) */}
          <div className="hidden lg:block absolute top-12 bottom-12 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-gold/10 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
