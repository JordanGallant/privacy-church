// _components/MainModal.tsx
'use client'
import { useState, useRef, useEffect } from 'react';
import CustomImage from '../img';
import Navbar from '../nav';

interface MainModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MainModal({ isOpen, onClose }: MainModalProps) {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    // Don't track swipes if touch started on navbar
    const target = e.target as HTMLElement;
    if (target.closest('nav')) {
      return;
    }
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    // Only track if we have a valid touchStart
    if (touchStart !== 0) {
      setTouchEnd(e.targetTouches[0].clientY);
    }
  };

  const handleTouchEnd = () => {
    // Check if it's a swipe up (touchStart > touchEnd means upward swipe)
    if (touchStart !== 0 && touchStart - touchEnd > 50) {
      onClose();
    }
    // Reset touch positions
    setTouchStart(0);
    setTouchEnd(0);
  };

  useEffect(() => {
    // Prevent body scroll when modal is open
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
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50" />
      
      {/* Modal Content */}
      <div 
        className="relative min-h-screen bg-white"
        ref={contentRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Navbar hideLogo={true} />

        <div className="flex flex-col items-center justify-center gap-6 py-8 px-4">
          <h2 className="text-center">Welcome to the place of care and consciousness, a sanctuary for the digitally damned.</h2>
          <p className="text-center">Let's transform the era of panopticore. Made with love, by winprivacy.</p>
          <img src="/assets/t.png" alt="Logo" />
        </div>

        <div className="px-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <CustomImage 
                src="/assets/usb.png" 
                crop="bottom" 
                text="Tools" 
              />
            </div>
            
            <div>
              <CustomImage 
                src="/assets/statue.png" 
                crop="top" 
                text="Events" 
              />
            </div>
            
            <div className="flex gap-6">
              <CustomImage 
                src="/assets/people.png" 
                crop="shrink" 
                text="Community" 
              />
              <CustomImage 
                src="/assets/candle.png" 
                crop="shrink" 
                text="Manifesto" 
              />
            </div>

            <div>
              <CustomImage 
                src="/assets/keys.png" 
                crop="bottom" 
                text="Action" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}