import React from 'react';
const HeroSection = () => {
  return <section className="w-full min-h-[80vh] flex items-center px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            <div className="text-vekt-dark">Cleaning.</div>
            <div className="text-vekt-dark">Dashboard.</div>
            <div className="text-vekt-dark">Insights.</div>
            <div className="text-vekt-coral">Data Analytics</div>
            <div className="text-vekt-dark">for you.</div>
          </h1>
        </div>

        {/* Right Visualization */}
        <div className="relative w-full h-96 flex items-center justify-center">
          {/* Geometric Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            {/* Chart Lines */}
            <path d="M50 200 L120 150 L180 120 L240 100 L300 80 L350 70" stroke="black" strokeWidth="3" fill="none" />
            <path d="M50 250 L120 180 L180 160 L240 140 L300 120 L350 110" stroke="black" strokeWidth="3" fill="none" />
            <path d="M50 180 L120 220 L180 190 L240 170 L300 150 L350 140" stroke="black" strokeWidth="3" fill="none" />
            <path d="M80 100 L150 160 L210 140 L270 120 L330 100 L380 90" stroke="black" strokeWidth="3" fill="none" />
            <path d="M20 150 L90 200 L150 180 L210 160 L270 140 L320 130" stroke="black" strokeWidth="3" fill="none" />

            {/* Data Points - Teal */}
            <circle cx="180" cy="120" r="8" fill="hsl(var(--vekt-teal))" />
            <circle cx="300" cy="80" r="8" fill="hsl(var(--vekt-teal))" />
            <circle cx="150" cy="160" r="6" fill="hsl(var(--vekt-teal))" />

            {/* Data Points - Coral */}
            <circle cx="240" cy="140" r="8" fill="hsl(var(--vekt-coral))" />
            <circle cx="120" cy="180" r="8" fill="hsl(var(--vekt-coral))" />
            <circle cx="270" cy="120" r="6" fill="hsl(var(--vekt-coral))" />

            {/* Inner circles for contrast */}
            <circle cx="180" cy="120" r="3" fill="black" />
            <circle cx="300" cy="80" r="3" fill="black" />
            <circle cx="240" cy="140" r="3" fill="black" />
            <circle cx="120" cy="180" r="3" fill="black" />
          </svg>
        </div>
      </div>
    </section>;
};
export default HeroSection;