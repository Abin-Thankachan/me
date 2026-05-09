"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full top-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-matte-black/80 backdrop-blur-md border-gold/20 py-4 shadow-lg shadow-black/50"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link href="/" className="group relative">
          <h2 className="font-cinzel font-bold text-2xl tracking-widest text-parchment group-hover:text-gold transition-colors duration-300">
            A<span className="text-gold group-hover:text-parchment transition-colors duration-300">T</span>
          </h2>
          <div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-500 ease-out"></div>
        </Link>

        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-[0.2em] font-sans">
          {[
            { name: "Codex", href: "#codex" },
            { name: "Projects", href: "#projects" },
            { name: "Chronicle", href: "#chronicle" },
            { name: "Laboratory", href: "#lab" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-parchment/70 hover:text-gold transition-colors duration-300 group py-2"
            >
              {item.name}
              <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-gold transform -translate-x-1/2 group-hover:w-full transition-all duration-300 ease-out opacity-0 group-hover:opacity-100"></span>
            </Link>
          ))}
        </div>

        {/* Mobile menu button (visual only for now, can be expanded later) */}
        <button className="md:hidden text-gold hover:text-parchment transition-colors p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}
