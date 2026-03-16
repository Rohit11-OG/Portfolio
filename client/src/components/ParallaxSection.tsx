import { ReactNode } from 'react';
import { useElementParallax } from '@/hooks/useParallax';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxSection({ 
  children, 
  speed = 0.15, 
  className = '' 
}: ParallaxSectionProps) {
  const { ref, offset } = useElementParallax(speed);
  
  return (
    <div 
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {children}
    </div>
  );
}
