"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".fade-in");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-lavender text-red-900">
      <Navbar />
      <div className="fade-in">
        <Hero />
      </div>
      <div className="fade-in">
        <About />
      </div>
      <div className="fade-in">
        <Projects />
      </div>
      <div className="fade-in">
        <Contact />
      </div>
    </main>
  );
}
