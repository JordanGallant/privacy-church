'use client'
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Menu from './modals/menu';

interface NavbarProps {
  hideLogo?: boolean;
  onMenuToggle?: (isOpen: boolean) => void;
}

export default function Navbar({ hideLogo = false, onMenuToggle }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const greetingRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hideLogo && !hasAnimated && greetingRef.current && logoRef.current) {
      const timeline = gsap.timeline({
        delay: 1.5, // Wait 1.5 seconds before starting animation
        onComplete: () => setHasAnimated(true)
      });
      
      // Set initial states
      gsap.set(logoRef.current, { 
        y: -50, 
        opacity: 0 
      });
      
      gsap.set(greetingRef.current, { 
        x: 0, 
        opacity: 1 
      });

      // Animate greeting out to the left, then logo in from top
      timeline
        .to(greetingRef.current, {
          x: -100,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.inOut'
        })
        .to(logoRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out'
        }, '-=0.2'); // Start slightly before greeting finishes
    }
  }, [hideLogo, hasAnimated]);

  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    
    if (!isOpen) {
      setShouldRender(true);
      setIsOpen(true);
      onMenuToggle?.(true);
    } else {
      setIsOpen(false);
      onMenuToggle?.(false);
      setTimeout(() => {
        setShouldRender(false);
      }, 800);
    }
  };

  const greetingText = "Hello, stranger";

  return (
    <>
      <nav className="relative flex items-center justify-between px-4 py-5 z-[110]">
        {hideLogo || hasAnimated ? (
          <div className="relative flex-1 pl-[6px]">  
            {!hasAnimated && (
              <div 
                ref={greetingRef}
                className="absolute left-0 text-xl font-[family-name:var(--font-gt-planar-straight)] leading-tight pl-[6px]"
              >
                {greetingText}
              </div>
            )}
            
            <div ref={logoRef} className="relative" style={{ transform: hasAnimated ? 'translateY(0)' : 'translateY(-100px)', opacity: hasAnimated ? 1 : 0 }}>
              <a href="/home">
                <img 
                  src="/assets/logo.svg" 
                  alt="Logo" 
                  className="h-8 w-auto cursor-pointer"
                />
              </a>
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            <a href="/home">
              <img 
                src="/assets/logo.svg" 
                alt="Logo" 
                className="h-8 w-auto cursor-pointer"
              />
            </a>
          </div>
        )}

        <div className="relative w-16 h-8" style={{ transform: 'translateZ(0)', willChange: 'transform' }}>
          <button 
            onClick={toggleMenu}
            type="button"
            className="relative flex items-center justify-center w-full h-full focus:outline-none active:outline-none touch-manipulation border-0"
            style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              WebkitTapHighlightColor: 'transparent',
              border: 'none'
            }}
          >
            <div 
              className="absolute inset-0 rounded-full transition-colors duration-200"
              style={{
                background: isOpen ? '#1E1E1E' : '#DDDEE3',
                filter: 'blur(2px)',
                transform: 'translateZ(0)'
              }}
            />
            
            <span 
              className="relative text-base font-bold tracking-tight z-10 transition-colors duration-200 font-[family-name:var(--font-gt-planar-menusmall)]"
              style={{
                letterSpacing: '-0.01em',
                color: isOpen ? '#FFFFFF' : '#000000'
              }}
            >
              {isOpen ? 'Close' : 'Menu'}
            </span>
          </button>
        </div>
      </nav>

      {shouldRender && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center md:items-center">
          <div className="max-w-[420px] w-full h-screen md:h-[calc(100vh-4rem)] md:rounded-[32px] overflow-hidden relative">
            <Menu isClosing={!isOpen} />
          </div>
        </div>
      )}
    </>
  )
}