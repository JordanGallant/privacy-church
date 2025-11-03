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
        Tools
    </h1>
    <p
          className="font-[family-name:var(--font-dm-mono)] font-normal text-[15px] leading-[20px] tracking-[-0.06em] mb-4"
          style={{ color: "#717171" }}
        >
          A to Z’s of digital freedom.
        </p>

        <img src = "/assets/tool.png" className='mb-8'/>
        
        <Heading text="Tool Aggregators" />
        <Picks events={[
          { id: 1, title: "Privacy.sexy",text:"Personalized privacy setup recommendations based on threat model and OS. ", tag: "#tools, #setup-guide, #web2, #open-source", ourPick: true, pickColor: 'blue', href: 'https://privacy.sexy' },
          { id: 2, title: "Web3Privacy", text: "Curated database evaluating privacy in Web3 projects and protocols. ", tag: "#tools, #web3, #database, #open-source", ourPick: true, href:'https://github.com/web3privacy/web3privacy' },
          { id: 3, title: "Privacy Builder Pack", text:"templates and frameworks for building privacy into products from design phase. ",tag:" #tools, #design, #web3, #developer-focused",href:"https://github.com/web3privacy/privacy-builder-pack" }
        ]} />
        <div className='pt-8'>

        <Heading text="General Digital Hygiene" />
        </div>
        <Picks events={[
          { id: 1, title: "Ethereum Cypherpunk Congress",text:"Basic guide of how to survive the internet without being lost in rabbit holes.", date: "2025-09-04", tag: "#Whistleblowing #Whistleblowing", ourPick: true, pickColor: 'blue' },
          { id: 2, title: "Web3 Summit", date: "2025-09-10", tag: "#Whistleblowing #Whistleblowing", ourPick: true },
          { id: 3, title: "DeFi Conference", date: "2025-09-15", location: "New York" }
        ]} />
        

    </div>
    </>
  )
}
