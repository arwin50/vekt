import React from "react";
const HeroSection = () => {
  return (
    <section className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-5 sm:space-y-7 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <div className="text-vekt-dark">Cleaning.</div>
            <div className="text-vekt-dark">Dashboard.</div>
            <div className="text-vekt-dark">Insights.</div>
            <div className="text-vekt-coral">Data Analytics</div>
            <div className="text-vekt-dark">for you.</div>
          </h1>
          <p className="text-xl sm:text-2xl text-vekt-dark/80 max-w-2xl mx-auto lg:mx-0">
            Transform your data into actionable insights with our comprehensive
            analytics solutions.
          </p>
        </div>

        {/* Right Visualization */}
        <div className="relative w-full h-72 sm:h-96 lg:h-[28rem] flex items-center justify-center">
          {/* Geometric Lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 400 300"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Chart Lines */}
            <path
              d="M20 250 L80 200 L140 170 L200 150 L260 130 L320 110 L380 90"
              stroke="black"
              strokeWidth="6"
              fill="none"
            />
            <path
              d="M20 280 L80 220 L140 190 L200 170 L260 150 L320 130 L380 110"
              stroke="black"
              strokeWidth="6"
              fill="none"
            />
            <path
              d="M20 220 L80 260 L140 230 L200 210 L260 190 L320 170 L380 150"
              stroke="black"
              strokeWidth="6"
              fill="none"
            />
            <path
              d="M50 120 L110 180 L170 160 L230 140 L290 120 L350 100 L380 80"
              stroke="black"
              strokeWidth="6"
              fill="none"
            />
            <path
              d="M10 180 L70 230 L130 210 L190 190 L250 170 L310 150 L370 130"
              stroke="black"
              strokeWidth="6"
              fill="none"
            />

            {/* Data Points - Teal */}
            <circle cx="140" cy="170" r="12" fill="hsl(var(--vekt-teal))" />
            <circle cx="320" cy="110" r="12" fill="hsl(var(--vekt-teal))" />
            <circle cx="110" cy="180" r="10" fill="hsl(var(--vekt-teal))" />

            {/* Data Points - Coral */}
            <circle cx="200" cy="170" r="12" fill="hsl(var(--vekt-coral))" />
            <circle cx="80" cy="260" r="12" fill="hsl(var(--vekt-coral))" />
            <circle cx="290" cy="120" r="10" fill="hsl(var(--vekt-coral))" />

            {/* Inner circles for contrast */}
            <circle cx="140" cy="170" r="5" fill="black" />
            <circle cx="320" cy="110" r="5" fill="black" />
            <circle cx="200" cy="170" r="5" fill="black" />
            <circle cx="80" cy="260" r="5" fill="black" />
          </svg>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
