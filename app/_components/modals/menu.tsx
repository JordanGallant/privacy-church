import React from 'react'
import { usePathname } from 'next/navigation'

export default function Menu() {
  const pathname = usePathname()
  
  const getLinkFont = (linkPath: string) => {
    return pathname === linkPath 
      ? 'font-[family-name:var(--font-gt-planar-heading)]'
      : 'font-[family-name:var(--font-gt-planar-image)]'
  }
  
  return (
    <div 
      className="absolute inset-0 flex flex-col pt-24 px-6"
      style={{
        background: 'linear-gradient(to right, #ff6213, transparent)',
        fontFamily: 'var(--font-gt-planar), sans-serif',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        gap: '8px'
      }}
    >
      <a 
        href="/actions" 
        className={`text-5xl leading-tight ${getLinkFont('/actions')}`}
      >
        Actions
      </a>
      <a 
        href="/events" 
        className={`text-5xl leading-tight ${getLinkFont('/events')}`}
      >
        Events
      </a>
      <a 
        href="/community" 
        className={`text-5xl leading-tight ${getLinkFont('/community')}`}
      >
        Community
      </a>
      <a 
        href="/tools" 
        className={`text-5xl leading-tight ${getLinkFont('/tools')}`}
      >
        Tools
      </a>
      <a 
        href="/manifesto" 
        className={`text-5xl leading-tight ${getLinkFont('/manifesto')}`}
      >
        Manifesto
      </a>
      <a 
        href="/news" 
        className={`text-5xl leading-tight ${getLinkFont('/news')}`}
      >
        News
      </a>
      
      <div className="mt-auto pb-8">
        <p className="text-base font-[family-name:var(--font-dm-mono)]">
          Made with love, by winprivacy. 
        </p>
      </div>
    </div>
  )
}