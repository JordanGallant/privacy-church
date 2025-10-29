'use client'
import { useState, useRef, useEffect } from 'react';
import CustomImage from '../img';
import Navbar from '../nav';
import Link from 'next/link';

interface MainModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MainModal({ isOpen, onClose }: MainModalProps) {
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('nav')) {
      return;
    }
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX !== 0) {
      setTouchEndX(e.targetTouches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (touchStartX !== 0 && touchEndX - touchStartX > 100) {
      onClose();
    }
    setTouchStartX(0);
    setTouchEndX(0);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto md:flex md:items-start md:justify-center">
      <div className="fixed inset-0 bg-blue-600 bg-opacity-50" />
      
      <div 
        className="relative min-h-screen bg-white md:max-w-[480px] md:w-full"
        ref={contentRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Navbar hideLogo={!isMenuOpen} onMenuToggle={setIsMenuOpen} />

        <div className="px-8 pb-8">
          <div className="flex flex-col items-center justify-center gap-6 py-8 px-4">
            <h2 className="text-xl font-[family-name:var(--font-gt-planar-straight)] leading-tight">Welcome to the place of care and consciousness, a sanctuary for the digitally damned.</h2>
            <p className=" font-[family-name:var(--font-dm-mono)]">Let's transform the era of panopticore. Made with love, by winprivacy.</p>
            <img src="/assets/t.svg" alt="Logo" />
          </div>
              <div className="grid grid-cols-1 gap-4">
            <div>
              <Link href="/actions">
                <CustomImage
                  src="/assets/keys.png" 
                  crop="bottom" 
                  text="Action" 
                  subtext='Where belief becomes practice'
                />
              </Link>
            </div>
            
            <div>
              <Link href="/events">
                <CustomImage
                  src="/assets/statue.png" 
                  crop="top" 
                  text="Events"
                  subtext='Show up in real life'
                />
              </Link>
            </div>
            
            <div>
              <Link href="/community">
                <CustomImage
                  src="/assets/people.png" 
                  text="Community" 
                  subtext='Where connections begin'
                />
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <Link href="/tools">
                <CustomImage
                  src="/assets/usb.png" 
                  crop="shrink" 
                  text="Tools" 
                  subtext='A-Z'
                  invert={true}
                />
              </Link>

              <Link href="/manifesto">
                <CustomImage 
                  src="/assets/candle.png" 
                  crop="shrink" 
                  text="Manifesto" 
                  subtext='Why, who, how'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}