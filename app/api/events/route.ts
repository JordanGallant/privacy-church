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
    }
  ];

  return NextResponse.json(events);
}