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
    e.preventDefault();
    e.stopPropagation();
    
    const newState = !isOpen;
    setIsOpen(newState);
    onMenuToggle?.(newState);
    
    // Remove focus immediately
    requestAnimationFrame(() => {
      e.currentTarget.blur();
    });
  };

  return (
    <>
      <nav className="relative flex items-center justify-between px-4 py-5 z-[110]">
        {hideLogo ? (
          <div className="flex-1 text-center">
            <span className="text-base font-medium">hello stranger</span>
          </div>
        ) : (
          <div className="flex items-center">
            <img 
              src="/assets/logo.svg" 
              alt="Logo" 
              className="h-8 w-auto"
            />
          </div>
        )}

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-base font-medium">
          <a href="#actions" className="hover:text-[#ff6213] transition-colors">Actions</a>
          <a href="#events" className="hover:text-[#ff6213] transition-colors">Events</a>
          <a href="#community" className="hover:text-[#ff6213] transition-colors">Community</a>
          <a href="#tools" className="hover:text-[#ff6213] transition-colors">Tools</a>
          <a href="#manifesto" className="hover:text-[#ff6213] transition-colors">Manifesto</a>
          <a href="#news" className="hover:text-[#ff6213] transition-colors">News</a>
        </div>

        {/* Mobile Menu Button - NO BLUR VERSION */}
        <button 
          onClick={toggleMenu}
          type="button"
          className="md:hidden relative flex items-center justify-center w-16 h-8 rounded-full transition-all duration-200"
          style={{
            fontFamily: 'Arial, Helvetica, sans-serif',
            backgroundColor: isOpen ? '#1E1E1E' : '#DDDEE3',
            WebkitTapHighlightColor: 'transparent',
            outline: 'none',
            border: 'none',
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            appearance: 'none',
            touchAction: 'manipulation'
          }}
        >
          <span 
            className="text-base font-medium transition-colors duration-200"
            style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              letterSpacing: '-0.01em',
              color: isOpen ? '#FFFFFF' : '#000000'
            }}
          >
            {isOpen ? 'Close' : 'Menu'}
          </span>
        </button>
      </nav>

      {/* Mobile Full-screen Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[100]">
          <div className="p-4 pt-20">
            <Menu/>
          </div>
        </div>
      )}
    </>
  )
}