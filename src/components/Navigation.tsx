import React from 'react';

const Navigation = () => {
  return (
    <nav className="w-full px-8 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-vekt-dark">
          Vekt
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a 
            href="#services" 
            className="text-vekt-dark hover:text-vekt-teal transition-colors text-lg font-medium"
          >
            Services
          </a>
          <a 
            href="#team" 
            className="text-vekt-dark hover:text-vekt-teal transition-colors text-lg font-medium"
          >
            Our Team
          </a>
          <a 
            href="#contact" 
            className="text-vekt-dark hover:text-vekt-teal transition-colors text-lg font-medium"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;