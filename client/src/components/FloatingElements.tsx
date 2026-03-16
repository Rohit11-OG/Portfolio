import { useMemo } from 'react';

interface FloatingShape {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  type: 'circle' | 'square' | 'triangle';
  opacity: number;
}

export default function FloatingElements() {
  const shapes = useMemo<FloatingShape[]>(() => {
    const items: FloatingShape[] = [];
    const types: ('circle' | 'square' | 'triangle')[] = ['circle', 'square', 'triangle'];
    
    for (let i = 0; i < 15; i++) {
      items.push({
        id: i,
        size: Math.random() * 40 + 20,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 5,
        type: types[Math.floor(Math.random() * types.length)],
        opacity: Math.random() * 0.15 + 0.05,
      });
    }
    return items;
  }, []);

  const renderShape = (shape: FloatingShape) => {
    const baseStyle: React.CSSProperties = {
      position: 'absolute',
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      width: shape.size,
      height: shape.size,
      opacity: shape.opacity,
      animation: `float3D ${shape.duration}s ease-in-out infinite`,
      animationDelay: `${shape.delay}s`,
      pointerEvents: 'none',
    };

    switch (shape.type) {
      case 'circle':
        return (
          <div
            key={shape.id}
            style={{
              ...baseStyle,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
            }}
          />
        );
      case 'square':
        return (
          <div
            key={shape.id}
            style={{
              ...baseStyle,
              borderRadius: '8px',
              border: '2px solid #8b5cf6',
              transform: 'rotate(45deg)',
            }}
          />
        );
      case 'triangle':
        return (
          <div
            key={shape.id}
            style={{
              ...baseStyle,
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid #6366f1`,
            }}
          />
        );
    }
  };

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden -z-5"
      aria-hidden="true"
    >
      {shapes.map(renderShape)}
    </div>
  );
}
