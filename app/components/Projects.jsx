import {
  SiAngular,
  SiNodedotjs,
  SiPython,
  SiFlutter,
  SiFirebase,
  SiPostgresql,
  SiNextdotjs,
  SiTailwindcss,
  SiFastapi,
  SiMongodb,
} from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Kerala Cart",
      subtitle: "Ecommerce Platform",
      description:
        "Full-stack e-commerce solution with modern UI and seamless shopping experience",
      image: "/kerala-cart-screenshot.jpg", // Replace with your actual screenshot
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Water Survey App",
      subtitle: "Public Health Solution",
      description:
        "Government app for water quality monitoring and public health data collection",
      image: "/water-survey-screenshot.jpg", // Replace with your actual screenshot
      tags: ["Flutter", "Firebase", "Maps API"],
      link: "#",
    },
    {
      id: 3,
      title: "Project Management SaaS",
      subtitle: "Fast APIs & Dashboard",
      description:
        "Scalable project management platform with real-time collaboration features",
      image: "/project-mgmt-screenshot.jpg", // Replace with your actual screenshot
      tags: ["FastAPI", "React", "PostgreSQL"],
      link: "#",
    },
    {
      id: 4,
      title: "Portfolio Website",
      subtitle: "Personal Branding",
      description:
        "Modern portfolio showcasing development skills and project achievements",
      image: "/portfolio-screenshot.jpg", // Replace with your actual screenshot
      tags: ["Next.js", "Tailwind", "Framer Motion"],
      link: "#",
    },
    {
      id: 5,
      title: "Mobile Banking App",
      subtitle: "FinTech Solution",
      description:
        "Secure mobile banking application with biometric authentication",
      image: "/banking-app-screenshot.jpg", // Replace with your actual screenshot
      tags: ["Flutter", "Spring Boot", "Security"],
      link: "#",
    },
    {
      id: 6,
      title: "AI Chat Assistant",
      subtitle: "Machine Learning",
      description:
        "Intelligent chatbot with natural language processing capabilities",
      image: "/ai-chat-screenshot.jpg", // Replace with your actual screenshot
      tags: ["Python", "TensorFlow", "NLP"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-black text-white overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of applications I've built using modern technologies.
            From e-commerce platforms to government solutions.
          </p>
          <section className="flex justify-center items-center min-h-[16vh] bg-transparent backdrop-blur-md rounded-lg mt-10">
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 shadow text-xs font-medium text-white"
                  >
                    <Icon size={28} color={skill.color} />
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </section>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-500"></div>
                {/* Placeholder for project screenshot */}
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-white/10 flex items-center justify-center">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm">Screenshot Preview</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Replace with: {project.image}
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-blue-400 font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                  <a
                    href={project.link}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-full bg-white/10 hover:bg-white/20"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-full border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-400 mb-8 text-lg">
            Want to see more of my work or discuss a project?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Let's Work Together
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const skills = [
  { name: "Angular", icon: SiAngular, color: "#DD0031" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "React", icon: SiNodedotjs, color: "#61DAFB" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];
