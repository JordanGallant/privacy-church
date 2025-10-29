'use client'
import { useState } from 'react';
import Menu from './modals/menu';

interface NavbarProps {
  hideLogo?: boolean;
  onMenuToggle?: (isOpen: boolean) => void;
}

export default function Navbar({ hideLogo = false, onMenuToggle }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newState = !isOpen;
    setIsOpen(newState);
    onMenuToggle?.(newState);
    
    // Remove focus from button to prevent styling issue
    e.currentTarget.blur();
  };

  return (
    <>
      <nav className="relative flex items-center justify-between px-4 py-5 z-[110]">
        {hideLogo ? (
          <div className="flex-1 text-center">
            <span className="text-xl font-[family-name:var(--font-gt-planar-straight)] leading-tight">Hello, stranger</span>
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
<div className="max-w-[480px] w-full h-screen md:h-[calc(100vh-4rem)] md:rounded-lg overflow-hidden relative">
      <Menu/>
    </div>
  </div>
)}
    </>
  )
}