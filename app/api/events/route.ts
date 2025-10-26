// app/api/events/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const events = [
    {
      id: 1,
      title: "Tango Under the Stars",
      date: "2025-11-15",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 2,
      title: "Latin American Tech Summit",
      date: "2025-12-03",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 3,
      title: "Palermo Food Festival",
      date: "2025-11-28",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 4,
      title: "Contemporary Art Exhibition",
      date: "2025-12-10",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 5,
      title: "River Plate Football Match",
      date: "2025-11-22",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 6,
      title: "Broadway Musical Night",
      date: "2025-11-18",
      location: {
        city: "New York",
        country: "United States"
      }
    },
    {
      id: 7,
      title: "Central Park Jazz Concert",
      date: "2025-12-05",
      location: {
        city: "New York",
        country: "United States"
      }
    },
    {
      id: 8,
      title: "Canal Light Festival",
      date: "2025-12-01",
      location: {
        city: "Amsterdam",
        country: "Netherlands"
      }
    },
    {
      id: 9,
      title: "Dutch Design Week",
      date: "2025-11-25",
      location: {
        city: "Amsterdam",
        country: "Netherlands"
      }
    },
    {
      id: 10,
      title: "Winter Fashion Show",
      date: "2025-12-08",
      location: {
        city: "Paris",
        country: "France"
      }
    },
    {
      id: 11,
      title: "Cherry Blossom Festival",
      date: "2025-11-30",
      location: {
        city: "Tokyo",
        country: "Japan"
      }
    },
    {
      id: 12,
      title: "Thames Christmas Market",
      date: "2025-12-12",
      location: {
        city: "London",
        country: "United Kingdom"
      }
    }
  ];

  return NextResponse.json(events);
}