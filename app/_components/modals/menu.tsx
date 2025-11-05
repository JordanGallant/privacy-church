import React from 'react'
import { usePathname } from 'next/navigation'

export default function Menu() {
  const pathname = usePathname()
  
  const getLinkFont = (linkPath: string) => {
    return pathname === linkPath 
      ? 'font-[family-name:var(--font-gt-planar-heading)]'
      : 'font-[family-name:var(--font-gt-planar-image)]'
  }
  
  const menuItems = [
    { href: '/actions', label: 'Actions' },
    { href: '/events', label: 'Events' },
    { href: '/community', label: 'Community' },
    { href: '/tools', label: 'Tools' },
    { href: '/manifesto', label: 'Manifesto' },
    { href: '/news', label: 'News' },
    { href: '/readings', label: 'Readings' }
  ]
  
  return (
    <>
      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .menu-background {
          animation: slideInFromLeft 0.5s ease-out forwards;
        }
        
        .menu-item {
          opacity: 0;
          animation: fadeSlideIn 0.4s ease-out forwards;
        }
        
        .footer-text {
          opacity: 0;
          animation: fadeSlideIn 0.4s ease-out forwards;
        }
      `}</style>
      
      <div 
        className="menu-background absolute inset-0 flex flex-col pt-18 px-6"
        style={{
          background: 'linear-gradient(to right, #ff6213, transparent)',
          fontFamily: 'var(--font-gt-planar), sans-serif',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          gap: '8px'
        }}
      >
        {menuItems.map((item, index) => (
          <a 
            key={item.href}
            href={item.href} 
            className={`menu-item text-5xl leading-tight ${getLinkFont(item.href)}`}
            style={{
              animationDelay: `${0.5 + (index * 0.1)}s`
            }}
          >
            {item.label}
          </a>
        ))}
        
        <div className="mt-auto pb-8">
          <p 
            className="footer-text text-base font-[family-name:var(--font-dm-mono)]"
            style={{
              animationDelay: `${0.5 + (menuItems.length * 0.1)}s`
            }}
          >
            Made with love, by winprivacy. 
          </p>
        </div>
      </div>
    </>
  )
}