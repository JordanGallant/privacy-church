import React from 'react'

export default function Menu() {
  return (
    <div 
      className="md:hidden fixed inset-0 z-40 flex flex-col gap-3 pt-24 px-8"
      style={{
        background: 'linear-gradient(to right, #ff6213, transparent)',
        fontFamily: 'var(--font-gt-planar), sans-serif'
      }}
    >
      <a 
        href="/actions" 
        className="text-5xl italic  mb-2 leading-tight font-[family-name:var(--font-gt-planar-menu)]"
      >
        Actions
      </a>
      <a 
        href="/events" 
        className="text-5xl italic  mb-2 leading-tight font-[family-name:var(--font-gt-planar-menu)]"
      >
        Events
      </a>
      <a 
        href="/community" 
        className="text-5xl italic  mb-2 leading-tight font-[family-name:var(--font-gt-planar-menu)]"
      >
        Community
      </a>
      <a 
        href="/tools" 
        className="text-5xl italic  mb-2 leading-tight font-[family-name:var(--font-gt-planar-head)]"
      >
        Tools
      </a>
      <a 
        href="/manifesto" 
        className="text-5xl italic  mb-2 leading-tight font-[family-name:var(--font-gt-planar-menu)]"
      >
        Manifesto
      </a>
      <a 
        href="/news" 
        className="text-5xl italic  mb-2 leading-tight font-[family-name:var(--font-gt-planar-menu)]"
      >
        News
      </a>
      
      <div className="mt-auto pb-8">
        <p className="text-base   font-[family-name:var(--font-gt-planar-light)]">
          Made with love, by winprivacy. 
        </p>
      </div>
    </div>
  )
}