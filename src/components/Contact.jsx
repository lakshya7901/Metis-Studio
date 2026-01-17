import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);
    const apiKey = import.meta.env.PUBLIC_WEB3FORMS_KEY;
    formData.append("access_key", apiKey);
    formData.append("subject", "New Lead from Digital Frontier");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('idle');
        alert("Transmission Failed. Re-syncing...");
      }
    } catch (error) {
      setStatus('idle');
      alert("Terminal Offline. Check connection.");
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#020617] overflow-hidden">
      {/* Background Grid Pattern - Digital Frontier Style */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="group relative bg-slate-950 border border-slate-800 rounded-[2rem] p-8 md:p-16 overflow-hidden">
          
          {/* Animated Glow Corners */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-700"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full group-hover:bg-blue-600/20 transition-all duration-700"></div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Side: Terminal Style Info */}
            <div>
              <div className="inline-block px-3 py-1 mb-6 text-[10px] font-mono tracking-widest text-cyan-400 uppercase border border-cyan-400/30 bg-cyan-400/5 rounded-md">
                Protocol: Communication_Initiation
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
                Let’s build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Future.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 font-light leading-relaxed">
                System ready for new project parameters. 
                Deploy your ideas into the digital frontier.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover/item:border-cyan-500/50 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-mono tracking-[0.2em]">Secure Channel</p>
                    <p className="text-white font-mono text-sm">hello@yourdomain.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Futuristic Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="checkbox" name="botcheck" className="hidden" />

              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="IDENT_NAME" 
                    required
                    className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-6 py-4 text-white font-mono text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all placeholder:text-slate-600"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="IDENT_EMAIL" 
                    required
                    className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-6 py-4 text-white font-mono text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>
              <textarea 
                name="message"
                placeholder="INPUT_PROJECT_DESCRIPTION..." 
                rows="4"
                required
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-6 py-4 text-white font-mono text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all placeholder:text-slate-600"
              ></textarea>
              
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="relative w-full group/btn overflow-hidden rounded-xl p-[1px] font-bold transition-all disabled:opacity-50"
              >
                {/* Button Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 group-hover:animate-pulse"></div>
                
                <div className="relative bg-slate-950 rounded-[11px] py-4 text-white group-hover:bg-transparent transition-colors">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {status === 'idle' && (
                      <>
                        <span className="font-mono tracking-widest text-sm uppercase">Initialize Transmission</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                      </>
                    )}
                    {status === 'sending' && <span className="animate-pulse font-mono uppercase text-sm">Uploading...</span>}
                    {status === 'success' && <span className="text-cyan-400 font-mono uppercase text-sm">Upload Complete ✨</span>}
                  </span>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;