// app/api/news/route.ts
import { NextResponse } from 'next/server';

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  color: 'blue' | 'green';
}

export async function GET() {
  const newsData: NewsItem[] = [
    {
      id: '1',
      title: 'Revolutionary AI Model Achieves Breakthrough in Natural Language Understanding',
      date: '2025-10-24',
      color: 'blue'
    },
    {
      id: '2',
      title: 'Global Climate Summit Reaches Historic Agreement on Carbon Emissions',
      date: '2025-10-23',
      color: 'green'
    },
    {
      id: '3',
      title: 'New Quantum Computer Solves Complex Problems in Record Time',
      date: '2025-10-22',
      color: 'blue'
    },
    {
      id: '4',
      title: 'Major Tech Companies Announce Partnership for Sustainable Development',
      date: '2025-10-21',
      color: 'green'
    },
    {
      id: '5',
      title: 'Breakthrough in Renewable Energy Storage Technology',
      date: '2025-10-20',
      color: 'blue'
    },
    {
      id: '6',
      title: 'International Space Station Celebrates 25 Years of Continuous Human Presence',
      date: '2025-10-19',
      color: 'green'
    }
  ];

  return NextResponse.json(newsData);
}