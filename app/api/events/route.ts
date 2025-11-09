// app/api/events/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const events = [
    {
      id: 1,
      title: "Ethereum Cypherpunk Congress ",
      date: "Sun Nov 16",
      link: "https://luma.com/u2sw5kpv?tk=M0shxP",
      img: "https://i.ibb.co/W4KXQ29R/f4bfda9ed576.png",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 2,
      title: "Ethereum Day & DevConnect Opening Ceremony",
      date: "Mon Nov 17",
      link: "https://devconnect.org/calendar?event=ethday",
      img: "https://i.ibb.co/MxVkK9r9/11a35852224d.png",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 3,
      title: "The Privacy Salon (Miden)",
      date: "Mon Nov 17",
      link: "https://luma.com/wfaee0d9?tk=HFPnWL",
      img: "https://i.ibb.co/RTThDXGP/69e361a9cb37.png",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 4,
      title: "Buenos Railes / Railgun Private Party",
      date: "Mon Nov 17",
      link: "https://luma.com/0gnovvrp?tk=j6nbZE",
      img: "https://i.ibb.co/HTMXVpkX/3daeefaa93d1.png",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 5,
      title: "Aztec DevConnect",
      date: "Mon Nov 17",
      link: "https://luma.com/heydpbsj?tk=OIqyeh",
      img: "https://i.ibb.co/43kJ6zw/91eddd2d834e.png",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 6,
      title: "zkID and Client-Side Proving Day",
      date: "Tues Nov 18",
      link: "https://devconnect.org/calendar?event=zkid-day",
      img: "",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 7,
      title: "Confidential Token Association",
      date: "Tues Nov 18",
      link: "https://luma.com/5vcuz2iz?tk=3OSBeU",
      img: "https://i.ibb.co/zTNxvnZW/ca58c561e58b.png",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 8,
      title: "DeFiConnect",
      date: "Tues Nov 18",
      link: "https://tickets.deficonnect.co/",
      img: "https://i.ibb.co/67z0pYZr/bc3d9c7b18dc.png",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 9,
      title: "Encryption Day",
      date: "Wed Nov 19",
      link: "https://luma.com/e9ces3lr?tk=bTEd8x",
      img: "https://i.ibb.co/QF5VMbyB/78ebb6d3c1d5.png",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 10,
      title: "Casa ZK (Institutional Day)",
      date: "Wed Nov 19",
      link: "https://luma.com/CasaZK?tk=V3jarB",
      img: "https://i.ibb.co/394yR34z/7c421f282a23.png",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 11,
      title: "WalletCon",
      date: "Thurs Nov 20",
      link: "https://luma.com/walletconbuenosaires?tk=52vaFL",
      img: "https://i.ibb.co/zjwkQGb/1875381d29cb.png",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 12,
      title: "Noir Con ",
      date: "Thurs Nov 20",
      link: "https://luma.com/m5uc4w2k?tk=3q7jsM",
      img: "https://i.ibb.co/1GztN5dy/190c9cb57862.png",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 13,
      title: "Ethereum Privacy Stack",
      date: "Thurs Nov 21",
      link: "https://devconnect.org/calendar?event=ethereum-privacy-stack",
      img: "https://i.ibb.co/cSrJxr6c/6e59f8df1dd8.png",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    {
      id: 14,
      title: "P2P Privacy Hacker Lounge",
      date: "Thurs Nov 20",
      link: "https://luma.com/mcodb4f7?tk=q1GU96",
      img: "https://i.ibb.co/qYRF9b8y/a7a0e162f288.png",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      }
    },
    
  {
    "id": 14,
    "title": "Everyday Opsec \u2013 Personal security audit & aid",
    "date": "Wed Nov 19",
    "link": "https://lu.ma/5nr33ves",
    "img": "https://i.ibb.co/SDJgrMVQ/04717b74d28f.png",
    "location": {
      "city": "Buenos Aires",
      "country": "Argentina"
    }
  },
  {
    "id": 15,
    "title": "ZK Dark Pools",
    "date": "Wed Nov 19",
    "link": "https://lu.ma/qaltyvst",
    "img": "https://i.ibb.co/MDCFSCt9/a050e120c12c.png",
    "location": {
      "city": "Buenos Aires",
      "country": "Argentina"
    }
  },
  {
    "id": 16,
    "title": "Wallet Security Fundamentals",
    "date": "Wed Nov 19",
    "link": "https://lu.ma/retb0z4r",
    "img": "https://i.ibb.co/tTjkqPsB/adbbe854e1b6.png",
    "location": {
      "city": "Buenos Aires",
      "country": "Argentina"
    }
  },
  {
    "id": 17,
    "title": "Power to the People: How Privacy Tech Can Safeguard Democracy",
    "date": "Wed Nov 19",
    "link": "https://lu.ma/uxenfv7u",
    "img": "https://i.ibb.co/7xhdKr1x/22aa9f1e731f.png",
    "location": {
      "city": "Buenos Aires",
      "country": "Argentina"
    }
  },
  {
    "id": 18,
    "title": "Data Privacy in Legal Documentation: What to Look For",
    "date": "Wed Nov 19",
    "link": "https://lu.ma/az795puf",
    "img": "https://i.ibb.co/HT5ZfxZ8/415500303039.png",
    "location": {
      "city": "Buenos Aires",
      "country": "Argentina"
    }
  },
  {
    "id": 19,
    "title": "The Aesthetics of Privacy \u2013 How visual language...",
    "date": "Wed Nov 19",
    "link": "https://lu.ma/o9ztepnk",
    "img": "https://i.ibb.co/ZshW0bH/c8fe3ec59492.png",
    "location": {
      "city": "Buenos Aires",
      "country": "Argentina"
    }
  },
  {
    "id": 20,
    "title": "Privacy as Culture",
    "date": "Wed Nov 19",
    "link": "https://lu.ma/al81hy3j",
    "img": "https://i.ibb.co/M5jkN2V2/938c1b08c8a0.png",
    "location": {
      "city": "Buenos Aires",
      "country": "Argentina"
    }
  },
  {
    "id": 21,
    "title": "The biggest security breaches in recent history...",
    "date": "Wed Nov 19",
    "link": "https://lu.ma/w31jzd1j",
    "img": "https://i.ibb.co/gbRKMcBH/a1e0783a1af6.png",
    "location": {
      "city": "Buenos Aires",
      "country": "Argentina"
    }
  },
  {
    "id": 22,
    "title": "Practical tools for more private digital world",
    "date": "Wed Nov 19",
    "link": "https://lu.ma/6pkovegk",
    "img": "https://i.ibb.co/0VYQKpph/3f9b9c53b7e0.png",
    "location": {
      "city": "Buenos Aires",
      "country": "Argentina"
    }
  },
  {
    "id": 23,
    "title": "Building Future Spaces for Digital Integrity",
    "date": "Wed Nov 19",
    "link": "https://lu.ma/x1bdq9as",
    "img": "https://i.ibb.co/JjzX13Rb/5aed95cb5c63.png",
    "location": {
      "city": "Buenos Aires",
      "country": "Argentina"
    }
  },
  {
    "id": 24,
    "title": "Everyday Opsec \u2013 Personal security audit & aid",
    "date": "Wed Nov 19",
    "link": "https://lu.ma/hgxtjbjw",
    "img": "https://i.ibb.co/5xSTyrjc/05345062a73e.png",
    "location": {
      "city": "Buenos Aires",
      "country": "Argentina"
    }
  },
  // {
  //   "id": 25,
  //   "title": "Eyes Wide Open: Navigating Privacy in the Age of AI",
  //   "date": "Wed Nov 19",
  //   "link": "https://lu.ma/qtjk3nx2",
  //   "img": "https://images.lumacdn.com/gallery-images/dd/4042727d-8671-483c-81b0-5c178916a196.png",
  //   "location": {
  //     "city": "Buenos Aires",
  //     "country": "Argentina"
  //   }
  // },
  // {
  //   "id": 26,
  //   "title": "From compliance to care \u2013 Privacy-preserving tech in activism, journalism & humanitarian aid",
  //   "date": "Wed Nov 19",
  //   "link": "https://lu.ma/9lnlosqf",
  //   "img": "https://images.unsplash.com/photo-1623039405147-547794f92e9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjQyMjF8MHwxfHNlYXJjaHwxfHxqb3VybmFsaXNtfGVufDB8fHx8MTc2MTg4MDA5MHwy&ixlib=rb-4.1.0&q=80&w=1080",
  //   "location": {
  //     "city": "Buenos Aires",
  //     "country": "Argentina"
  //   }
  // },
  {
    "id": 27,
    "title": "Anonymous Yet Authentic",
    "date": "Wed Nov 19",
    "link": "https://lu.ma/u7g5unik",
    "img": "https://i.ibb.co/PGyNWNgj/05539e5c1344.png",
    "location": {
      "city": "Buenos Aires",
      "country": "Argentina"
    }
  },
  {
    "id": 28,
    "title": "The Invisible Work We Do: Emotional Labour...",
    "date": "Wed Nov 19",
    "link": "https://lu.ma/0jgjatyw",
    "img": "https://i.ibb.co/sdLQY7t0/0406d6e2d727.png",
    "location": {
      "city": "Buenos Aires",
      "country": "Argentina"
    }
  },
  {
    "id": 29,
    "title": "The Privacy Growth Playbook: Winning Without Surveillance",
    "date": "Wed Nov 19",
    "link": "https://lu.ma/f5susl3w",
    "img": "https://i.ibb.co/Sw62y0bc/bc176c5bb18b.png",
    "location": {
      "city": "Buenos Aires",
      "country": "Argentina"
    }
  },
  {
    "id": 30,
    "title": "Culture of Care in Teams",
    "date": "Wed Nov 19",
    "link": "https://lu.ma/8f67qt49",
    "img": "https://i.ibb.co/Nb2zW6r/a2996aba2867.png",
    "location": {
      "city": "Buenos Aires",
      "country": "Argentina"
    }
  },
  {
    "id": 31,
    "title": "Cyberfeminism Privacy in Protest Times",
    "date": "Wed Nov 19",
    "link": "https://lu.ma/w85wwlav",
    "img": "https://i.ibb.co/YBxpY134/3092e9aa71ae.png",
    "location": {
      "city": "Buenos Aires",
      "country": "Argentina"
    }
  },
  {
    "id": 32,
    "title": "MKT en la Era Web3",
    "date": "Wed Nov 19",
    "link": "https://lu.ma/8l98q2cc",
    "img": "https://i.ibb.co/GQVR5xDg/43b06a6d1dfe.png",
    "location": {
      "city": "Buenos Aires",
      "country": "Argentina"
    }
  },
  {
    "id": 33,
    "title": "Navigating the Legal Complexities of Building a Thorough Privacy Stack",
    "date": "Wed Nov 19",
    "link": "https://lu.ma/mkibcpnh",
    "img": "https://i.ibb.co/j9NCBJDk/99e6ea084358.png",
    "location": {
      "city": "Buenos Aires",
      "country": "Argentina"
    }
  },
  {
    "id": 34,
    "title": "Inclusion Without Exposure \u2013 Protecting presence, privacy, and power in an age of digital surveillance",
    "date": "Wed Nov 19",
    "link": "https://lu.ma/2q5won0h",
    "img": "https://i.ibb.co/gLyxyTVR/3855da5b79c9.png",
    "location": {
      "city": "Buenos Aires",
      "country": "Argentina"
    }
  } 
];

  return NextResponse.json(events);
}