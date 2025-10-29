import React from 'react'
import Navbar from '../_components/nav'
import Picks from '../_components/pick'


export default function ManifestoPage() {
  return (
    <>
    <Navbar/>
    <div className="px-6 my-8">
    <h1 className="text-5xl italic font-bold mb-2 leading-tight font-[family-name:var(--font-gt-planar-head)]">
        Manifesto
    </h1>
    <p
          className="text-base text-[#353535] md:text-lg leading-relaxed font-[family-name:var(--font-dm-mono)]"
          
        >
          The why, who and how of digital freedom
        </p>
        <br/>

         <p
          className="text-[15px]  text-[#353535] md:text-lg leading-relaxed font-[family-name:var(--font-dm-mono)]"
          
        >
          Privacy isn’t about hiding, it’s about being whole. It’s the space between you and the world where choice still exists. Every civilization has sacred spaces; the internet shouldn’t be the first to forget that. But privacy doesn’t survive by accident. It depends on the people who defend it, design for it, and demand it - the builders, the teachers, the rebels who refuse to accept surveillance as normal.
        </p>
        <br/>

        <img src = "/assets/tool.png"/>
        <br/>

        <h2 className="text-[20px]  font-[family-name:var(--font-gt-planar-straight)] leading-tight">Why privacy matters?</h2>
        <br/>

        <p className="text-[15px] text-[#353535] font-bold  leading-relaxed font-[family-name:var(--font-dm-mono)] mb-4">Because freedom needs space. </p>
        <p className="text-[15px] text-[#353535] leading-relaxed font-[family-name:var(--font-dm-mono)] ">Without privacy, there’s no room to think, change your mind, or make mistakes. Constant visibility turns people into performances. Privacy gives you the right to be unfinished, to grow without an audience.</p>
        <br/>
    
        <p className="text-[15px] text-[#353535] font-bold leading-relaxed font-[family-name:var(--font-dm-mono)] mb-4">Because power loves data.</p>
        <p className="text-[15px] text-[#353535] leading-relaxed font-[family-name:var(--font-dm-mono)]">Surveillance isn’t neutral, - it feeds whoever already has control. Governments, corporations, and algorithms use your information to predict, persuade, and profit. Privacy isn’t about hiding; it’s about limiting their power.</p>
        <br/>
    
        <p className="text-[15px] text-[#353535] font-bold leading-relaxed font-[family-name:var(--font-dm-mono)] mb-4">Because care starts with consent.</p>
        <p className="text-[15px] text-[#353535] leading-relaxed font-[family-name:var(--font-dm-mono)]">Privacy is the foundation of trust, between people, between communities, between you and the tools you use. Without consent, even connection becomes extraction. Protecting privacy means choosing relationships that respect boundaries, not break them.</p>
        <br/>

        <p className="text-[15px] text-[#353535] font-bold leading-relaxed font-[family-name:var(--font-dm-mono)] mb-4">Who it depends on?</p>
    
        <p className="text-[15px]  text-[#353535] leading-relaxed font-[family-name:var(--font-dm-mono)]">You, mostly. Governments say they care, but they’re busy writing new ways to read your DMs. Tech companies pretend to, but their business model is literally “you”.
            So it's up to you.</p>

          <p className="text-[15px] text-[#353535] leading-relaxed font-[family-name:var(--font-dm-mono)] mb-4">You don’t need to be a coder or an activist to matter. You just need to start noticing what you give away, and start taking some of it back.</p>
        <p className="text-[15px] text-[#353535] font-bold leading-relaxed font-[family-name:var(--font-dm-mono)] mb-4">What to do?</p>
        <p className="text-[15px] text-[#353535] leading-relaxed font-[family-name:var(--font-dm-mono)] mb-4" >Start where you are: question things, change defaults, confuse the algorithm. The goal isn’t to disappear, it’s to exist freely, unmeasured, unmonetized, slightly mythical.</p>
   
      <p className="text-[15px] text-[#353535] leading-relaxed font-[family-name:var(--font-dm-mono)] mb-4">Explore the fundamentals, then jump into the tools you can use.</p>
  
      <p className="text-[15px] text-[#353535] leading-relaxed font-[family-name:var(--font-dm-mono)] mb-4">Good luck divas.</p>


    </div>    
      <div className="p-6 max-w-4xl mx-auto">
      <Picks events={[
        { id: 1, title: "Ethereum Cypherpunk Congress", date: "2025-09-04", location: "Buenos Aires", ourPick: true },
        { id: 2, title: "Web3 Summit", date: "2025-09-10", tag: "blockchain" },
        { id: 3, title: "DeFi Conference", date: "2025-09-15", location: "New York" }
      ]} />
    </div>
    </>
  )
}
