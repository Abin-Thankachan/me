export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 sticky top-0 backdrop-blur-md bg-white/10 text-white z-50 border-b border-white/10">
      <h2 className="font-bold text-2xl">
        <a href="#" className="hover:text-[#0070F3] transition"></a>
      </h2>
      <div className="space-x-6 text-sm uppercase tracking-wide">
        <a href="#about" className="hover:text-[#0070F3] transition">
          About
        </a>
        <a href="#projects" className="hover:text-[#0070F3] transition">
          Projects
        </a>
        <a href="#skills" className="hover:text-[#0070F3] transition">
          Skills
        </a>
        <a href="#contact" className="hover:text-[#0070F3] transition">
          Contact
        </a>
      </div>
    </nav>
  );
}
