"use client";

import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";

export default function Contact() {
  const socials = [
    { icon: FiMail, name: "Email", href: "mailto:abint16@gmail.com" },
    { icon: FiLinkedin, name: "LinkedIn", href: "https://linkedin.com" },
    { icon: FiGithub, name: "GitHub", href: "https://github.com" },
    { icon: FiTwitter, name: "Twitter", href: "https://twitter.com" },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-appleGray-100 dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Let's start a project together.
          </h2>
          <p className="apple-subheading mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm currently available for freelance work and open to new opportunities.
          </p>

          <a
            href="mailto:abint16@gmail.com"
            className="apple-button apple-button-primary text-lg px-10 py-5 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 mb-16 inline-flex"
          >
            Say Hello
          </a>

          <div className="pt-12 border-t border-gray-200 dark:border-gray-800">
             <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Connect with me</h3>
             <div className="flex justify-center gap-6">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white dark:bg-appleGray-900 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-800 text-gray-500 hover:text-appleBlue dark:text-gray-400 dark:hover:text-appleBlue transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

       {/* Footer signature */}
       <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} Abin Thankachan. All rights reserved.
        </p>
      </div>
    </section>
  );
}
