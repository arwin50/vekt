import React from 'react';

const TeamSection = () => {
  return (
    <section id="team" className="w-full py-20 px-8 bg-vekt-light">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-vekt-dark mb-8">
          Our Team
        </h2>
        
        <p className="text-xl text-vekt-dark max-w-3xl mx-auto leading-relaxed">
          We're a passionate team of data scientists, analysts, and engineers dedicated to 
          transforming complex data into actionable insights. With expertise spanning machine 
          learning, statistical analysis, and data visualization, we help businesses unlock 
          the full potential of their data.
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6">
            <div className="w-20 h-20 bg-vekt-teal rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-bold text-vekt-dark mb-2">Data Scientists</h3>
            <p className="text-vekt-dark">Expert in machine learning and predictive modeling</p>
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <div className="w-20 h-20 bg-vekt-coral rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-bold text-vekt-dark mb-2">Data Analysts</h3>
            <p className="text-vekt-dark">Specialized in statistical analysis and insights</p>
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <div className="w-20 h-20 bg-vekt-dark rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-bold text-vekt-dark mb-2">Data Engineers</h3>
            <p className="text-vekt-dark">Focused on data infrastructure and pipelines</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;