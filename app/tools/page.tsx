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
          { id: 1, title: "Glitch Armour",text:"Basic guide of how to survive the internet without being lost in rabbit holes.", tag: "#Whistleblowing #Whistleblowing", ourPick: true, href: 'https://privacy.sexy' },
          { id: 2, title: "Privacy.sexy",text:"Personalized privacy setup recommendations based on threat model and OS. ", tag: "#tools, #setup-guide, #web2, #open-source", href: 'https://privacy.sexy' },
          { id: 3, title: "Web3Privacy", text: "Curated database evaluating privacy in Web3 projects and protocols. ", tag: "#tools, #web3, #database, #open-source", href:'https://github.com/web3privacy/web3privacy' },
          { id: 4, title: "Privacy Builder Pack", text:"templates and frameworks for building privacy into products from design phase. ",tag:" #tools, #design, #web3, #developer-focused",href:"https://github.com/web3privacy/privacy-builder-pack" }
        ]} />
        <div className='pt-8'>

        <Heading text="General Digital Hygiene" />
        </div>
        <Picks events={[
          { id: 1, title: "Healthy Digital Habits That Protect Against Identity Theft",text:"Behavioral shifts preventing exposure without specialized tools.", tag: "#tools, #beginner-friendly, #web2, #habits",href:'https://enthec.com/en/9-healthy-digital-habits-that-will-protect-you-from-identity-theft-and-leaks' },
          { id: 2, title: "Stay Safe Online", text: "Accessible basics for personal digital security.", tag: "#Whistleblowing #Whistleblowing", href: 'https://www.staysafeonline.org/resources/online-safety-and-privacy' },
          { id: 3, title: "Maintain Privacy and Digital Wellness", text: "University of Washington guide on personal data management. ", tag: "#tools, #beginner-friendly, #web2, #education", href: 'https://azbigmedia.com/lifestyle/protecting-your-privacy-online-18-tips-and-resources/' },
          { id: 4, title: "Protecting Your Privacy in the Digital Age", text: "ACLU guide on legal rights and practical steps. ", tag: "#tools, #policy, #web2, #rights", href: 'https://www.aclum.org/en/resource-protecting-your-privacy-digital-age' },
          { id: 5, title: "7 Best Online Resources to Learn About Data Privacy & Security", text: "Curated learning paths. ", tag: "#tools, #eduation, #web2", href: 'https://dataprivacymanager.net/8-best-online-resources-to-learn-more-about-data-privacy-security/' },

        ]} />
        <div className='pt-8'>
        <Heading text="Web3-Specific Privacy Tools" />
        </div>
        <Picks events={[
  { 
    id: 1, 
    title: "Ethical Considerations and Potential Risks in Web3", 
    text: "Explores tensions between transparency and privacy in decentralized systems.",
    tag: "#tools, #web3, #ethics, #beginner-friendly, #beginner",
    href: "https://freename.com/blog/ethical-considerations-web3" 
  },
  { 
    id: 2, 
    title: "How Web3 Changes the Way We Think About Ownership", 
    text: "Reframes data control in decentralized contexts.",
    tag: "#tools, #web3, #ownership, #beginner-friendly, #beginner",
    href: "https://medium.com/inside-web3/how-web3-changes-the-way-we-think-about-ownership-50e196ea578e" 
  },
  { 
    id: 3, 
    title: "Web3Privacy Now Academy", 
    text: "Free courses on privacy fundamentals and Web3-specific privacy tools.",
    tag: "#tools, #web3, #education, #beginner-friendly, #beginner",
    href: "https://academy.web3privacy.info/" 
  },
  { 
    id: 4, 
    title: "Monero vs. Zcash vs. Beam Comparison", 
    text: "Technical breakdown of privacy coins and their trade-offs.",
    tag: "#tools, #web3, #privacy-coins, #technical, #advanced",
    href: "" 
  },
  { 
    id: 5, 
    title: "Privacy-Focused Wallet Design Guide", 
    text: "What to look for in wallet UX, key management, and transaction privacy.",
    tag: "#tools, #web3, #design, #developer-focused, #advanced",
    href: "" 
  },
  { 
    id: 6, 
    title: "Tornado Cash & Mixer Implications", 
    text: "Understanding privacy tools, regulatory pressure, and de-anonymization risks.",
    tag: "#tools, #web3, #policy, #risk-analysis, #intermediate",
    href: "" 
  },
  { 
    id: 7, 
    title: "Decentralized Identity (DID) Projects: Privacy Trade-Offs", 
    text: "Evaluating Sovrin, Veramo, and other DID systems against privacy goals.",
    tag: "#tools, #web3, #identity, #technical, #advanced",
    href: "" 
  },
  { 
    id: 8, 
    title: "Layer 2 Solutions and Privacy", 
    text: "What breaks (or improves) privacy in Arbitrum, Optimism, Polygon.",
    tag: "#tools, #web3, #technical, #systems, #advanced",
    href: "" 
  }
]} />
    </div>
    </>
  )
}
