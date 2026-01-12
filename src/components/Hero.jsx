import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-50/50 blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-indigo-50/50 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
                Available for new projects
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
              Building digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">experiences</span> that scale.
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed">
              I'm a freelance developer specializing in high-performance web applications using Astro, React, and Tailwind. I turn complex problems into elegant, user-centric solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#work" 
                className="inline-flex justify-center items-center px-8 py-4 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all shadow-lg shadow-gray-200"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="inline-flex justify-center items-center px-8 py-4 rounded-xl bg-white text-gray-900 font-semibold border border-gray-200 hover:border-gray-900 transition-all"
              >
                Let's Talk
              </a>
            </div>
          </div>

          {/* Visual Element / Profile Image */}
          <div className="hidden lg:block relative">
            <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden shadow-2xl">
              {/* Replace with your actual image */}
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                alt="Freelancer Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Card */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-sm font-medium text-gray-500 leading-tight">Years of<br/>Experience</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;