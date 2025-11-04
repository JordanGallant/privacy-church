'use client'
import { useState, useEffect } from 'react';
import Menu from './modals/menu';

interface NavbarProps {
  hideLogo?: boolean;
  onMenuToggle?: (isOpen: boolean) => void;
}

export default function Navbar({ hideLogo = false, onMenuToggle }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(hideLogo);

  useEffect(() => {
    if (hideLogo) {
      // Wait 5 seconds, then fade out greeting and show logo
      const timer = setTimeout(() => {
        setShowGreeting(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [hideLogo]);

  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newState = !isOpen;
    setIsOpen(newState);
    onMenuToggle?.(newState);
    
    // Remove focus from button to prevent styling issue
    e.currentTarget.blur();
  };

  // Split text into individual characters for wave animation
  const greetingText = "Hello, stranger";
  const greetingChars = greetingText.split('');

  return (
    <>
      <style jsx>{`
        @keyframes wave {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        .wave-char {
          display: inline-block;
          animation: wave 2.5s ease-in-out infinite;
        }
      `}</style>

      <nav className="relative flex items-center justify-between px-4 py-5 z-[110]">
        {hideLogo ? (
          <div className="relative flex-1 text-center">
            {/* Greeting text with wave animation */}
            <div 
              className={`absolute inset-0 flex items-center justify-center text-xl font-[family-name:var(--font-gt-planar-straight)] leading-tight transition-opacity duration-700 ${
                showGreeting ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {greetingChars.map((char, index) => (
                <span
                  key={index}
                  className="wave-char"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </div>
            
            {/* Logo */}
            <div 
              className={`transition-opacity duration-700 ${
                showGreeting ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <a href="/home">
                <img 
                  src="/assets/logo.svg" 
                  alt="Logo" 
                  className="h-8 w-auto cursor-pointer mx-auto"
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

      {/* Mobile Full-screen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center md:items-center">
          <div className="max-w-[420px] w-full h-screen md:h-[calc(100vh-4rem)] md:rounded-lg overflow-hidden relative">
            <Menu/>
          </div>
        </div>
      )}
    </>
  )
}