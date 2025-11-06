'use client'
import { useState, useEffect } from 'react';
import Menu from './modals/menu';

interface NavbarProps {
  hideLogo?: boolean;
  onMenuToggle?: (isOpen: boolean) => void;
}

export default function Navbar({ hideLogo = false, onMenuToggle }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [showGreeting, setShowGreeting] = useState(hideLogo);

  useEffect(() => {
    if (hideLogo) {
      const timer = setTimeout(() => {
        setShowGreeting(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [hideLogo]);

  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    
    if (!isOpen) {
      // Opening
      setShouldRender(true);
      setIsOpen(true);
      onMenuToggle?.(true);
    } else {
      // Closing - trigger animation first
      setIsOpen(false);
      onMenuToggle?.(false);
      // Delay unmounting to allow animation to complete
      setTimeout(() => {
        setShouldRender(false);
      }, 800); // Match this to your closing animation duration
    }
  };

  const greetingText = "Hello, stranger";

  return (
    <>
      <nav className="relative flex items-center justify-between px-4 py-5 z-[110]">
        {hideLogo ? (
        <div className="relative flex-1 pl-[6px]">  
            <div 
              className={`absolute left-0 text-xl font-[family-name:var(--font-gt-planar-straight)] leading-tight transition-opacity duration-200 ease-in-out pl-[6px] ${
                showGreeting ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {greetingText}
            </div>
            
            <div 
              className={`transition-opacity duration-200 ease-in-out  ${
                showGreeting ? 'opacity-0' : 'opacity-100'
              }`}
            >
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
          <div className="max-w-[420px] w-full h-screen md:h-[calc(100vh-4rem)] md:rounded-lg overflow-hidden relative">
            <Menu isClosing={!isOpen} />
          </div>
        </div>
      )}
    </>
  )
}