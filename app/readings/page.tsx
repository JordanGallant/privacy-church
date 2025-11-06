import Picks from '../_components/pick'
import Navbar from "../_components/nav";
import Heading from '../_components/tiny/heading';

export default function NewspPage() {
  return (
    <>
      <Navbar hideLogo={false} />

<div className="px-6 max-w-4xl mx-auto">
  <h1 className="text-5xl mb-2 leading-tight font-[family-name:var(--font-gt-planar-heading)] pl-[10px]">Readings</h1>

        <p
          className="font-[family-name:var(--font-dm-mono)] font-normal text-[15px] leading-[20px] tracking-[-0.06em] mb-4"
          style={{ color: "#717171" }}
        >
Books, papers, and manifestos that decode power, expose extraction, and chart paths to digital autonomy.
        </p>

        
<Picks events={[
  { 
    id: 1, 
    title: "Age of Surveillance Capitalism", 
    text: "How tech platforms monetize behavioral prediction as a new form of power and extraction.",
    tag: "#theory,   #beginner",
    href: "https://en.wikipedia.org/wiki/The_Age_of_Surveillance_Capitalism" 
  },
  { 
    id: 2, 
    title: "The Black Box Society", 
    text: "Algorithmic opacity in finance, hiring, and reputation systems as concentrated institutional control.",
    tag: "#theory,  #intermediate",
    href: "https://en.wikipedia.org/wiki/The_Black_Box_Society" 
  },
  { 
    id: 3, 
    title: "The Transparent Society", 
    text: "Why 'more transparency' doesn't equal liberation; asymmetric exposure as a political problem.",
    tag: "#theory,  #intermediate",
    href: "https://en.wikipedia.org/wiki/The_Transparent_Society" 
  },
  { 
    id: 4, 
    title: "Technocreep", 
    text: "How intimate data is harvested, tracked, and capitalized in real-time without consent.",
    tag: "#theory,   #beginner",
    href: "https://en.wikipedia.org/wiki/Technocreep" 
  },
  { 
    id: 5, 
    title: "Dragnet Nation", 
    text: "Investigative narrative on hidden surveillance systems operating at scale.",
    tag: "#theory,    #beginner",
    href: "https://en.wikipedia.org/wiki/Dragnet_Nation" 
  },
  { 
    id: 6, 
    title: "You Are Not a Gadget", 
    text: "Critique of how platforms shape identity and what we lose surrendering control of digital selves.",
    tag: "#theory,   #beginner",
    href: "https://www.goodreads.com/book/show/6683549-you-are-not-a-gadget" 
  },
  { 
    id: 7, 
    title: "Ten Arguments for Deleting Your Social Media Accounts Right Now", 
    text: "Accessible case against social platforms; behavioral manipulation and privacy erosion.",
    tag: "#theory,   #beginner",
    href: "https://www.amazon.com/Arguments-Deleting-Social-Media-Accounts/dp/125019668X" 
  },
  { 
    id: 8, 
    title: "The Naked Society", 
    text: "Early warning on data-gathering tech; decades-old lessons still urgent today.",
    tag: "#theory, #history, #beginner",
    href: "https://en.wikipedia.org/wiki/The_Naked_Society" 
  }
]} />
        <div className='pt-8'>
        <Heading text="Historical" />
        </div>

<Picks events={[
  { 
    id: 1, 
    title: "Crypto: How the Code Rebels Beat the Government", 
    text: "Historical grounding on cryptography and privacy movements; the cypherpunk lineage.",
    tag: "#theory, #history, #beginner",
    href: "https://en.wikipedia.org/wiki/Crypto_(book)" 
  },
  { 
    id: 2, 
    title: "True Nyms and Crypto Anarchy", 
    text: "How digital identity systems bypass state surveillance through cryptographic design.",
    tag: "#theory,   #intermediate",
    href: "https://gwern.net/doc/bitcoin/1996-may.pdf" 
  },
  { 
    id: 3, 
    title: "Cypherpunks: Freedom and the Future of the Internet", 
    text: "Modern treatment of encryption's role in internet politics post-Snowden.",
    tag: "#theory,   #contemporary, #intermediate",
    href: "https://en.wikipedia.org/wiki/Cypherpunks_%28book%29" 
  },
  { 
    id: 4, 
    title: "Crypto Anarchy, Cyberstates, and Pirate Utopias", 
    text: "Essays on governance, tech, and identity at the crypto/anarchy frontier.",
    tag: "#theory,  #governance,  #intermediate",
    href: "https://monoskop.org/images/4/42/Ludlow_Peter_Crypto_Anarchy_Cyberstates_and_Pirate_Utopias.pdf" 
  }
]} />

<div className='pt-8'>
        <Heading text="Web3 & Decentralization" />
        </div>
<Picks events={[
  { 
    id: 1, 
    title: "Crypto Communities as Legal Orders", 
    text: "How crypto architectures create alternate jurisdictions and governance models.",
    tag: "#theory,  #governance,  #intermediate",
    href: "https://policyreview.info/articles/analysis/crypto-communities-legal-orders" 
  },
  { 
    id: 2, 
    title: "The Shift from Central to Cryptographic Trust", 
    text: "Moving institutional trust to cryptographic systems; what fails in the transition.",
    tag: "#theory,  #trust,  #advanced",
    href: "https://arxiv.org/abs/1409.2432" 
  }
]} />


<div className='pt-8'>
        <Heading text="Technical & Academic Studies" />
        </div>
              <Picks events={[
  { 
    id: 1, 
    title: "Browsing Behavior Exposes Identities on the Web", 
    text: "Proves anonymity layers fail when behavioral patterns are cross-profiled.",
    tag: " #advanced",
    href: "https://arxiv.org/abs/2312.15489" 
  },
  { 
    id: 2, 
    title: "I'm Not For Sale", 
    text: "Documents how personal data is commodified in real-time markets invisible to users.",
    tag: " #intermediate",
    href: "https://arxiv.org/abs/2502.11658" 
  },
  { 
    id: 3, 
    title: "Internet Safety Resources for Students", 
    text: "Curated guides and research for younger users.",
    tag: "#education,  #beginner",
    href: "https://arxiv.org/abs/2312.15489" 
  }
]} />
      </div>


      
    </>
  );
}
