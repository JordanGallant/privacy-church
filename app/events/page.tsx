import React from 'react'
import Navbar from '../_components/nav'
import EventsList from '../_components/events'

export default function EventsPage() {
  return (
    <>
    <Navbar/>
    <div className="px-6 my-8">
    <h1 className="text-5xl italic font-bold mb-2 leading-tight font-[family-name:var(--font-gt-planar-head)]">
        Events
    </h1>
    <p
          className="text-base md:text-lg leading-relaxed font-[family-name:var(--font-dm-mono)]"
          style={{ color: "#717171" }}
        >
        Go if you know everything. Go if you know nothing.        </p>

        <img src = "/assets/tool.png"/>

    </div>
    <EventsList/>

    <EventsList argentina={true}/>
    </>
  )
}
