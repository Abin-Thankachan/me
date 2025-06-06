export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden px-4 py-8">
      {/* Main content container */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full gap-8 lg:gap-12">
        {/* Left Text Section */}
        <div className="flex flex-col gap-4 lg:gap-6 text-center lg:text-left flex-1 order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] flex flex-col sm:flex-row items-center lg:items-baseline justify-center lg:justify-start pb-2 overflow-visible">
            <span className="inline-flex items-center overflow-hidden animate-typing pb-2 whitespace-nowrap sm:whitespace-normal">
              <span className="whitespace-nowrap">Hey, I'm Abin.</span>
              <span className="inline-block origin-[70%_70%] animate-wave-once [animation-delay:3s] ml-2">
                👋
              </span>
              <span className="inline-block h-[1.2em] w-[3px] bg-white animate-blink ml-1" />
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Software Engineer & Freelance Developer who loves building
            beautiful, functional apps.
          </p>

          <div className="mt-4 lg:mt-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 backdrop-blur-md bg-white/10 text-white border border-white/10 hover:bg-white/20 hover:text-white transition-all duration-300 rounded-xl font-semibold shadow-lg hover:scale-105 active:scale-95"
            >
              Let's Build Something!
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex-1 flex justify-center lg:justify-end order-1 lg:order-2 w-full">
          <div className="relative">
            <img
              src="/profile.png"
              alt="Abin Working"
              className="rounded-lg w-64 sm:w-80 md:w-96 lg:w-[500px] xl:w-[600px] h-auto object-cover shadow-2xl"
            />

            {/* Background glow effect */}
            <div className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] bg-[#0070F3]/20 rounded-full blur-[100px] sm:blur-[150px] lg:blur-[200px] -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

            {/* Additional accent glow */}
            <div className="absolute w-32 h-32 sm:w-40 sm:h-40 bg-purple-500/15 rounded-full blur-[80px] -z-10 top-[20%] right-[20%] animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-56 sm:w-96 h-56 sm:h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Grid pattern overlay for desktop */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20 hidden lg:block"></div>
    </section>
  );
}
