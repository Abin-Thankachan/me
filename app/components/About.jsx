"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-appleGray-100 dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            A little about me.
          </h2>
          <p className="apple-subheading max-w-3xl mx-auto">
            Passionate about creating clean, efficient, and user-friendly digital experiences that help businesses grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="apple-card p-8 sm:p-10 lg:p-12 h-full flex flex-col justify-center"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
              The Journey
            </h3>
            <div className="space-y-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Hi, I'm <strong className="text-gray-900 dark:text-white font-semibold">Abin</strong> — a software engineer and freelance developer from Kerala, India. I specialize in building highly scalable web and mobile applications.
              </p>
              <p>
                Over the past 3+ years, I've had the opportunity to work on diverse projects ranging from e-commerce platforms to government applications, utilizing modern technologies like Angular, Flutter, Node.js, and Python.
              </p>
              <p>
                When I'm not coding, I'm exploring emerging tech trends or collaborating on exciting freelance projects that challenge me to learn and grow.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-4 h-full"
          >
             {[
              { icon: "💻", title: "Developer", desc: "Full-stack expertise" },
              { icon: "📱", title: "App Creator", desc: "iOS & Android" },
              { icon: "🌍", title: "Global", desc: "Remote collaborations" },
              { icon: "🚀", title: "Freelancer", desc: "Open to new projects" },
            ].map((item, index) => (
              <div key={index} className="apple-card p-6 flex flex-col items-center text-center justify-center gap-4 hover:scale-[1.02] transition-transform duration-300">
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
