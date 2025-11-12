import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollTrailWrapperProps {
  children: ReactNode;
}

const ScrollTrailWrapper = ({ children }: ScrollTrailWrapperProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const trailCount = 8;
    const trailOffset = 15;
    const scrollTriggers: ScrollTrigger[] = [];

    // Get the original content
    const originalContent = wrapperRef.current.querySelector('.scroll-trail-original');
    if (!originalContent) return;

    // Create trail clones
    const trails: HTMLElement[] = [];
    for (let i = 1; i <= trailCount; i++) {
      const trail = originalContent.cloneNode(true) as HTMLElement;
      trail.classList.remove('scroll-trail-original');
      trail.classList.add('scroll-trail-clone');
      trail.style.position = 'absolute';
      trail.style.top = '-20px'; // Adjust this value to move trails higher
      trail.style.left = '0';
      trail.style.width = '100%';
      trail.style.opacity = '0';
      trail.style.willChange = 'transform, opacity';
      trail.style.pointerEvents = 'none';
      wrapperRef.current.appendChild(trail);
      trails.push(trail);
    }

    const st = ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        const velocity = self.getVelocity() / 1000;
        const isScrolling = Math.abs(velocity) > 0.5;
        
        if (isScrolling) {
          trails.forEach((trail, index) => {
            // Create more dramatic opacity gradient - first trail dark, last trail very light
            const opacityFactor = (trailCount - index) / trailCount; // Reversed: 1.0 to 0.125
            const opacity = Math.pow(opacityFactor, 2); // Square it for more dramatic falloff
            const yOffset = (index + 1) * trailOffset;
            
            gsap.to(trail, {
              y: yOffset,
              opacity: opacity * 0.7, // Overall brightness control
              duration: 0.1,
              ease: 'none'
            });
          });
        } else {
          trails.forEach(trail => {
            gsap.to(trail, {
              opacity: 0,
              duration: 0.3,
              ease: 'power2.out'
            });
          });
        }
      }
    });
    
    scrollTriggers.push(st);

    return () => {
      scrollTriggers.forEach(st => st.kill());
      trails.forEach(trail => trail.remove());
    };
  }, [children]);

  return (
    <div ref={wrapperRef} className="scroll-trail-wrapper relative">
      <div className="scroll-trail-original relative z-10">
        {children}
      </div>
    </div>
  );
};


export { ScrollTrailWrapper };