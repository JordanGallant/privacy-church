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
      title: 'Social Media Platforms Face New Regulations Under Online Safety Act',
      date: '01:05 AM, 08/12/2025',
      color: 'blue'
    },
    {
      id: '2',
      title: 'Online Safety Act: What Businesses Need to Know',
      date: '01:05 AM, 08/12/2025',
      color: 'green'
    },
    {
      id: '3',
      title: 'Social Media Platforms Face New Regulations Under Online Safety Act',
      date: '01:05 AM, 08/12/2025',
      color: 'blue'
    },
    {
      id: '4',
      title: 'Online Safety Act: What Businesses Need to Know',
      date: '01:05 AM, 08/12/2025',
      color: 'green'
    },
    {
      id: '5',
      title: 'Social Media Platforms Face New Regulations Under Online Safety Act',
      date: '01:05 AM, 08/12/2025',
      color: 'blue'
    },
    {
      id: '6',
      title: 'Online Safety Act: What Businesses Need to Know',
      date: '01:05 AM, 08/12/2025',
      color: 'green'
    }
  ];

  return NextResponse.json(newsData);
}