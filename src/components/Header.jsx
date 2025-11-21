import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-6 border-b border-white/5">
      <div className="flex items-center justify-between container mx-auto px-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-tr from-cyan-400 to-violet-600 font-bold text-black">SCS</div>
          <div>
            <div className="font-bold text-lg">Santé Connectée Sénégal</div>
            <div className="text-xs opacity-60">Connecter. Innover. Guérir.</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm hover:text-cyan-400 transition">Fonctionnalités</a>
          <a href="#impact" className="text-sm hover:text-cyan-400 transition">Impact</a>
          <a href="#contact" className="text-sm hover:text-cyan-400 transition">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 w-6"
        >
          <span className={`h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden mt-4 px-6 flex flex-col gap-3">
          <a href="#features" className="text-sm hover:text-cyan-400 transition">Fonctionnalités</a>
          <a href="#impact" className="text-sm hover:text-cyan-400 transition">Impact</a>
          <a href="#contact" className="text-sm hover:text-cyan-400 transition">Contact</a>
        </nav>
      )}
    </header>
  );
}
