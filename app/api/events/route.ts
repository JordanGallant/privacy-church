// app/api/events/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const events = [
    {
      id: 1,
      title: "Ethereum Cypherpunk Congress II",
      date: "Sun Nov 16",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 2,
      title: "Ethereum Day & DevConnect Opening Ceremony",
      date: "Mon Nov 17",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 3,
      title: "The Privacy Salon (Miden)",
      date: "Mon Nov 17",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 4,
      title: "Buenos Railes / Railgun Private Party",
      date: "Mon Nov 17",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 5,
      title: "Aztec DevConnect",
      date: "Mon Nov 17",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 6,
      title: "zkID and Client-Side Proving Day",
      date: "Tues Nov 18",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 7,
      title: "Confidential Token Association",
      date: "Tues Nov 18",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 8,
      title: "DeFiConnect",
      date: "Tues Nov 18",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 9,
      title: "Encryption Day",
      date: "Wed Nov 19",
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
        country: "Argentina"
      }
    },
    {
      id: 11,
      title: "WalletCon",
      date: "Thurs Nov 20",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 12,
      title: "Noir Con ",
      date: "Thurs Nov 20",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    }
  ];

  return NextResponse.json(events);
}