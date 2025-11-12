'use client'
import { useState, useRef } from 'react';
import CustomImage from '../_components/img';
import Navbar from '../_components/nav';
import Link from 'next/link';
import News from '../_components/news';
import Heading from '../_components/tiny/heading';
import Picks from '../_components/pick';
import { ScrollTrailWrapper } from '../_components/ScrollTrailWrapper';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar hideLogo={!isMenuOpen} onMenuToggle={setIsMenuOpen} />

      <div className="px-6 pb-8">
        <ScrollTrailWrapper>
          <div className="flex flex-col justify-center gap-6 py-8">
            <h2 className="text-xl font-[family-name:var(--font-gt-planar-straight)] leading-tight">
              Welcome to the place of care and consciousness, a sanctuary for the digitally damned.
            </h2>
            <p className="font-[family-name:var(--font-dm-mono)]">
              Let's transform the era of panopticore. Made with love, by winprivacy.
            </p>
          </div>
        </ScrollTrailWrapper>
        
        <div className="grid grid-cols-1 gap-2.5">
          <ScrollTrailWrapper>
            <Link href="/actions">
              <CustomImage
                src="/assets/actions.png" 
                text="Action" 
                subtext='Where belief becomes practice'
              />
            </Link>
          </ScrollTrailWrapper>
          
          <ScrollTrailWrapper>
            <Link href="/events">
              <CustomImage
                src="/assets/pray.png" 
                text="Events"
                subtext='Show up in real life'
              />
            </Link>
          </ScrollTrailWrapper>
          
          <ScrollTrailWrapper>
            <Link href="/community">
              <CustomImage
                src="/assets/nuns.png" 
                crop="top"
                text="Community" 
                subtext='Where connections begin'
              />
            </Link>
          </ScrollTrailWrapper>
          
          <ScrollTrailWrapper>
            <div className="flex gap-3 md:justify-between md:gap-2">
              <Link href="/tools" className="flex-1"> 
                <CustomImage
                  src="/assets/tool.png" 
                  crop="shrink" 
                  text="Tools" 
                  subtext='A-Z'
                  invert={true}
                />
              </Link>

              <Link href="/manifesto" className="flex-1">
                <CustomImage 
                  src="/assets/candle.png" 
                  crop="shrink" 
                  text="Manifesto" 
                  subtext='Why, who, how'
                />
              </Link>
            </div>
          </ScrollTrailWrapper>

          <ScrollTrailWrapper>
            <div className='pt-6'>
              <h1 className="text-5xl mb-2 leading-tight font-[family-name:var(--font-gt-planar-heading)] pl-[10px]">
                News
              </h1>
              
              <p
                className="font-[family-name:var(--font-dm-mono)] font-normal text-[15px] leading-[20px] tracking-[-0.06em] mb-8"
                style={{ color: "#717171" }}
              >
                Fresh sins, big wins and ongoing acts of surveillance disguised as progress.
              </p>
            </div>
          </ScrollTrailWrapper>
        </div>

          <News/>

        <ScrollTrailWrapper>
          <div className='py-6'>
            <Heading text="Modern Privacy Philosophy" />
          </div>
        </ScrollTrailWrapper>

          <Picks events={[
            { 
              id: 1, 
              title: "Age of Surveillance Capitalism", 
              text: "How tech platforms monetize behavioral prediction as a new form of power and extraction.", 
              tag: "#theory #critique #web2 #intersectional #beginner",
              href: 'https://en.wikipedia.org/wiki/The_Age_of_Surveillance_Capitalism' 
            },
            { 
              id: 2, 
              title: "The Black Box Society", 
              text: "Algorithmic opacity in finance, hiring, and reputation systems as concentrated institutional control.", 
              tag: "#theory #critique #algorithms #policy #intermediate",
              href: 'https://en.wikipedia.org/wiki/The_Black_Box_Society' 
            },
            { 
              id: 3, 
              title: "The Transparent Society", 
              text: "Why \"more transparency\" doesn't equal liberation; asymmetric exposure as a political problem.", 
              tag: "#theory #surveillance #power-dynamics #intermediate",
              href: 'https://en.wikipedia.org/wiki/The_Transparent_Society' 
            },
            { 
              id: 4, 
              title: "Technocreep", 
              text: "How intimate data is harvested, tracked, and capitalized in real-time without consent.", 
              tag: "#theory #critique #data-extraction #web2 #beginner",
              href: 'https://en.wikipedia.org/wiki/Technocreep' 
            },
            { 
              id: 5, 
              title: "Dragnet Nation", 
              text: "Investigative narrative on hidden surveillance systems operating at scale.", 
              tag: "#theory #journalism #surveillance #investigation #beginner",
              href: 'https://en.wikipedia.org/wiki/Dragnet_Nation' 
            },
            { 
              id: 6, 
              title: "You Are Not a Gadget", 
              text: "Critique of how platforms shape identity and what we lose surrendering control of digital selves.", 
              tag: "#theory #critique #identity #platforms #beginner",
              href: 'https://www.goodreads.com/book/show/6683549-you-are-not-a-gadget' 
            },
            { 
              id: 7, 
              title: "Ten Arguments for Deleting Your Social Media Accounts Right Now", 
              text: "Accessible case against social platforms; behavioral manipulation and privacy erosion.", 
              tag: "#theory #critique #web2 #beginner-friendly #beginner",
              href: 'https://www.amazon.com/Arguments-Deleting-Social-Media-Accounts/dp/125019668X' 
            },
            { 
              id: 8, 
              title: "The Naked Society", 
              text: "Early warning on data-gathering tech; decades-old lessons still urgent today.", 
              tag: "#theory #history #foundational #beginner",
              href: 'https://en.wikipedia.org/wiki/The_Naked_Society' 
            }
          ]} />
      </div>
    </>
  );
}