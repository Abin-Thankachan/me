"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "Angular", "Tailwind CSS", "Framer Motion", "TypeScript"] },
  { category: "Backend", items: ["Node.js", "Python", "Express", "FastAPI", "Spring Boot"] },
  { category: "Mobile", items: ["Flutter", "React Native", "iOS", "Android"] },
  { category: "Database & Cloud", items: ["MongoDB", "PostgreSQL", "Firebase", "AWS", "Google Cloud"] },
  { category: "Tools & Others", items: ["Git", "Docker", "Figma", "Agile/Scrum", "CI/CD"] }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-appleGray-100 dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-24 text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Core Skills.
          </h2>
          <p className="apple-subheading max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="apple-card p-8 flex flex-col h-full"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-gray-50 dark:bg-appleGray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-appleGray-700 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
