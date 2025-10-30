import React from 'react'
import Navbar from '../_components/nav'
import Picks from '../_components/pick'

export default function ToolsPage() {
  return (
    <>
    <Navbar/>
    <div className="px-6 mt-2 my-8">
  <h1 className="text-5xl mb-2 leading-tight font-[family-name:var(--font-gt-planar-heading)]">
        Actions
    </h1>
    <p
          className="text-base md:text-lg leading-relaxed font-[family-name:var(--font-dm-mono)]"
          style={{ color: "#717171" }}
        >
          Each setting you change, each tracker you block, each lie you tell an algorithm, it all adds up.
        </p>

        <img src = "/assets/tool.png" className='mb-4'/>

        <Picks events={[
  { id: 1, title: "Ethereum Cypherpunk Congress", date: "2025-09-04", location: "Buenos Aires", ourPick: true },
  { id: 2, title: "Web3 Summit", date: "2025-09-10", tag: "blockchain" },
  { id: 3, title: "DeFi Conference", date: "2025-09-15", location: "New York" }
]} />

    </div>

    
    </>
  )
}
