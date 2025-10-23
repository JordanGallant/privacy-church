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
        className="md:hidden fixed inset-0 z-40"
        style={{
          background: 'linear-gradient(to right, #ff6213, transparent)'
        }}
      >
        <p>Actions</p>
        <p>Events</p>
        <p>Community</p>
        <p>Tools</p>
        <p>Manifesto</p>
        <p>News</p>
      </div>
    </>
  )
}