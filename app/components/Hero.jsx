"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Dynamic Background Lighting based on mouse */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-40 z-0"
        animate={{
          background: `radial-gradient(800px circle at ${
            mousePosition.x * 10 + 50
          }% ${mousePosition.y * 10 + 50}%, rgba(212, 175, 55, 0.1), transparent 40%)`,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.2 }}
      />

      {/* Decorative Borders */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-gold/30 opacity-70"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-gold/30 opacity-70"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-gold/30 opacity-70"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-gold/30 opacity-70"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
          className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left order-2 lg:order-1"
        >
          <div className="flex flex-col gap-2">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 0.8 }}
              className="text-gold font-sans tracking-[0.3em] text-sm uppercase"
            >
              Master of the Digital Arts
            </motion.p>
            <h1 className="font-cinzel text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-parchment leading-[1.1] font-bold">
              Abin
              <br />
              <span className="text-gold">Thankachan</span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2, duration: 1 }}
            className="font-serif text-lg sm:text-xl text-parchment/80 max-w-xl mx-auto lg:mx-0 leading-relaxed italic"
          >
            "Forging intelligent systems and timeless digital architectures, bridging the renaissance of thought with the frontiers of technology."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.8 }}
            className="mt-4 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
          >
            <Link
              href="#projects"
              className="group relative px-8 py-4 bg-transparent text-gold font-cinzel font-bold tracking-widest overflow-hidden border border-gold/30 hover:border-gold transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-gold/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 flex items-center gap-3">
                View the Gallery
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="#contact"
              className="font-sans text-sm tracking-[0.2em] uppercase text-parchment/60 hover:text-gold transition-colors duration-300 relative group py-2"
            >
              Send a Decree
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-300"></span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Portrait/Visual Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 2.7, ease: "easeOut" }}
          className="relative flex justify-center items-center order-1 lg:order-2"
        >
          {/* Framed Portrait Container */}
          <div className="relative w-72 sm:w-80 md:w-96 lg:w-[450px] aspect-[3/4] p-4 gold-border bg-matte-gray/30 backdrop-blur-sm z-10 shadow-2xl">
            {/* The actual image or artistic representation */}
            <div className="relative w-full h-full overflow-hidden bg-matte-black/80 border border-gold/20 flex items-center justify-center group/portrait">
              {/* Actual Profile Image with Renaissance Filters */}
              <motion.img
                src="/profile.png"
                alt="Portrait of Abin"
                className="absolute inset-0 w-full h-full object-cover sepia-[0.3] contrast-[1.1] grayscale-[0.2] mix-blend-luminosity opacity-80 transition-all duration-1000 ease-out group-hover/portrait:scale-105 group-hover/portrait:sepia-[0.1] group-hover/portrait:grayscale-0 group-hover/portrait:opacity-100"
                initial={{ scale: 1.1, filter: "blur(10px)" }}
                animate={{ scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 2, delay: 2.8, ease: [0.25, 0.1, 0.25, 1] }}
              />

              {/* Texture overlay to give it a canvas/painted feel */}
              <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>

              {/* Subtle animated light sweep over the portrait */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold/10 to-transparent transform -translate-x-full pointer-events-none"
                animate={{ translateX: ["-100%", "200%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
              />

              {/* Subtle overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent opacity-90 pointer-events-none"></div>
            </div>

            {/* Ornate corner pieces */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-gold bg-matte-black"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gold bg-matte-black"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gold bg-matte-black"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-gold bg-matte-black"></div>
          </div>

          {/* Background Glow behind portrait */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/5 blur-[80px] rounded-full z-0 animate-pulse"></div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-[10px] tracking-[0.3em] text-gold/50 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-gold/50 to-transparent"
        ></motion.div>
      </motion.div>
    </section>
  );
}
