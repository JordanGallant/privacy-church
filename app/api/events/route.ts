// app/api/events/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const events = [
    {
      id: 1,
      title: "Ethereum Cypherpunk Congress ",
      date: "Sun Nov 16",
      link:"https://luma.com/u2sw5kpv?tk=M0shxP",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 2,
      title: "Ethereum Day & DevConnect Opening Ceremony",
      date: "Mon Nov 17",
      link:"https://devconnect.org/calendar?event=ethday",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 3,
      title: "The Privacy Salon (Miden)",
      date: "Mon Nov 17",
      link:"https://luma.com/wfaee0d9?tk=HFPnWL",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 4,
      title: "Buenos Railes / Railgun Private Party",
      date: "Mon Nov 17",
      link:"https://luma.com/0gnovvrp?tk=j6nbZE",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 5,
      title: "Aztec DevConnect",
      date: "Mon Nov 17",
      link:"https://luma.com/heydpbsj?tk=OIqyeh",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 6,
      title: "zkID and Client-Side Proving Day",
      date: "Tues Nov 18",
      link:"https://devconnect.org/calendar?event=zkid-day",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 7,
      title: "Confidential Token Association",
      date: "Tues Nov 18",
      link:"https://luma.com/5vcuz2iz?tk=3OSBeU",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 8,
      title: "DeFiConnect",
      date: "Tues Nov 18",
      link:"https://tickets.deficonnect.co/",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 9,
      title: "Encryption Day",
      date: "Wed Nov 19",
      link:"https://luma.com/e9ces3lr?tk=bTEd8x",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 10,
      title: "Casa ZK (Institutional Day)",
      date: "Wed Nov 19",
      location: {
        city: "Buenos Aires",
        link:"https://luma.com/CasaZK?tk=V3jarB",
        country: "Argentina"
      }
    },
    {
      id: 11,
      title: "WalletCon",
      date: "Thurs Nov 20",
      link:"https://luma.com/walletconbuenosaires?tk=52vaFL",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 12,
      title: "Noir Con ",
      date: "Thurs Nov 20",
      link:"https://luma.com/m5uc4w2k?tk=3q7jsM",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
     {
      id: 12,
      title: "Ethereum Privacy Stack",
      date: "Thurs Nov 21",
      link:"https://devconnect.org/calendar?event=ethereum-privacy-stack",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
     {
      id: 12,
      title: "P2P Privacy Hacker Lounge",
      date: "Thurs Nov 20",
      link:"https://luma.com/mcodb4f7?tk=q1GU96",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    }
  ];

  return NextResponse.json(events);
}