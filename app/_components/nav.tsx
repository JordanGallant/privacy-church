'use client'
import { useState } from 'react';
import Menu from './modals/menu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="relative flex items-center justify-between px-4 py-5 z-[110]">
        <div className="flex items-center">
          <img 
            src="/assets/logo.svg" 
            alt="Logo" 
            className="h-8 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-base font-medium">
          <a href="#actions" className="hover:text-[#ff6213] transition-colors">Actions</a>
          <a href="#events" className="hover:text-[#ff6213] transition-colors">Events</a>
          <a href="#community" className="hover:text-[#ff6213] transition-colors">Community</a>
          <a href="#tools" className="hover:text-[#ff6213] transition-colors">Tools</a>
          <a href="#manifesto" className="hover:text-[#ff6213] transition-colors">Manifesto</a>
          <a href="#news" className="hover:text-[#ff6213] transition-colors">News</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative flex items-center justify-center w-16 h-8"
        >
          <div 
            className="absolute inset-0 rounded-full transition-colors"
            style={{
              background: isOpen ? '#1E1E1E' : '#DDDEE3',
              filter: 'blur(2px)'
            }}
          />
          
          <span 
            className="relative text-base font-medium tracking-tight z-10"
            style={{
              fontFamily: 'GT Planar Trial, sans-serif',
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
        <div className="md:hidden fixed inset-0  z-[100]">
          <div className="p-4 pt-20">
            <Menu/>
          </div>
        </div>
      )}
    </>
  )
}