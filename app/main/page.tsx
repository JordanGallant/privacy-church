import React from 'react'
import CustomImage from '../_components/img'
import Navbar from '../_components/nav'

export default function Main() {
  return (
    <>
    <Navbar/>
    
    <div className="px-8">
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
    </>
  )
}