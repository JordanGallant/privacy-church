import React from 'react'
import Navbar from '../_components/nav'
import Communities from '../_components/communities'
import Picks from '../_components/pick'

export default function EventsPage() {
  return (
    <>
    <Navbar/>
<div className="p-6 max-w-4xl mx-auto">
    <h1 className="text-5xl mb-2 leading-tight font-[family-name:var(--font-gt-planar-heading)]">
    Community
  </h1>

  <p
    className="font-[family-name:var(--font-dm-mono)] font-normal text-[15px] leading-[20px] tracking-[-0.06em]"
    style={{ color: "#717171" }}
  >
    Welcome to the Other Side of the Screen, for the curious, cautious and chronically online.
  </p>

  <img src="/assets/tool.png" alt="Tool" className="mt-4" />
</div>

     
    <Communities/>

    
    <div className="p-6 max-w-4xl mx-auto">
       <h1 className="text-2xl italic font-bold mb-2 leading-tight font-[family-name:var(--font-gt-planar-menu)]">
        IN ASIA
    </h1>
      <Picks events={[
        { id: 1, title: "Ethereum Cypherpunk Congress", date: "2025-09-04", location: "Buenos Aires", ourPick: true },
        { id: 2, title: "Web3 Summit", date: "2025-09-10", tag: "blockchain" },
        { id: 3, title: "DeFi Conference", date: "2025-09-15", location: "New York" }
      ]} />
    </div>
    </>
  )
}