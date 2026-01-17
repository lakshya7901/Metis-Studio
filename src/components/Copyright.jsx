import React from 'react';

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020617] pt-20 pb-10 overflow-hidden border-t border-slate-900">
      {/* 1. TOP ANIMATED SCANLINE */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-slate-900 pb-12">
          
          {/* Left: System Branding */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_#22d3ee]"></div>
              <span className="text-white font-mono font-black tracking-[0.3em] text-sm">
                METIS_SYS // CORE_V2
              </span>
            </div>
            <p className="text-slate-500 font-mono text-[10px] leading-relaxed max-w-sm uppercase tracking-wider">
              All systems operational. This portfolio is a secure transmission of the digital frontier. 
              Unauthorized duplication is a violation of protocol.
            </p>
          </div>

          {/* Right: Technical Metadata */}
          <div className="flex flex-wrap md:justify-end gap-x-12 gap-y-4">
            <div className="space-y-1">
              <p className="text-[9px] font-mono text-slate-600 uppercase">Built_With</p>
              <p className="text-[11px] font-mono text-slate-300">REACT_V18 // TAILWIND_CSS</p>
            </div>
            <div className="space-y-1">
              <p className="text-[9px] font-mono text-slate-600 uppercase">Environment</p>
              <p className="text-[11px] font-mono text-slate-300 uppercase">Production_Stable</p>
            </div>
            <div className="space-y-1">
              <p className="text-[9px] font-mono text-slate-600 uppercase">Deployment</p>
              <p className="text-[11px] font-mono text-cyan-500 uppercase tracking-tighter">Verified_Secure</p>
            </div>
          </div>
        </div>

        {/* Bottom: Coordinates & Legal */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] font-mono text-slate-500 tracking-widest">
            &copy; {currentYear} <span className="text-slate-300 underline decoration-cyan-500/20">YOUR_NAME</span>.END_TRANS
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-[9px] font-mono text-slate-700">LOC: 28.6139° N, 77.2090° E</span>
            <div className="px-2 py-0.5 border border-slate-800 rounded text-[9px] font-mono text-slate-500">
              V.2026.01.17
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Copyright;