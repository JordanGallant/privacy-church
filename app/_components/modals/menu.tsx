import React, { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'

interface MenuProps {
  isClosing?: boolean
}

export default function Menu({ isClosing = false }: MenuProps) {
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([])
  const footerRef = useRef<HTMLParagraphElement>(null)
  
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
  
  useEffect(() => {
    if (!menuRef.current) return
    
    const tl = gsap.timeline()
    
    // Opening animation (runs on mount)
    tl.fromTo(
      menuRef.current,
      { x: '-100%' },
      { x: '0%', duration: 0.5, ease: 'power3.out' }
    )
    .fromTo(
      itemsRef.current.filter(Boolean),
      { 
        opacity: 0, 
        x: -30 
      },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.4,
        stagger: 0.08,
        ease: 'power2.out'
      },
      '-=0.2'
    )
    .fromTo(
      footerRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' },
      '-=0.2'
    )
    
    return () => {
      tl.kill()
    }
  }, [])
  
  // Closing animation
  useEffect(() => {
    if (!isClosing || !menuRef.current) return
    
    const tl = gsap.timeline()
    
    tl.to(
      footerRef.current,
      { opacity: 0, x: -30, duration: 0.3, ease: 'power2.in' }
    )
    .to(
      [...itemsRef.current].filter(Boolean).reverse(),
      { 
        opacity: 0, 
        x: -30, 
        duration: 0.3,
        stagger: 0.05,
        ease: 'power2.in'
      },
      '-=0.2'
    )
    .to(
      menuRef.current,
      { 
        opacity: 0,
        duration: 0.5, 
        ease: 'power2.inOut' 
      },
      '-=0.1'
    )
    
    return () => {
      tl.kill()
    }
  }, [isClosing])
  
  return (
    <div 
      ref={menuRef}
      className="absolute inset-0 flex flex-col pt-18 px-6"
      style={{
        background: 'linear-gradient(to right, #d94f0f 0%, #ff6213 40%, transparent 100%)',
        fontFamily: 'var(--font-gt-planar), sans-serif',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        gap: '8px',
        transform: 'translateX(-100%)'
      }}
    >
      {menuItems.map((item, index) => (
        <a 
          key={item.href}
          ref={el => {
            itemsRef.current[index] = el
          }}
          href={item.href} 
          className={`text-5xl leading-tight ${getLinkFont(item.href)}`}
          style={{ opacity: 0 }}
        >
          {item.label}
        </a>
      ))}
      
      <div className="mt-auto pb-8">
        <p 
          ref={footerRef}
          className="text-base font-[family-name:var(--font-dm-mono)]"
          style={{ opacity: 0 }}
        >
          Made with love, by winprivacy. 
        </p>
      </div>
    </div>
  )
}