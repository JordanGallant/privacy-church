import React from 'react'
import Navbar from '../_components/nav'
import Picks from '../_components/pick'
import Heading from '../_components/tiny/heading'


export default function ManifestoPage() {
  return (
    <>
    <Navbar/>
<div className="px-6 max-w-4xl mx-auto">
  <h1 className="text-5xl mb-2 pl-3 leading-tight font-[family-name:var(--font-gt-planar-heading)] pl-[10px]">
        Manifesto
    </h1>
    <p
          className="font-[family-name:var(--font-dm-mono)] font-normal text-[15px] leading-[20px] tracking-[-0.06em] mb-4"
          
        >
          The why, who and how of digital freedom
        </p>
        <br/>

         <p
          className="text-[15px]  text-[#353535] md:text-lg leading-relaxed font-[family-name:var(--font-dm-mono)]"
          
        >
          Privacy isn’t about hiding, it’s about being whole. It’s the space between you and the world where choice still exists. Every civilization has sacred spaces; the internet shouldn’t be the first to forget that. But privacy doesn’t survive by accident. It depends on the people who defend it, design for it, and demand it - the builders, the teachers, the rebels who refuse to accept surveillance as normal.
        </p>
        <br/>

        <img src = "/assets/tool.png"/>
        <br/>

        <h2 className="text-[20px]  font-[family-name:var(--font-gt-planar-straight)] leading-tight">Why privacy matters?</h2>
        <br/>

        <p className="text-[15px] text-[#353535] font-bold  leading-relaxed font-[family-name:var(--font-dm-mono)] mb-4">Because freedom needs space. </p>
        <p className="text-[15px] text-[#353535] leading-relaxed font-[family-name:var(--font-dm-mono)] ">Without privacy, there’s no room to think, change your mind, or make mistakes. Constant visibility turns people into performances. Privacy gives you the right to be unfinished, to grow without an audience.</p>
        <br/>
    
        <p className="text-[15px] text-[#353535] font-bold leading-relaxed font-[family-name:var(--font-dm-mono)] mb-4">Because power loves data.</p>
        <p className="text-[15px] text-[#353535] leading-relaxed font-[family-name:var(--font-dm-mono)]">Surveillance isn’t neutral, - it feeds whoever already has control. Governments, corporations, and algorithms use your information to predict, persuade, and profit. Privacy isn’t about hiding; it’s about limiting their power.</p>
        <br/>
    
        <p className="text-[15px] text-[#353535] font-bold leading-relaxed font-[family-name:var(--font-dm-mono)] mb-4">Because care starts with consent.</p>
        <p className="text-[15px] text-[#353535] leading-relaxed font-[family-name:var(--font-dm-mono)]">Privacy is the foundation of trust, between people, between communities, between you and the tools you use. Without consent, even connection becomes extraction. Protecting privacy means choosing relationships that respect boundaries, not break them.</p>
        <br/>

        <p className="text-[15px] text-[#353535] font-bold leading-relaxed font-[family-name:var(--font-dm-mono)] mb-4">Who it depends on?</p>
    
        <p className="text-[15px]  text-[#353535] leading-relaxed font-[family-name:var(--font-dm-mono)]">You, mostly. Governments say they care, but they’re busy writing new ways to read your DMs. Tech companies pretend to, but their business model is literally “you”.
            So it's up to you.</p>

          <p className="text-[15px] text-[#353535] leading-relaxed font-[family-name:var(--font-dm-mono)] mb-4">You don’t need to be a coder or an activist to matter. You just need to start noticing what you give away, and start taking some of it back.</p>
        <p className="text-[15px] text-[#353535] font-bold leading-relaxed font-[family-name:var(--font-dm-mono)] mb-4">What to do?</p>
        <p className="text-[15px] text-[#353535] leading-relaxed font-[family-name:var(--font-dm-mono)] mb-4" >Start where you are: question things, change defaults, confuse the algorithm. The goal isn’t to disappear, it’s to exist freely, unmeasured, unmonetized, slightly mythical.</p>
   
      <p className="text-[15px] text-[#353535] leading-relaxed font-[family-name:var(--font-dm-mono)] mb-4">Explore the fundamentals, then jump into the tools you can use.</p>
  
      <p className="text-[15px] text-[#353535] leading-relaxed font-[family-name:var(--font-dm-mono)] mb-4">Good luck divas.</p>


    </div>    
      <div className="p-6 max-w-4xl mx-auto">
        <Heading text="additional manifestos" />
        
<Picks events={[
  { 
    id: 1, 
    title: "Crypto Anarchist Manifesto", 
    text: "Digital pseudonyms as tools for decentralizing power away from coerced legal identity.", 
    tag: "#theory #crypto-anarchist #web3 #foundational #beginner",
    href: 'https://www.alamut.com/subj/ideologies/manifestos/cryptoanarchist.html' 
  },
  { 
    id: 2, 
    title: "Cypherpunk Manifesto", 
    text: "Privacy as a right in digital spaces; encryption as political infrastructure.", 
    tag: "#theory #crypto-anarchist #web2 #foundational #beginner",
    href: 'https://www.activism.net/cypherpunk/manifesto.html' 
  },
  { 
    id: 3, 
    title: "A Declaration of the Independence of Cyberspace", 
    text: "Early web sovereignty text claiming digital spaces exist beyond state jurisdiction.", 
    tag: "#theory #foundational #manifesto #beginner",
    href: 'https://www.eff.org/it/cyberspace-independence' 
  },
  { 
    id: 4, 
    title: "The Priv/Acc Manifesto", 
    text: "Contemporary privacy + advocacy framework.", 
    tag: "#theory #manifesto #web3 #contemporary #beginner",
    href: 'https://privacc.org/' 
  },
  { 
    id: 5, 
    title: "The Core of Crypto is Punks and Principles", 
    text: "Why ideology matters more than tech in decentralized movements.", 
    tag: "#theory #web3 #culture #ethics #beginner",
    href: 'https://news.dyne.org/the-core-of-crypto-is-punks-and-principles/' 
  },
  { 
    id: 6, 
    title: "Web3 Will Fail If It Doesn't Put People Before Profits", 
    text: "Critique of extractive logic in decentralized tech.", 
    tag: "#theory #web3 #critique #ethics #beginner",
    href: 'https://kriskrug.co/2023/11/01/web3-will-fail-if-it-doesnt-put-people-before-profits-and-technology/' 
  },
  { 
    id: 7, 
    title: "A Manifesto for Web Science @ 10", 
    text: "Social and technical governance frameworks for the web's future.", 
    tag: "#theory #governance #policy #intermediate",
    href: 'https://policyreview.info/articles/analysis/crypto-communities-legal-orders' 
  },
  { 
    id: 8, 
    title: "Age of Surveillance Capitalism", 
    text: "How tech platforms monetize behavioral prediction as a new form of power and extraction.", 
    tag: "#theory #critique #web2 #intersectional #beginner",
    href: 'https://en.wikipedia.org/wiki/The_Age_of_Surveillance_Capitalism' 
  },
  { 
    id: 9, 
    title: "The Black Box Society", 
    text: "Algorithmic opacity in finance, hiring, and reputation systems as concentrated institutional control.", 
    tag: "#theory #critique #algorithms #policy #intermediate",
    href: 'https://en.wikipedia.org/wiki/The_Black_Box_Society' 
  },
  { 
    id: 10, 
    title: "The Transparent Society", 
    text: "Why \"more transparency\" doesn't equal liberation; asymmetric exposure as a political problem.", 
    tag: "#theory #surveillance #power-dynamics #intermediate",
    href: 'https://en.wikipedia.org/wiki/The_Transparent_Society' 
  },
  { 
    id: 11, 
    title: "Technocreep", 
    text: "How intimate data is harvested, tracked, and capitalized in real-time without consent.", 
    tag: "#theory #critique #data-extraction #web2 #beginner",
    href: 'https://en.wikipedia.org/wiki/Technocreep' 
  },
  { 
    id: 12, 
    title: "Dragnet Nation", 
    text: "Investigative narrative on hidden surveillance systems operating at scale.", 
    tag: "#theory #journalism #surveillance #investigation #beginner",
    href: 'https://en.wikipedia.org/wiki/Dragnet_Nation' 
  },
  { 
    id: 13, 
    title: "You Are Not a Gadget", 
    text: "Critique of how platforms shape identity and what we lose surrendering control of digital selves.", 
    tag: "#theory #critique #identity #platforms #beginner",
    href: 'https://www.goodreads.com/book/show/6683549-you-are-not-a-gadget' 
  },
  { 
    id: 14, 
    title: "Ten Arguments for Deleting Your Social Media Accounts Right Now", 
    text: "Accessible case against social platforms; behavioral manipulation and privacy erosion.", 
    tag: "#theory #critique #web2 #beginner-friendly #beginner",
    href: 'https://www.amazon.com/Arguments-Deleting-Social-Media-Accounts/dp/125019668X' 
  },
  { 
    id: 15, 
    title: "The Naked Society", 
    text: "Early warning on data-gathering tech; decades-old lessons still urgent today.", 
    tag: "#theory #history #foundational #beginner",
    href: 'https://en.wikipedia.org/wiki/The_Naked_Society' 
  }
]} />
    </div>
    </>
  )
}
