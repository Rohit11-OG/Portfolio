import { useState, useEffect } from "react";

export default function ThreeDElement() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('three-d-container')?.getBoundingClientRect();
      if (rect) {
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        setMousePosition({ x: x * 15, y: y * 15 });
      }
    };

    const container = document.getElementById('three-d-container');
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div 
      id="three-d-container"
      className="relative w-full h-full flex items-center justify-center perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid="three-d-element"
    >
      {/* Main 3D Cube */}
      <div 
        className="relative w-40 h-40 transform-style-preserve-3d transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) ${isHovered ? 'scale(1.1)' : 'scale(1)'}`
        }}
      >
        {/* Front Face */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-lg opacity-90 transform translateZ-20 flex items-center justify-center">
          <div className="text-white font-bold text-lg">AI</div>
        </div>
        
        {/* Back Face */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-lg opacity-90 transform translateZ--20 rotateY-180 flex items-center justify-center">
          <div className="text-white font-bold text-lg">ML</div>
        </div>
        
        {/* Right Face */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80 rounded-lg opacity-90 transform rotateY-90 translateZ-20 flex items-center justify-center">
          <div className="text-white font-bold text-lg">DS</div>
        </div>
        
        {/* Left Face */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/80 to-primary/80 rounded-lg opacity-90 transform rotateY--90 translateZ-20 flex items-center justify-center">
          <div className="text-white font-bold text-lg">DL</div>
        </div>
        
        {/* Top Face */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 to-accent/70 rounded-lg opacity-90 transform rotateX-90 translateZ-20 flex items-center justify-center">
          <div className="text-white font-bold text-lg">CV</div>
        </div>
        
        {/* Bottom Face */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/70 to-primary/70 rounded-lg opacity-90 transform rotateX--90 translateZ-20 flex items-center justify-center">
          <div className="text-white font-bold text-lg">NLP</div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Orbiting rings */}
      <div 
        className="absolute w-60 h-60 border border-primary/20 rounded-full animate-spin"
        style={{ animationDuration: '20s' }}
      />
      <div 
        className="absolute w-80 h-80 border border-accent/20 rounded-full animate-spin"
        style={{ animationDuration: '30s', animationDirection: 'reverse' }}
      />
    </div>
  );
}