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
  const [isVisible, setIsVisible] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  
  const greetingRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const navRef = useRef<HTMLElement>(null);
  const [navHeight, setNavHeight] = useState(0);

  // Logo animation effect
  useEffect(() => {
    if (hideLogo && !hasAnimated && greetingRef.current && logoRef.current) {
      const timeline = gsap.timeline({
        delay: 1.5,
        onComplete: () => setHasAnimated(true)
      });
      
      gsap.set(logoRef.current, { 
        y: -50, 
        opacity: 0 
      });
      
      gsap.set(greetingRef.current, { 
        x: 0, 
        opacity: 1 
      });

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
        }, '-=0.2');
    }
  }, [hideLogo, hasAnimated]);

  // Measure navbar height
  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);


useEffect(() => {
  const handleScroll = (e?: Event) => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        let currentScrollY = 0;
        
        // Check if scroll came from container or window
        if (e?.target && e.target !== document) {
          // Desktop: scroll from container
          const rawScrollY = (e.target as HTMLElement).scrollTop;
          currentScrollY = Math.max(0, rawScrollY);
        } else {
          // Try to find scrollable container first (desktop)
          const scrollContainer = navRef.current?.closest('.md\\:overflow-y-auto') as HTMLElement;
          if (scrollContainer && scrollContainer.scrollTop > 0) {
            currentScrollY = Math.max(0, scrollContainer.scrollTop);
          } else {
            // Mobile: use window scroll
            currentScrollY = Math.max(0, window.scrollY);
          }
        }
        
        // Make sticky immediately when scrolling starts (even 1px)
        if (currentScrollY > 1) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
          setIsVisible(true);
        }
        
        // Only handle visibility after we're already sticky
        if (currentScrollY > 1) {
          // Scrolling down - hide navbar when past threshold
          if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            setIsVisible(false);
          } 
          // Scrolling up - show navbar
          else if (currentScrollY < lastScrollY.current) {
            setIsVisible(true);
          }
        }
        
        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
      
      ticking.current = true;
    }
  };

  // Attach to both window scroll (mobile) and container scroll (desktop)
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  const scrollContainer = navRef.current?.closest('.md\\:overflow-y-auto');
  if (scrollContainer) {
    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
  }
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
    if (scrollContainer) {
      scrollContainer.removeEventListener('scroll', handleScroll);
    }
  };
}, []);

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

  // Determine background: transparent when menu is open/closing, white only when sticky and scrolling up
  const getBackgroundClass = () => {
    if (shouldRender) return 'bg-transparent';
    if (isSticky && isVisible) return 'bg-white';
    return 'bg-transparent';
  };

  return (
    <>
      {/* Spacer to prevent content jump when navbar becomes fixed */}
      {isSticky && <div style={{ height: `${navHeight}px` }} />}
      
      <nav 
        ref={navRef}
        className={`${isSticky ? 'md:sticky md:top-0 fixed top-0' : 'relative'} left-0 right-0 flex items-center justify-between px-4 py-5 z-[110] ${getBackgroundClass()}`}
        style={{
          transform: isSticky ? (isVisible ? 'translateY(0)' : 'translateY(-100%)') : 'translateY(0)',
          transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out'
        }}
      >
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
                className="h-8 w-auto cursor-pointer pl-[6px]"
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
                color: isOpen ? '#FAFAFA' : '#000000'
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