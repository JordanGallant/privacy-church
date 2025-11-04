import React from 'react'
import Navbar from '../_components/nav'
import Communities from '../_components/communities'
import Picks from '../_components/pick'
import Heading from '../_components/tiny/heading'

export default function EventsPage() {
  return (
    <>
    <Navbar/>
<div className="px-6 max-w-4xl mx-auto">
    <h1 className="text-5xl mb-2 leading-tight font-[family-name:var(--font-gt-planar-heading)]">
    Community
  </h1>

  <p
    className="font-[family-name:var(--font-dm-mono)] font-normal text-[15px] leading-[20px] tracking-[-0.06em] mb-4"
    style={{ color: "#717171" }}
  >
    Welcome to the Other Side of the Screen, for the curious, cautious and chronically online.
  </p>

  <img src="/assets/tool.png" alt="Tool" className="mt-8" />
</div>
<div className='pl-6'>
<h1 className="text-[#A0A0A0] text-[20px] font-black whitespace-nowrap uppercase font-[family-name:var(--font-gt-planar-black)]">Featured</h1>
    </div>
    <Communities/>

    
    <div className="p-6 max-w-4xl mx-auto">
     <Heading text="in Asia" />
     <Picks events={[
               { id: 1, title: "Glitch Armour",text:"Basic guide of how to survive the internet without being lost in rabbit holes.", tag: "#Whistleblowing #Whistleblowing", ourPick: true, href: 'https://privacy.sexy' },
               { id: 2, title: "Privacy.sexy",text:"Personalized privacy setup recommendations based on threat model and OS. ", tag: "#tools, #setup-guide, #web2, #open-source", href: 'https://privacy.sexy' },
               { id: 3, title: "Web3Privacy", text: "Curated database evaluating privacy in Web3 projects and protocols. ", tag: "#tools, #web3, #database, #open-source", href:'https://github.com/web3privacy/web3privacy' },
               { id: 4, title: "SecureShare", text:"A platform for secure file sharing with end-to-end encryption",tag:"#web2,  #Advanced" },
               { id: 5, title: "DataGuardians", text:"Community-based initiative to educate users about data protection",tag:"#web3,  #Beginner" },
             ]} />  
    </div>
    </>
  )
}