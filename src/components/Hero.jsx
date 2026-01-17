import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#020617]">

      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-cyan-400/30 bg-cyan-400/5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-[0.3em]">
                System_Status: Online
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-8 uppercase max-w-[1ch] lg:max-w-none">
              BUILDING <br />
              THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 block">
                DIGITAL_
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500">
                FRONTIER
              </span>
            </h1>
            
            <p className="text-slate-400 text-base md:text-lg mb-10 font-light leading-relaxed max-w-md">
              Specializing in high-performance web ecosystems. Converting complex logic into 
              <span className="text-slate-200 font-mono text-xs uppercase tracking-wider bg-white/5 px-2 py-1 rounded ml-2">
                seamless_uI
              </span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#work" className="group relative px-8 py-4 bg-blue-600 text-white rounded-xl overflow-hidden shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 font-mono text-[10px] font-bold tracking-widest uppercase">Initialize_Archive</span>
              </a>
              <a href="#contact" className="px-8 py-4 rounded-xl bg-slate-950 text-white font-mono text-[10px] font-bold tracking-widest border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-all uppercase">
                Launch_Session _&gt;
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
             <div className="relative w-full max-w-[480px] rounded-2xl border border-slate-800 p-2 bg-slate-900/50 backdrop-blur-sm overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                  alt="Profile" 
                  className="w-full h-auto object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                />
                
                <div className="absolute top-4 right-4 z-20 bg-slate-950/90 border border-slate-800 p-3 rounded-lg backdrop-blur-md">
                   <div className="font-mono text-[8px] text-cyan-500 tracking-tighter mb-1 uppercase">Core_Engine_V2</div>
                   <div className="flex gap-1">
                     {[...Array(5)].map((_, i) => (
                       <div key={i} className="w-3 h-1 bg-cyan-500/20 rounded-full overflow-hidden">
                         <div className="h-full bg-cyan-500 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                       </div>
                     ))}
                   </div>
                </div>

                <div className="absolute -bottom-2 left-4 z-20 bg-[#020617] border border-slate-800 p-4 rounded-xl shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl font-mono font-black text-white italic">05+</div>
                    <div className="text-[7px] font-mono text-slate-500 uppercase tracking-[0.2em] leading-tight">Years_of<br/>Experience</div>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;