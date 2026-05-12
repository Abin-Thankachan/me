"use client";

import { motion } from "framer-motion";

const decrees = [
  {
    author: "Lord Chancellor of Engineering",
    name: "Eleanor Vance",
    text: "A true polymath of the digital age. His ability to weave complex algorithms into elegant architectures is nothing short of modern alchemy.",
  },
  {
    author: "Grand Duke of Product",
    name: "Marcus Aurelius II",
    text: "The systems he architects possess the robust longevity of Roman aqueducts and the precision of a master clockmaker.",
  },
  {
    author: "Archmage of Data",
    name: "Dr. Aris Thorne",
    text: "I have witnessed many engineers, but few who balance the rigorous demands of machine learning with such profound aesthetic intuition.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 px-6 lg:px-12 z-10 bg-matte-black overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10 flex justify-center items-center">
        <div className="w-[800px] h-[800px] border border-gold rounded-full flex items-center justify-center">
          <div className="w-[600px] h-[600px] border border-gold rotate-45"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-gold mb-4">
            Royal Decrees
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-gold/50"></div>
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-parchment/60">
              Words of the Court
            </span>
            <div className="h-[1px] w-12 bg-gold/50"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {decrees.map((decree, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative p-8 gold-border bg-gradient-to-b from-parchment/5 to-transparent backdrop-blur-sm"
            >
              {/* Wax Seal Decoration */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-burgundy rounded-full border-2 border-burgundy-light shadow-[0_4px_10px_rgba(128,0,32,0.5)] flex items-center justify-center z-10">
                <span className="font-cinzel text-gold text-lg">V</span>
              </div>

              <div className="text-center mt-6">
                <div className="mb-6 font-serif text-3xl text-gold/40">"</div>
                <p className="font-serif text-parchment/80 leading-relaxed italic mb-8">
                  {decree.text}
                </p>
                <div className="border-t border-gold/20 pt-4 mt-auto">
                  <h4 className="font-cinzel text-gold text-lg">
                    {decree.name}
                  </h4>
                  <p className="font-sans text-xs uppercase tracking-widest text-parchment/50 mt-1">
                    {decree.author}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
