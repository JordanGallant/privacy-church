import React from 'react'

export default function Menu() {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-base font-medium">
        <a href="#actions" className="hover:text-[#ff6213] transition-colors">Actions</a>
        <a href="#events" className="hover:text-[#ff6213] transition-colors">Events</a>
        <a href="#community" className="hover:text-[#ff6213] transition-colors">Community</a>
        <a href="#tools" className="hover:text-[#ff6213] transition-colors">Tools</a>
        <a href="#manifesto" className="hover:text-[#ff6213] transition-colors">Manifesto</a>
        <a href="#news" className="hover:text-[#ff6213] transition-colors">News</a>
      </nav>

      {/* Mobile Full-screen Menu */}
      <div 
        className="md:hidden fixed inset-0 z-40 flex flex-col gap-6 pt-24 px-8"
        style={{
          background: 'linear-gradient(to right, #ff6213, transparent)',
          fontFamily: 'GT Planar Trial, sans-serif'
        }}
      >
        <style jsx>{`
          @font-face {
            font-family: 'GT Planar Trial';
            src: url('/fonts/GT-Planar/GT-Planar-Retalic-15-Bold-Trial.woff2') format('woff2');
            font-weight: bold;
            font-style: italic;
          }
        `}</style>
        
        <a href="#actions" className="text-2xl font-bold text-black hover:opacity-70 transition-opacity">Actions</a>
        <a href="#events" className="text-2xl font-bold text-black hover:opacity-70 transition-opacity">Events</a>
        <a href="#community" className="text-2xl font-bold text-black hover:opacity-70 transition-opacity">Community</a>
        <a href="#tools" className="text-2xl font-bold text-black hover:opacity-70 transition-opacity">Tools</a>
        <a href="#manifesto" className="text-2xl font-bold text-black hover:opacity-70 transition-opacity">Manifesto</a>
        <a href="#news" className="text-2xl font-bold text-black hover:opacity-70 transition-opacity">News</a>
      </div>
    </>
  )
}