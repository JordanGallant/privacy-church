import React from 'react'
import Navbar from '../_components/nav'
import EventsList from '../_components/events'
import Picks from '../_components/pick'

export default function EventsPage() {
  return (
    <>
    <Navbar/>
<div className="p-6 max-w-4xl mx-auto">
  <h1 className="text-5xl mb-2 leading-tight font-[family-name:var(--font-gt-planar-heading)]">
        Events
    </h1>
    <p
          className="font-[family-name:var(--font-dm-mono)] font-normal text-[15px] leading-[20px] tracking-[-0.06em] mb-4"
          style={{ color: "#717171" }}
        >
        Go if you know everything. Go if you know nothing.        </p>

        <img src = "/assets/tool.png"/>

    </div>
    <EventsList/>

    <EventsList argentina={true}/>

    <div className="p-6 max-w-4xl mx-auto">

        <h1 className="text-2xl italic  mb-2 leading-tight font-[family-name:var(--font-gt-planar-menu)]">
            BI-CURIOUS</h1>
          <Picks events={[
            { id: 1, title: "Ethereum Cypherpunk Congress", date: "2025-09-04", location: "Buenos Aires", ourPick: true },
            { id: 2, title: "Web3 Summit", date: "2025-09-10", tag: "blockchain" },
            { id: 3, title: "DeFi Conference", date: "2025-09-15", location: "New York" }
          ]} />
        </div>
    </>
  )
}
