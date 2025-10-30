// app/api/news/route.ts
import { NextResponse } from 'next/server';
import { getRedis } from '../../lib/redis';

const REDIS_KEY = 'rss:items';

export async function GET() {
  const redis = getRedis();
  
  try {
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Redis timeout')), 5000)
    );
    
    const dataPromise = redis.get(REDIS_KEY);
    
    const cached = await Promise.race([dataPromise, timeoutPromise]) as string | null;
    
    if (!cached) {
      return NextResponse.json({ 
        items: [], 
        count: 0, 
        error: 'No items available yet' 
      });
    }
    
    const items = JSON.parse(cached);
    return NextResponse.json({ items, count: items.length });
    
  } catch (error) {
    console.error('Redis read error:', error);
    return NextResponse.json({ 
      items: [], 
      count: 0, 
      error: 'Failed to fetch news' 
    }, { status: 500 });
  }
}