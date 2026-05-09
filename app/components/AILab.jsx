"use client";

import { motion } from "framer-motion";

export default function AILab() {
  return (
    <section id="lab" className="relative min-h-screen py-24 px-6 lg:px-12 z-10 overflow-hidden bg-matte-black">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(1,50,32,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(1,50,32,0.2)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side: Arcane Console/Terminal */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2"
        >
          <div className="text-left mb-8">
            <h2 className="font-cinzel text-4xl md:text-5xl text-emerald-light mb-4 flex items-center gap-4">
              Arcane Laboratory
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 border border-emerald-light border-dashed rounded-full"
              ></motion.div>
            </h2>
            <p className="font-serif text-lg text-parchment/70 leading-relaxed italic border-l-2 border-emerald-light/50 pl-4">
              "Where ancient alchemy meets artificial intelligence. Here, I synthesize logic, weave neural networks, and transmute data into knowledge."
            </p>
          </div>

          <div className="p-6 border border-emerald-light/30 bg-emerald/10 backdrop-blur-md rounded-sm font-mono text-sm text-emerald-light/80 shadow-[0_0_30px_rgba(1,50,32,0.5)]">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-burgundy"></div>
              <div className="w-3 h-3 rounded-full bg-gold"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-light"></div>
            </div>
            <p>{">"} INITIALIZING NEURAL ENGINE...</p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              {">"} LOADING ALCHEMICAL WEIGHTS... [OK]
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              {">"} SYNTHESIZING INTELLIGENCE...
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 2.5, duration: 2 }}
              className="h-1 bg-emerald-light mt-2"
            ></motion.div>
          </div>
        </motion.div>

        {/* Right Side: Futuristic Diagram/Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center items-center relative"
        >
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            {/* Rotating elements simulating an astrolabe or AI model */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-emerald-light/20 rounded-full"
            ></motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 border-2 border-emerald-light/40 rounded-full border-dashed"
            ></motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-16 border border-emerald-light/60 rounded-full flex items-center justify-center"
            >
              <div className="absolute top-0 w-3 h-3 bg-emerald-light rounded-full shadow-[0_0_10px_#024B30]"></div>
              <div className="absolute bottom-0 w-3 h-3 bg-emerald-light rounded-full shadow-[0_0_10px_#024B30]"></div>
            </motion.div>

            {/* Central Glowing Core */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-emerald-light/20 rounded-full animate-pulse shadow-[0_0_50px_#024B30] flex items-center justify-center backdrop-blur-sm border border-emerald-light/50">
                <div className="w-8 h-8 bg-emerald-light rounded-full blur-[2px]"></div>
              </div>
            </div>

            {/* Connecting Lines (Simulated Neural Network/Constellation) */}
            <svg className="absolute inset-0 w-full h-full text-emerald-light/30" style={{ transform: 'rotate(45deg)' }}>
              <line x1="200" y1="200" x2="50" y2="100" stroke="currentColor" strokeWidth="1" />
              <line x1="200" y1="200" x2="350" y2="100" stroke="currentColor" strokeWidth="1" />
              <line x1="200" y1="200" x2="100" y2="350" stroke="currentColor" strokeWidth="1" />
              <line x1="200" y1="200" x2="300" y2="300" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
