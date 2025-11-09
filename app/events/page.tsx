import React from 'react'
import Navbar from '../_components/nav'
import EventsList from '../_components/events'
import Picks from '../_components/pick'
import Heading from '../_components/tiny/heading'

export default function EventsPage() {
  return (
    <>
    <Navbar/>
<div className="px-6 max-w-4xl mx-auto">
<h1 className="text-5xl mb-2 leading-tight font-[family-name:var(--font-gt-planar-heading)] pl-[10px]">
    Events
  </h1>
  
    <p
          className="font-[family-name:var(--font-dm-mono)] font-normal text-[15px] leading-[20px] tracking-[-0.06em] mb-4"
          style={{ color: "#717171" }}
        >
        Go if you know everything. Go if you know nothing.        </p>

      

    </div>
    <div className='pl-6'>
    <Heading text="Featured" />
    </div>
    <EventsList/>
     <div className='pl-6'>
    <Heading text="Devcon Side Events" />
    </div>
    <EventsList argentina={true}/>

    </>
  )
}
