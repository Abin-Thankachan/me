"use client";

import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "MMXXIII - Present",
    title: "Senior Alchemist of AI",
    company: "Future Tech Inc.",
    description: "Orchestrating large language models and forging neural pathways to solve complex data riddles.",
  },
  {
    year: "MMXXI - MMXXIII",
    title: "Master Software Artisan",
    company: "Digital Renaissance Corp",
    description: "Architected scalable decentralized systems, merging classical design patterns with modern frameworks.",
  },
  {
    year: "MMXIX - MMXXI",
    title: "Apprentice Developer",
    company: "The Startup Guild",
    description: "Honed the craft of front-end engineering, learning the sacred texts of JavaScript and React.",
  },
];

export default function Timeline() {
  return (
    <section id="chronicle" className="relative min-h-screen py-24 px-6 lg:px-12 z-10 bg-matte-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-gold mb-4">
            The Chronicle
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-gold/50"></div>
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-parchment/60">
              Journeys & Quests
            </span>
            <div className="h-[1px] w-12 bg-gold/50"></div>
          </div>
        </motion.div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gold/30 to-transparent transform md:-translate-x-1/2"></div>

          <div className="flex flex-col gap-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row relative ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } gap-8 md:gap-16`}
              >
                {/* Center Node */}
                <div className="absolute left-[11px] md:left-1/2 w-5 h-5 bg-matte-black border-2 border-gold rounded-full transform md:-translate-x-1/2 z-10 shadow-gold-glow flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                </div>

                {/* Content Panel */}
                <div className="ml-12 md:ml-0 md:w-1/2 flex flex-col group">
                  <div className={`p-6 border border-gold/20 bg-parchment/5 backdrop-blur-sm relative transition-all duration-500 hover:border-gold/50 hover:bg-parchment/10 ${index % 2 === 0 ? "md:ml-8" : "md:mr-8 text-left md:text-right"}`}>
                    {/* Decorative Corner */}
                    <div className={`absolute top-0 w-4 h-4 border-t border-gold ${index % 2 === 0 ? "left-0 border-l" : "right-0 border-r md:left-auto md:border-l-0 md:border-r"}`}></div>

                    <span className="font-serif italic text-gold/70 text-sm mb-1 block">
                      {event.year}
                    </span>
                    <h3 className="font-cinzel text-2xl text-parchment mb-1">
                      {event.title}
                    </h3>
                    <h4 className="font-sans text-xs tracking-widest uppercase text-gold/50 mb-4">
                      {event.company}
                    </h4>
                    <p className="font-serif text-parchment/70 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
