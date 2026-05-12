"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-gray-900 dark:text-white">
            Software Engineer. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-appleBlue to-purple-500">
              Problem Solver.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl sm:text-2xl text-gray-500 dark:text-gray-400 font-medium">
            Hey, I'm Abin. I build beautiful, functional, and user-centered digital experiences.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="apple-button apple-button-primary w-full sm:w-auto text-lg px-8 py-4">
              View Work
            </a>
            <a href="#contact" className="apple-button apple-button-secondary w-full sm:w-auto text-lg px-8 py-4">
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* Minimalist image/graphic representation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-24 w-full max-w-5xl group"
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-gray-100 dark:bg-appleGray-900 border border-gray-200/50 dark:border-gray-800/50 shadow-2xl">
             <img
              src="/hero-bg.jpg"
              alt="Abin Work Setup"
              className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-1000" />
            {/* Fallback pattern if image is missing */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-appleGray-900 dark:to-black -z-10 flex items-center justify-center">
              <span className="text-gray-300 dark:text-gray-700 text-6xl font-bold tracking-tighter opacity-50">Creative Developer</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Apple-like background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-appleBlue/5 dark:bg-appleBlue/10 rounded-full blur-3xl -z-0 pointer-events-none"></div>
    </section>
  );
}
