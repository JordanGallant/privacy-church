import React from 'react';

export default function Heading({ text = "Your Heading Here" }) {
  return (
    <div className="w-full max-w-4xl mx-auto mb-2">
      <div className="flex items-center gap-2">
        <div className="w-[3px] h-8 bg-[#FF6213] "></div>
        
        <h2
          className="text-[#FF6213] text-[20px] font-black whitespace-nowrap uppercase font-[family-name:var(--font-gt-planar-black)]"
         
        >
          {text}
        </h2>
        
 
      </div>
    </div>
  );
}