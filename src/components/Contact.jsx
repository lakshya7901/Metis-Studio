import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate a form submission
    setTimeout(() => {
      setStatus('success');
      e.target.reset();
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-900 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          {/* Decorative background glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            {/* Left Side: Info */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Let’s build something <span className="text-blue-400">extraordinary.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10">
                I’m currently accepting new projects and collaborations. 
                Whether you have a fully-formed idea or just a spark, let's talk.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-blue-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">Email Me</p>
                    <p className="text-white font-medium">hello@yourdomain.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <textarea 
                placeholder="Tell me about your project..." 
                rows="4"
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
              ></textarea>
              
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-blue-600/20"
              >
                {status === 'idle' && 'Send Message'}
                {status === 'sending' && 'Sending...'}
                {status === 'success' && 'Message Sent! ✨'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;