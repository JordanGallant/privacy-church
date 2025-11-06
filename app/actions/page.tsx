import React from 'react'
import Navbar from '../_components/nav'
import Picks from '../_components/pick'
import Heading from '../_components/tiny/heading'

export default function ToolsPage() {
  return (
    <>
    <Navbar/>
<div className="px-6 max-w-4xl mx-auto">
  <h1 className="text-5xl mb-2 leading-tight font-[family-name:var(--font-gt-planar-heading)] pl-[10px]">
        Actions
    </h1>
    <p
            className="font-[family-name:var(--font-dm-mono)] font-normal text-[15px] leading-[20px] tracking-[-0.06em] mb-4"

          style={{ color: "#717171" }}
        >
          Each setting you change, each tracker you block, each lie you tell an algorithm, it all adds up.
        </p>
<img src="/assets/actions.png" className='mb-8 w-full h-52 object-cover' />
        <Heading text="Policy-Level Engagement" />
       
        <Picks events={[
  { 
    id: 1, 
    title: "Fight Chat Control – EU Campaign Hub", 
    text: "Coordinated resistance to EU surveillance proposals; templates and resources for action.", 
    tag: "#action #policy   #beginner ",
    href: 'https://fightchatcontrol.eu/' 
  },
  { 
    id: 2, 
    title: "EU Citizens Initiative", 
    text: "1 million signatures can force legislative action on privacy topics; high barrier, high impact.", 
    tag: "#action #policy  #beginner ",
    href: 'https://citizens-initiative.europa.eu/how-it-works/faq_en' 
  },
  { 
    id: 3, 
    title: "European Parliament Committee on Petitions", 
    text: "EU residents submit petitions on privacy and surveillance issues.", 
    tag: "#action #policy  #beginner ",
    href: 'https://guichet.public.lu/en/citoyens/organismes/organismes_citoyens/parlement-europeen-petitions.html' 
  },
  { 
    id: 4, 
    title: "Write to European Parliament", 
    text: "Direct contact form to send questions or comments on privacy legislation.", 
    tag: "#action #policy  #beginner ",
    href: 'https://www.europarl.europa.eu/forms/en/ask-ep' 
  },
  { 
    id: 5, 
    title: "National Data Protection Authorities Contact List", 
    text: "Find and contact your country's DPA for corporate privacy violations.", 
    tag: "#action #policy  #beginner ",
    href: 'https://dataprivacymanager.net/list-of-eu-data-protection-supervisory-authorities-gdpr/' 
  },
  { 
    id: 6, 
    title: "OpenPetition Platform", 
    text: "Launch and sign privacy-focused petitions across Europe.", 
    tag: "#action #policy  #beginner ",
    href: 'https://www.openpetition.eu/' 
  }
]} />

    </div>

    
    </>
  )
}
