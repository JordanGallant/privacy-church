import React from 'react'
import Navbar from '../_components/nav'
import Picks from '../_components/pick'
import Heading from '../_components/tiny/heading'

export default function ToolsPage() {
  return (
    <>
    <Navbar/>
<div className="p-6 max-w-4xl mx-auto">
  <h1 className="text-5xl mb-2 leading-tight font-[family-name:var(--font-gt-planar-heading)]">
        Actions
    </h1>
    <p
            className="font-[family-name:var(--font-dm-mono)] font-normal text-[15px] leading-[20px] tracking-[-0.06em] mb-4"

          style={{ color: "#717171" }}
        >
          Each setting you change, each tracker you block, each lie you tell an algorithm, it all adds up.
        </p>

        <img src = "/assets/tool.png" className='mb-8'/>
        <Heading text="Policy-Level Engagement" />
       
        <Picks events={[
  { id: 1, title: "Ethereum Cypherpunk Congress", date: "2025-09-04", location: "Buenos Aires", ourPick: true },
  { id: 2, title: "Web3 Summit", date: "2025-09-10", tag: "blockchain" },
  { id: 3, title: "DeFi Conference", date: "2025-09-15", location: "New York" }
]} />

    </div>

    
    </>
  )
}
