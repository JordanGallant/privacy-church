'use client'
import { useState } from 'react';
import CustomImage from '../_components/img';
import Navbar from '../_components/nav';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar hideLogo={!isMenuOpen} onMenuToggle={setIsMenuOpen} />

      <div className="px-6 pb-8">
        <div className="flex flex-col items-center justify-center gap-6 py-8 px-4">
          <h2 className="text-xl font-[family-name:var(--font-gt-planar-straight)] leading-tight">Welcome to the place of care and consciousness, a sanctuary for the digitally damned.</h2>
          <p className="font-[family-name:var(--font-dm-mono)]">Let's transform the era of panopticore. Made with love, by winprivacy.</p>
          <img src="/assets/t.svg" alt="Logo" className='py-4' />
        </div>
        
        <div className="grid grid-cols-0.5 gap-2.5">
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
          
          <div className="flex gap-4 md:justify-between">
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
    </>
  );
}