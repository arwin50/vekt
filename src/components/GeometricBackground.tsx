import React from 'react';

const GeometricBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Large geometric shapes */}
        
        {/* Top left area - Large triangle */}
        <polygon 
          points="0,0 300,0 0,400" 
          fill="hsl(var(--vekt-teal))" 
          opacity="0.03"
        />
        
        {/* Top right - Circle */}
        <circle 
          cx="85%" 
          cy="15%" 
          r="200" 
          fill="hsl(var(--vekt-coral))" 
          opacity="0.04"
        />
        
        {/* Center area - Diamond/Rhombus */}
        <polygon 
          points="50%,30% 65%,45% 50%,60% 35%,45%" 
          fill="hsl(var(--vekt-teal))" 
          opacity="0.02"
          transform="scale(3)"
        />
        
        {/* Bottom right - Large pentagon */}
        <polygon 
          points="1200,800 1400,700 1500,900 1300,1100 1100,1000" 
          fill="hsl(var(--vekt-coral))" 
          opacity="0.03"
        />
        
        {/* Left side - Vertical rectangle */}
        <rect 
          x="5%" 
          y="40%" 
          width="120" 
          height="400" 
          fill="hsl(var(--vekt-teal))" 
          opacity="0.02"
          transform="rotate(15)"
        />
        
        {/* Bottom area - Large triangle */}
        <polygon 
          points="30%,100% 70%,100% 50%,70%" 
          fill="hsl(var(--vekt-coral))" 
          opacity="0.025"
        />
        
        {/* Scattered smaller shapes */}
        
        {/* Small circles */}
        <circle cx="15%" cy="25%" r="40" fill="hsl(var(--vekt-coral))" opacity="0.02" />
        <circle cx="80%" cy="40%" r="60" fill="hsl(var(--vekt-teal))" opacity="0.015" />
        <circle cx="25%" cy="75%" r="35" fill="hsl(var(--vekt-coral))" opacity="0.02" />
        <circle cx="90%" cy="80%" r="45" fill="hsl(var(--vekt-teal))" opacity="0.02" />
        
        {/* Small triangles */}
        <polygon points="200,300 250,300 225,250" fill="hsl(var(--vekt-teal))" opacity="0.015" />
        <polygon points="800,200 850,200 825,150" fill="hsl(var(--vekt-coral))" opacity="0.02" />
        <polygon points="600,600 650,600 625,550" fill="hsl(var(--vekt-teal))" opacity="0.015" />
        
        {/* Small rectangles */}
        <rect x="40%" y="20%" width="80" height="20" fill="hsl(var(--vekt-coral))" opacity="0.015" transform="rotate(45)" />
        <rect x="70%" y="65%" width="60" height="15" fill="hsl(var(--vekt-teal))" opacity="0.02" transform="rotate(-30)" />
        <rect x="10%" y="60%" width="70" height="25" fill="hsl(var(--vekt-coral))" opacity="0.015" transform="rotate(60)" />
        
        {/* Line elements for connectivity */}
        <line x1="20%" y1="30%" x2="40%" y2="20%" stroke="hsl(var(--vekt-teal))" strokeWidth="2" opacity="0.05" />
        <line x1="60%" y1="25%" x2="80%" y2="35%" stroke="hsl(var(--vekt-coral))" strokeWidth="2" opacity="0.04" />
        <line x1="15%" y1="70%" x2="35%" y2="80%" stroke="hsl(var(--vekt-teal))" strokeWidth="1.5" opacity="0.04" />
        <line x1="70%" y1="75%" x2="85%" y2="85%" stroke="hsl(var(--vekt-coral))" strokeWidth="1.5" opacity="0.05" />
        
        {/* Curved paths */}
        <path d="M 100,500 Q 300,400 500,500" stroke="hsl(var(--vekt-teal))" strokeWidth="2" fill="none" opacity="0.03" />
        <path d="M 600,300 Q 800,200 1000,300" stroke="hsl(var(--vekt-coral))" strokeWidth="2" fill="none" opacity="0.04" />
      </svg>
    </div>
  );
};

export default GeometricBackground;