export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header with gradient text */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Main content card */}
        <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>

          <div className="relative">
            {/* Quote section */}
            <div className="mb-12">
              <div className="text-blue-400/60 text-6xl mb-4 font-serif">"</div>
              <blockquote className="text-lg md:text-xl leading-relaxed text-gray-200 font-light">
                Hi, I'm <span className="text-white font-semibold">Abin</span> —
                a passionate software engineer and freelance developer from{" "}
                <span className="text-blue-400">Kerala, India</span>. I love
                building clean, efficient, and user-friendly mobile and web
                applications that help businesses grow and users have a great
                experience. Over the past{" "}
                <span className="text-purple-400 font-semibold">3+ years</span>,
                I've worked on everything from e-commerce platforms to
                government apps, using technologies like Angular, Flutter,
                Node.js, and Python. When I'm not coding, you'll find me
                exploring new tech, collaborating with awesome people, or diving
                into freelance projects that challenge me to learn and grow.
                Let's create something amazing together!
              </blockquote>
            </div>

            {/* Summary */}
            <p className="text-gray-300 text-center mb-12 text-lg leading-relaxed">
              Software Engineer from Kerala, India, passionate about
              freelancing, clean UI, and scalable applications. Always excited
              to connect and collaborate!
            </p>

            {/* Tags/Skills */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                {
                  icon: "🛠️",
                  text: "Developer",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: "📱",
                  text: "App Creator",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: "🌏",
                  text: "Global Projects",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: "💬",
                  text: "Freelancer",
                  color: "from-orange-500 to-yellow-500",
                },
              ].map((item, index) => (
                <div key={index} className="group relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-full`}
                  ></div>
                  <div className="relative px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-white/20 transition-all duration-300 transform hover:scale-105">
                    <span className="text-xl mr-2">{item.icon}</span>
                    <span className="text-white font-medium">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <span className="relative z-10">Let's Work Together</span>
            <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
