import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="text-xl font-bold tracking-tighter text-gray-900">
              DEV<span className="text-blue-600">.</span>PORTFOLIO
            </a>
            <p className="mt-4 text-gray-500 max-w-xs leading-relaxed">
              Crafting high-performance digital solutions with modern technologies. Available for freelance opportunities worldwide.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#work" className="text-gray-600 hover:text-blue-600 transition-colors">Work</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Social</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors inline-flex items-center gap-2">LinkedIn</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors inline-flex items-center gap-2">GitHub</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors inline-flex items-center gap-2">Twitter / X</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
          <button 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors flex items-center gap-2"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;