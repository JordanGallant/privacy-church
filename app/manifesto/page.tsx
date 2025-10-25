import React from 'react'
import Navbar from '../_components/nav'

export default function ManifestoPage() {
  return (
    <>
    <Navbar/>
    <div className="px-6 my-8">
    <h1 className="text-5xl italic font-bold mb-2 leading-tight font-[family-name:var(--font-gt-planar-head)]">
        Manifesto
    </h1>
    <p
          className="text-base md:text-lg leading-relaxed font-[family-name:var(--font-dm-mono)]"
          style={{ color: "#717171" }}
        >
          The why, who and how of digital freedom
        </p>
        <br/>

         <p
          className="text-base  md:text-lg leading-relaxed font-[family-name:var(--font-dm-mono)]"
          style={{ color: "#717171" }}
        >
          Privacy isn’t about hiding, it’s about being whole. It’s the space between you and the world where choice still exists. Every civilization has sacred spaces; the internet shouldn’t be the first to forget that. But privacy doesn’t survive by accident. It depends on the people who defend it, design for it, and demand it - the builders, the teachers, the rebels who refuse to accept surveillance as normal.
        </p>

        <img src = "/assets/tool.png"/>

        <h2 className="text-xl font-[family-name:var(--font-gt-planar-straight)] leading-tight">Why privacy matters?</h2>
        <br/>

        <p className="text-base font-bold  md:text-lg leading-relaxed font-[family-name:var(--font-dm-mono)]">Because freedom needs space. </p>
        <br></br>
        <p className="text-base md:text-lg leading-relaxed font-[family-name:var(--font-dm-mono)]">Without privacy, there’s no room to think, change your mind, or make mistakes. Constant visibility turns people into performances. Privacy gives you the right to be unfinished, to grow without an audience.</p>
        <br/>
        <br/>
        <p className="text-base font-bold md:text-lg leading-relaxed font-[family-name:var(--font-dm-mono)]">Because power loves data.</p>
        <br/>
        <p className="text-base  md:text-lg leading-relaxed font-[family-name:var(--font-dm-mono)]">Surveillance isn’t neutral, - it feeds whoever already has control. Governments, corporations, and algorithms use your information to predict, persuade, and profit. Privacy isn’t about hiding; it’s about limiting their power.</p>
        <br/>
        <br/>
        <p className="text-base font-bold md:text-lg leading-relaxed font-[family-name:var(--font-dm-mono)]">Because care starts with consent.</p>
        <br/>
        <p className="text-base  md:text-lg leading-relaxed font-[family-name:var(--font-dm-mono)]">Privacy is the foundation of trust, between people, between communities, between you and the tools you use. Without consent, even connection becomes extraction. Protecting privacy means choosing relationships that respect boundaries, not break them.</p>
        <br/>
        <br/>
        <p className="text-base font-bold md:text-lg leading-relaxed font-[family-name:var(--font-dm-mono)]">Who it depends on?</p>
        <br/>
        <p className="text-base  md:text-lg leading-relaxed font-[family-name:var(--font-dm-mono)]">You, mostly. Governments say they care, but they’re busy writing new ways to read your DMs. Tech companies pretend to, but their business model is literally “you”.
            So it's up to you.</p>
          <br/>
          <p className="text-base  md:text-lg leading-relaxed font-[family-name:var(--font-dm-mono)]">You don’t need to be a coder or an activist to matter. You just need to start noticing what you give away, and start taking some of it back.</p>
        <br/>
        <br/>
        <p className="text-base font-bold md:text-lg leading-relaxed font-[family-name:var(--font-dm-mono)]">What to do?</p>
        <br/>
        <p className="text-base  md:text-lg leading-relaxed font-[family-name:var(--font-dm-mono)]" >Start where you are: question things, change defaults, confuse the algorithm. The goal isn’t to disappear, it’s to exist freely, unmeasured, unmonetized, slightly mythical.</p>
        <br/>
      <p className="text-base  md:text-lg leading-relaxed font-[family-name:var(--font-dm-mono)]">Explore the fundamentals, then jump into the tools you can use.</p>
      <br/>
      <p className="text-base  md:text-lg leading-relaxed font-[family-name:var(--font-dm-mono)]">Good luck divas.</p>


    </div>
    </>
  )
}
