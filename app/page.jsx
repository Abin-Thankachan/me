"use client";

import LoadingScreen from "./components/LoadingScreen";
import AmbientDust from "./components/AmbientDust";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Codex from "./components/Codex";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import AILab from "./components/AILab";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="bg-matte-black text-parchment min-h-screen selection:bg-gold/30 selection:text-gold relative overflow-x-hidden">
      <div className="texture-overlay"></div>
      <div className="vignette-overlay"></div>

      <LoadingScreen />
      <AmbientDust />

      <Navbar />

      <div className="relative z-10 flex flex-col gap-0">
        <Hero />

        {/* Subtle transition gradient */}
        <div className="w-full h-32 bg-gradient-to-b from-transparent to-matte-gray/20"></div>

        <Codex />
        <Projects />
        <Timeline />
        <AILab />
        <Testimonials />
        <Contact />
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gold/20 bg-matte-black py-8 mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-serif text-parchment/50 text-sm">
            © {new Date().getFullYear()} Abin Thankachan. All rights reserved.
          </p>
          <div className="flex gap-4 items-center">
            <div className="w-8 h-8 border border-gold/30 rounded-full flex items-center justify-center">
              <span className="font-cinzel text-gold text-xs">AT</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
