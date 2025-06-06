export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden px-4 py-8"
    >
      {/* Background decoration */}
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-green-600/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-56 sm:w-96 h-56 sm:h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Grid pattern overlay for desktop */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20 hidden lg:block"></div>

      {/* Main content container */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full gap-8 lg:gap-12">
        {/* Left Content Section */}
        <div className="flex flex-col gap-4 lg:gap-6 text-center lg:text-left flex-1 order-2 lg:order-1">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] flex flex-col sm:flex-row items-center lg:items-baseline justify-center lg:justify-start pb-2 overflow-visible">
            <span className="inline-flex items-center overflow-hidden animate-typing pb-2 whitespace-nowrap sm:whitespace-normal">
              <span className="whitespace-nowrap">Let's Connect!</span>
              <span className="inline-block origin-[70%_70%] animate-wave-once [animation-delay:3s] ml-2">
                🤝
              </span>
              <span className="inline-block h-[1.2em] w-[3px] bg-white animate-blink ml-1" />
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-6">
            Ready to bring your ideas to life? Let's discuss your next project
            and create something amazing together.
          </p>

          {/* Contact Methods */}
          <div className="space-y-4 mb-8">
            {/* Email */}
            <div className="group">
              <p className="text-gray-400 text-sm mb-2">Drop me an email</p>
              <a
                href="mailto:abint16@gmail.com"
                className="inline-flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 hover:bg-white/10 rounded-xl transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg"
              >
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-white font-medium">abint16@gmail.com</p>
                  <p className="text-gray-400 text-sm">
                    I'll get back to you within 24 hours
                  </p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="group">
              <p className="text-gray-400 text-sm mb-2">Or find me on social</p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {[
                  {
                    name: "LinkedIn",
                    icon: "💼",
                    href: "https://linkedin.com/in/yourprofile",
                    color: "blue",
                  },
                  {
                    name: "GitHub",
                    icon: "💻",
                    href: "https://github.com/yourusername",
                    color: "purple",
                  },
                  {
                    name: "Twitter",
                    icon: "🐦",
                    href: "https://twitter.com/yourusername",
                    color: "cyan",
                  },
                  {
                    name: "WhatsApp",
                    icon: "📱",
                    href: "https://wa.me/yourphone",
                    color: "green",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-${social.color}-400/50 hover:bg-white/10 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm`}
                  >
                    <span className="text-lg">{social.icon}</span>
                    <span className="text-white">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Response Promise */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Usually responds within 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
              <span>Available for freelance projects</span>
            </div>
          </div>
        </div>

        {/* Right Visual Section */}
        <div className="relative flex-1 flex justify-center lg:justify-end order-1 lg:order-2 w-full">
          <div className="relative">
            {/* Contact Visual */}
            <div className="w-64 sm:w-80 md:w-96 lg:w-[500px] xl:w-[600px] h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative">
              {/* Main contact card */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-center h-full flex flex-col justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl animate-bounce">
                    📧
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Get In Touch
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Let's discuss your project and make it happen!
                  </p>

                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500/20 rounded-full blur-lg animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-lg animate-pulse delay-1000"></div>
                </div>
              </div>

              {/* Background floating elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-1500"></div>
            </div>

            {/* Background glow effect */}
            <div className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] bg-gradient-to-r from-blue-600/10 to-green-600/10 rounded-full blur-[100px] sm:blur-[150px] lg:blur-[200px] -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-2 text-gray-400 text-sm animate-bounce">
          <span>Scroll up to explore more</span>
          <svg
            className="w-4 h-4 rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
