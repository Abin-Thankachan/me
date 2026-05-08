"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Tech Innovators Inc.",
    period: "2022 - Present",
    description: "Leading the frontend development team to build scalable web applications using React and Next.js. Improved performance by 40% and mentored junior developers.",
  },
  {
    id: 2,
    role: "Software Developer",
    company: "Digital Solutions LLC",
    period: "2020 - 2022",
    description: "Developed and maintained full-stack applications using Node.js and Angular. Collaborated with cross-functional teams to deliver projects on time.",
  },
  {
    id: 3,
    role: "Freelance Developer",
    company: "Self-Employed",
    period: "2018 - 2020",
    description: "Designed and built custom websites and mobile apps for various clients globally, utilizing a variety of modern tech stacks.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-24 text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Work Experience.
          </h2>
          <p className="apple-subheading max-w-2xl mx-auto">
            My professional journey and the roles that have shaped my career.
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-8 sm:pl-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                 {/* Timeline Line & Dot (Desktop) */}
                 <div className="hidden sm:flex flex-col items-center mt-2 w-16">
                    <div className="w-4 h-4 rounded-full bg-appleBlue border-4 border-white dark:border-black z-10"></div>
                    {index !== experiences.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-800 -mt-2 min-h-[100px]"></div>
                    )}
                 </div>

                 {/* Timeline Line & Dot (Mobile) */}
                 <div className="sm:hidden absolute left-0 top-2 bottom-0 flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-appleBlue border-2 border-white dark:border-black z-10"></div>
                    {index !== experiences.length - 1 && (
                       <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-800 -mt-1"></div>
                    )}
                 </div>

                 {/* Content */}
                 <div className="apple-card p-6 sm:p-8 flex-1 w-full">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                        <p className="text-lg font-medium text-appleBlue mt-1">{exp.company}</p>
                      </div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-2 sm:mt-0 whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {exp.description}
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
