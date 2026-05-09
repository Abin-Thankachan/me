"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSealed, setIsSealed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSealed(true);
    // Add actual submission logic here if needed
    setTimeout(() => {
      setIsSealed(false);
      setFormState({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="relative min-h-screen py-24 px-6 lg:px-12 z-10 flex items-center justify-center bg-matte-black">
      {/* Background Ornaments */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-burgundy/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-gold mb-4">
            Send a Decree
          </h2>
          <p className="font-serif text-parchment/70 italic text-lg max-w-xl mx-auto">
            "Summon me for collaborations, quests, or to exchange knowledge."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-w-2xl mx-auto"
        >
          {/* Letter / Envelope Container */}
          <div className="relative bg-parchment/5 backdrop-blur-md border border-gold/30 p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">

            {/* Decorative Borders */}
            <div className="absolute top-2 left-2 right-2 bottom-2 border border-gold/10 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/60"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold/60"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold/60"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/60"></div>

            {isSealed ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center h-full min-h-[400px]"
              >
                {/* Wax Seal Animation */}
                <motion.div
                  initial={{ scale: 2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="w-24 h-24 bg-burgundy rounded-full border-4 border-burgundy-light shadow-[0_10px_20px_rgba(128,0,32,0.6)] flex items-center justify-center mb-6 relative"
                >
                  <div className="absolute inset-1 border border-burgundy-light/50 rounded-full"></div>
                  <span className="font-cinzel text-gold text-4xl text-shadow-sm">A</span>
                </motion.div>
                <h3 className="font-cinzel text-2xl text-gold mb-2">Decree Sealed</h3>
                <p className="font-serif text-parchment/70 italic text-center">Your message is en route via raven.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10 min-h-[400px]">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 flex flex-col gap-2">
                    <label className="font-sans text-xs tracking-widest uppercase text-gold/70">Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="bg-transparent border-b border-gold/30 p-2 text-parchment font-serif text-lg focus:outline-none focus:border-gold transition-colors"
                      placeholder="Sir Galahad"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <label className="font-sans text-xs tracking-widest uppercase text-gold/70">Origin (Email)</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="bg-transparent border-b border-gold/30 p-2 text-parchment font-serif text-lg focus:outline-none focus:border-gold transition-colors"
                      placeholder="galahad@camelot.gov"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <label className="font-sans text-xs tracking-widest uppercase text-gold/70">The Missive</label>
                  <textarea
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="bg-transparent border-b border-gold/30 p-2 text-parchment font-serif text-lg focus:outline-none focus:border-gold transition-colors resize-none h-32"
                    placeholder="Write your decree here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="mt-4 group relative w-full py-4 border border-gold/50 text-gold font-cinzel text-lg tracking-widest uppercase overflow-hidden hover:text-matte-black transition-colors duration-500"
                >
                  <div className="absolute inset-0 bg-gold transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Seal & Send
                    <div className="w-4 h-4 rounded-full bg-burgundy group-hover:bg-matte-black border border-current transition-colors"></div>
                  </span>
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
