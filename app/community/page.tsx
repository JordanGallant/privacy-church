import React from 'react'
import Navbar from '../_components/nav'
import Communities from '../_components/communities'

export default function EventsPage() {
  return (
    <>
    <Navbar/>
    <div className="px-6 my-8">
    <h1 className="text-5xl italic font-bold mb-2 leading-tight font-[family-name:var(--font-gt-planar-head)]">
        Community
    </h1>
    <p
          className="text-base md:text-lg leading-relaxed font-[family-name:var(--font-dm-mono)]"
          style={{ color: "#717171" }}
        >
        Welcome to the Other Side of the Screen, for the curious, cautious and chronically online.        </p>

        <img src = "/assets/tool.png"/>

    </div>
    <Communities/>
    </>
  )
}
