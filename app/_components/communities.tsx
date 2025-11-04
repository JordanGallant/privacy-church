// components/Communities.tsx
'use client';
import Head from "next/head";
import Heading from "./tiny/heading";
interface Community {
  id: number;
  title: string;
  description: string;
}

export default function Communities() {
  // Hardcoded community data
  const communities: Community[] = [
    {
      id: 1,
      title: "Tech Innovators",
      description: "Community of creatives, researchers, laywers, activists – built for and by womxn",
    },
    {
      id: 2,
      title: "Creative Collective",
      description: "Grassroots collective empowering privacy & freedom in the future web.",
    }
  ];

  return (
    <>
    
    <div className="p-6 max-w-4xl mx-auto">
      
      
      <div className="space-y-4">
        {communities.map(community => (
          <div
            key={community.id}
            className="flex items-start gap-4 hover:shadow-md transition-shadow"
          >
            <div
              className="rounded-lg flex-shrink-0"
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: '#2727C5'
              }}
            />
            <div>
              <h3 className="text-xl  font-bold mb-2 leading-tight font-[family-name:var(--font-gt-planar-menu)]">
                {community.title}
              </h3>
                <p className=" text-[15px] leading-[20px] tracking-[-0.06em] font-[family-name:var(--font-dm-mono)] mb-2">
                {community.description}
              </p>
            </div>
          </div>
        ))}

        
      </div>
    </div>
    </>
  );
}