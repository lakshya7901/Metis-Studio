import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle'; // Import the toggle

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ARCHIVE_WORK', href: '#work', id: '01' },
    { name: 'SKILL_MODULES', href: '#services', id: '02' },
    { name: 'CORE_ABOUT', href: '#about', id: '03' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-slate-950/80 backdrop-blur-xl border-slate-800 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Futuristic Logo */}
        <div className="group flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)] group-hover:rotate-90 transition-transform duration-500">
             <div className="w-3 h-3 border-2 border-white rotate-45"></div>
          </div>
          <a href="/" className="text-xl font-mono font-black tracking-tighter text-white">
            METIS<span className="text-cyan-400">_</span>SYS
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="group relative text-[11px] font-mono tracking-widest text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <span className="text-[9px] text-slate-600 mr-1">{link.id}</span>
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          {/* THEME TOGGLE ADDED HERE */}
          <ThemeToggle />
          
          <a 
            href="#contact" 
            className="relative px-6 py-2 overflow-hidden group rounded-md"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500"></span>
            <span className="absolute inset-[1px] bg-slate-950 rounded-[5px] transition-all group-hover:bg-transparent"></span>
            <span className="relative text-xs font-mono font-bold text-white group-hover:text-slate-950">
              INITIATE_CONTACT
            </span>
          </a>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button 
            className="p-2 text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M12 12h8M8 18h12" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div className={`md:hidden absolute w-full left-0 transition-all duration-500 ease-in-out ${
        isOpen ? 'top-full opacity-100' : '-top-[500%] opacity-0'
      }`}>
        <div className="bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 px-6 py-10 flex flex-col space-y-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-mono font-bold text-slate-300 hover:text-cyan-400 flex items-center gap-4"
            >
              <span className="text-xs text-slate-600">{link.id}</span>
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-cyan-400 font-mono tracking-tighter text-lg border-t border-slate-800 pt-6"
          >
            {'>'} INITIATE_SESSION
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;