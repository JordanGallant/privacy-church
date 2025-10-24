import React from 'react'

export default function Menu() {
  return (
    <div 
      className="md:hidden fixed inset-0 z-40 flex flex-col gap-6 pt-24 px-8"
      style={{
        background: 'linear-gradient(to right, #ff6213, transparent)',
        fontFamily: 'var(--font-gt-planar), sans-serif'
      }}
    >
      <a 
        href="#actions" 
        className="text-2xl font-bold text-black hover:opacity-70 transition-opacity"
      >
        Actions
      </a>
      <a 
        href="#events" 
        className="text-2xl font-bold text-black hover:opacity-70 transition-opacity"
      >
        Events
      </a>
      <a 
        href="#community" 
        className="text-2xl font-bold text-black hover:opacity-70 transition-opacity"
      >
        Community
      </a>
      <a 
        href="#tools" 
        className="text-2xl font-bold text-black hover:opacity-70 transition-opacity"
      >
        Tools
      </a>
      <a 
        href="#manifesto" 
        className="text-2xl font-bold text-black hover:opacity-70 transition-opacity"
      >
        Manifesto
      </a>
      <a 
        href="#news" 
        className="text-2xl font-bold text-black hover:opacity-70 transition-opacity"
      >
        News
      </a>
    </div>
  )
}