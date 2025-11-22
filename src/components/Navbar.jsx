import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-40">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between bg-[color:var(--surface)]/80 border-b border-slate-800 backdrop-blur-sm">
        <a href="#home" className="text-accent text-lg font-semibold">Priya</a>

        <ul className="hidden md:flex gap-6 text-slate-200">
          <li><a href="#about" className="hover:text-accent">About</a></li>
          <li><a href="#skills" className="hover:text-accent">Skills</a></li>
          <li><a href="#projects" className="hover:text-accent">Projects</a></li>
          <li><a href="#experience" className="hover:text-accent">Experience</a></li>
          <li><a href="#contact" className="hover:text-accent">Contact</a></li>
        </ul>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="menu" className="p-2 text-slate-200">
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-[color:var(--surface)]/95 border-b border-slate-800">
          <div className="px-6 py-4 flex flex-col gap-3">
            <a href="#about" className="text-slate-200" onClick={() => setOpen(false)}>About</a>
            <a href="#skills" className="text-slate-200" onClick={() => setOpen(false)}>Skills</a>
            <a href="#projects" className="text-slate-200" onClick={() => setOpen(false)}>Projects</a>
            <a href="#experience" className="text-slate-200" onClick={() => setOpen(false)}>Experience</a>
            <a href="#contact" className="text-slate-200" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
