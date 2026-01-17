import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020617] border-t border-slate-800/60 pt-16 pb-8 overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="text-xl font-mono font-bold tracking-[0.2em] text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
              METIS<span className="text-cyan-500">.</span>Studio
            </a>
            <p className="mt-4 text-slate-500 max-w-xs leading-relaxed font-light text-sm">
              Engineering high-performance digital frontiers. 
              <span className="block mt-2 text-[10px] font-mono text-slate-600 uppercase">Available for new mission parameters worldwide.</span>
            </p>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-400 mb-6">Directory</h3>
            <ul className="space-y-3">
              <li>
                <a href="#work" className="text-sm text-slate-500 hover:text-cyan-400 transition-all flex items-center gap-2 group">
                  <span className="w-0 h-[1px] bg-cyan-400 transition-all group-hover:w-3"></span>
                  Archive_Work
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-slate-500 hover:text-cyan-400 transition-all flex items-center gap-2 group">
                  <span className="w-0 h-[1px] bg-cyan-400 transition-all group-hover:w-3"></span>
                  Skill_Modules
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-slate-500 hover:text-cyan-400 transition-all flex items-center gap-2 group">
                  <span className="w-0 h-[1px] bg-cyan-400 transition-all group-hover:w-3"></span>
                  Initiate_Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-400 mb-6">External_Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-slate-500 hover:text-blue-400 transition-all flex items-center gap-2">
                  <span className="text-[10px] opacity-30">01</span> LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-500 hover:text-blue-400 transition-all flex items-center gap-2">
                  <span className="text-[10px] opacity-30">02</span> GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-500 hover:text-blue-400 transition-all flex items-center gap-2">
                  <span className="text-[10px] opacity-30">03</span> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-slate-600 tracking-widest">
            &copy; {currentYear} METIS_Studio.   ALL_RIGHTS_RESERVED.
          </p>
          <div className="flex gap-6">
            <span className="text-[10px] font-mono text-slate-700">STATUS: ENCRYPTED</span>
            <span className="text-[10px] font-mono text-cyan-500/50">V.2026.1.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;