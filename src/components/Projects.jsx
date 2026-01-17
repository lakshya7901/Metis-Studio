import React, { useState } from 'react';

const projects = [
  {
    id: "01",
    title: "E-COMMERCE_CORE",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "Node.js", "Stripe"],
    link: "#"
  },
  {
    id: "02",
    title: "ANALYTICS_DASHBOARD",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    tags: ["Tailwind", "TypeScript", "Recharts"],
    link: "#"
  },
  {
    id: "03",
    title: "ASTRO_FRAMEWORK_V1",
    category: "Design",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1000&auto=format&fit=crop",
    tags: ["Astro", "Framer Motion"],
    link: "#"
  }
];

const categories = ["ALL_FILES", "Web App", "UI/UX", "Design"];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("ALL_FILES");

  const filteredProjects = activeTab === "ALL_FILES" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="work" className="relative py-24 bg-[#020617] overflow-hidden">

      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/[0.02] -skew-x-12 border-l border-white/5"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-block px-3 py-1 mb-4 text-[10px] font-mono tracking-[0.3em] text-cyan-500 uppercase border border-cyan-500/20 bg-cyan-500/5 rounded">
              Status: Retrieving_Archives
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
              Mission <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Archives</span>
            </h2>
            <p className="text-slate-500 max-w-md font-light leading-relaxed">
              Selection of high-performance digital solutions deployed across the web frontier.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 bg-slate-900/50 p-2 rounded-xl border border-slate-800 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-lg text-[10px] font-mono tracking-widest transition-all ${
                  activeTab === cat 
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                  : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 z-10 bg-[#020617]/40 group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                   <div className="flex justify-end">
                      <span className="bg-cyan-500 text-slate-950 px-2 py-1 text-[9px] font-mono font-bold rounded">
                        ENCRYPTED_FILE
                      </span>
                   </div>
                   <a 
                    href={project.link}
                    className="w-full bg-white text-slate-950 py-3 rounded-lg font-mono font-black text-xs text-center tracking-[0.2em] transform translate-y-4 group-hover:translate-y-0 transition-all"
                  >
                    INIT_CASE_STUDY
                  </a>
                </div>
              </div>

              <div className="p-8 border-t border-slate-800">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-2">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[9px] font-mono tracking-tighter text-cyan-500/60 uppercase">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-slate-700">MOD_{index + 1}</span>
                </div>
                <h3 className="text-xl font-mono font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;