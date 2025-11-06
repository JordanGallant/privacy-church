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
    <h1 className="text-5xl mb-2 leading-tight font-[family-name:var(--font-gt-planar-heading)] pl-[10px]">
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
     <Heading text="Grassroots & Activist Collectives" />
<Picks events={[
  { 
    id: 1, 
    title: "Women in Web3 Privacy", 
    text: "Collective centering marginalized genders in cryptography and digital autonomy.",
    tag: "#community, #grassroots, #web3, #intersectional, #activist, #beginner, #global",
    href: "" 
  },
  { 
    id: 2, 
    title: "Web3Privacy Now", 
    text: "Community organizing on privacy standards and accountability in Web3 projects.",
    tag: "#community, #grassroots, #web3, #activist, #education, #beginner, #global",
    href: "https://web3privacy.info/" 
  },
  { 
    id: 3, 
    title: "Open Rights Group", 
    text: "UK grassroots activism on digital rights; accessible entry point for supporters.",
    tag: "#community, #grassroots, #web2, #uk-based, #beginner, #uk",
    href: "https://www.openrightsgroup.org" 
  },
  { 
    id: 4, 
    title: "Digital Courage", 
    text: "European digital rights collective with concrete campaigns and local organizing.",
    tag: "#community, #grassroots, #web2, #europe-based, #beginner, #europe",
    href: "https://digitalcourage.de/en" 
  }
]} />
<div className='pt-8'>
<Heading text="Institutional & Legal Strategy" />
</div>

<Picks events={[
  { 
    id: 1, 
    title: "EFF (Electronic Frontier Foundation)", 
    text: "US-based nonprofit with global reach; legal strategy and tech policy advocacy.",
    tag: "#community, #institutional, #web2, #policy, #legal, #beginner, #us, #global",
    href: "https://www.eff.org/" 
  },
  { 
    id: 2, 
    title: "NOYB (European Center for Digital Rights)", 
    text: "Strategic litigation for GDPR enforcement; David vs. Goliath approach.",
    tag: "#community, #institutional, #web2, #legal, #policy, #europe-based, #beginner, #europe",
    href: "https://noyb.eu/en" 
  },
  { 
    id: 3, 
    title: "Privacy International", 
    text: "Global perspective with emphasis on power asymmetries and colonial surveillance.",
    tag: "#community, #institutional, #web2, #policy, #intersectional, #beginner, #global",
    href: "https://privacyinternational.org/" 
  },
  { 
    id: 4, 
    title: "Center for Democracy & Technology", 
    text: "Policy-focused; bridges tech, governance, and legal frameworks.",
    tag: "#community, #institutional, #web2, #policy, #beginner, #global",
    href: "https://cdt.org" 
  }
]} />

<div className='pt-8'>
<Heading text="Research & Technical Standards" />
</div>

<Picks events={[
  { 
    id: 1, 
    title: "Tactical Tech", 
    text: "Develops tools and frameworks for understanding tech's social impact through workshops and investigations.",
    tag: "#community, #research, #web2, #education, #intermediate, #global",
    href: "https://tacticaltech.org" 
  },
  { 
    id: 2, 
    title: "The Calyx Institute", 
    text: "Education + accessibility focus; makes privacy research and tools less gatekeepy.",
    tag: "#community, #research, #web2, #education, #beginner, #us",
    href: "https://calyxinstitute.org" 
  },
  { 
    id: 3, 
    title: "W3C Privacy Community Group", 
    text: "Technical standards-setting for user privacy APIs and web standards.",
    tag: "#community, #research, #web2, #technical, #standards, #advanced, #global",
    href: "https://www.w3.org/groups/cg/privacycg" 
  },
  { 
    id: 4, 
    title: "Future of Privacy Forum", 
    text: "Advocacy and research on data privacy, emerging tech, and policy.",
    tag: "#community, #research, #web2, #policy, #intermediate, #us",
    href: "https://fpf.org" 
  },
  { 
    id: 5, 
    title: "Kantara Initiative", 
    text: "Industry consortium working on digital identity, data management, and privacy standards.",
    tag: "#community, #research, #web2, #standards, #identity, #advanced, #global",
    href: "https://kantarainitiative.org" 
  }
]} />

<div className='pt-8'>
<Heading text="Regional & Global Focus" />
</div>
<Picks events={[
  { 
    id: 1, 
    title: "Data Rights NGO (Nigeria-based)", 
    text: "Centering Global South perspectives on data extraction and sovereignty.",
    tag: "#community, #intersectional, #web2, #africa-based, #beginner, #africa, #global",
    href: "https://www.datarights.ngo/" 
  },
  { 
    id: 2, 
    title: "SEE Digital Rights Network", 
    text: "19 organizations across Southeast Europe coordinating on surveillance and data protection.",
    tag: "#community, #grassroots, #web2, #europe-based, #beginner, #southeast-europe",
    href: "https://sharefoundation.info/en/see-digital-rights-network-established/" 
  },
  { 
    id: 3, 
    title: "Internet Freedom Foundation (India)", 
    text: "Grassroots digital rights with specific attention to Indian context and campaigns.",
    tag: "#community, #grassroots, #web2, #india-based, #activist, #beginner, #india",
    href: "https://internetfreedom.in" 
  },
  { 
    id: 4, 
    title: "Bits of Freedom", 
    text: "Dutch nonprofit advocacy on digital rights, privacy, and communications freedoms.",
    tag: "#community, #grassroots, #web2, #europe-based, #beginner, #netherlands",
    href: "https://www.bitsoffreedom.nl" 
  },
  { 
    id: 5, 
    title: "Just Access", 
    text: "NGO focused on human rights including digital rights; volunteer opportunities.",
    tag: "#community, #grassroots, #web2, #europe-based, #beginner, #europe",
    href: "https://just-access.de/volunteer_with_us/" 
  }
]} />
<div className='pt-8'>
<Heading text="Honorable Mention" />
</div>
<Picks events={[
  { 
    id: 1, 
    title: "Open Knowledge Foundation", 
    text: "Broader than privacy but supports open data and includes personal data working groups.",
    tag: "#community, #research, #web2, #open-data, #intermediate, #global",
    href: "https://okfn.org/en/" 
  }
]} />
    </div>
    </>
  )
}