// app/api/rss/route.ts
import { NextResponse } from 'next/server';
import { parseStringPromise } from 'xml2js';
import { createClient } from 'redis';

export const revalidate = 600;

const RSS_FEEDS = [
  { name: 'Hacker News', url: 'https://news.ycombinator.com/rss' },
  { name: 'Ars Technica', url: 'https://feeds.arstechnica.com/arstechnica/index' },
  { name: 'TechCrunch', url: 'https://techcrunch.com/feed/' },
  { name: 'The Verge', url: 'https://www.theverge.com/rss/index.xml' },
  { name: 'Wired', url: 'https://www.wired.com/feed/rss' },
  { name: 'CoinDesk', url: 'https://www.coindesk.com/arc/outboundfeeds/rss/' },
  { name: 'Decrypt', url: 'https://decrypt.co/feed' },
  { name: 'The Block', url: 'https://www.theblock.co/rss.xml' },
  { name: 'Krebs on Security', url: 'https://krebsonsecurity.com/feed/' },
  { name: 'Schneier on Security', url: 'https://www.schneier.com/feed/atom/' },
  { name: 'EFF Deeplinks', url: 'https://www.eff.org/rss/updates.xml' },
  { name: 'Privacy Guides', url: 'https://www.privacyguides.org/en/feed_rss_created.xml' },
  { name: 'r/technology', url: 'https://www.reddit.com/r/technology/.rss' },
  { name: 'r/privacy', url: 'https://www.reddit.com/r/privacy/.rss' },
  { name: 'r/CryptoCurrency', url: 'https://www.reddit.com/r/CryptoCurrency/.rss' }
];

const REDIS_URL = process.env.REDIS_URL!;
const REDIS_KEY = 'rss:items';
const REDIS_TIMESTAMP_KEY = 'rss:last_update';

async function fetchFeed(feed: { name: string; url: string }) {
  try {
    const response = await fetch(feed.url, { next: { revalidate: 600 } });
    if (!response.ok) return null;
    
    const xmlText = await response.text();
    const parsed = await parseStringPromise(xmlText);
    
    const items = parsed.rss?.channel?.[0]?.item || parsed.feed?.entry || [];
    
    return items.slice(0, 10).map((item: any) => {
      const link = item.link?.[0]?._ || item.link?.[0] || item.id?.[0];
      const url = new URL(link);
      const favicon = `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=128`;
      
      return {
        source: feed.name,
        title: item.title?.[0]?._ || item.title?.[0],
        link,
        pubDate: item.pubDate?.[0] || item.published?.[0] || item.updated?.[0],
        favicon
      };
    });
  } catch (error) {
    console.error(`Failed to fetch ${feed.name}:`, error);
    return null;
  }
}

export async function GET() {
  const redis = createClient({ url: REDIS_URL });
  
  try {
    await redis.connect();
    
    const now = Date.now();
    const lastUpdate = await redis.get(REDIS_TIMESTAMP_KEY);
    const shouldUpdate = !lastUpdate || (now - parseInt(lastUpdate)) > 600000; // 10 mins
    
    if (shouldUpdate) {
      // Fetch new items
      const results = await Promise.all(RSS_FEEDS.map(fetchFeed));
      const newItems = results.filter(Boolean).flat();
      
      // Get existing items
      const cached = await redis.get(REDIS_KEY);
      const existingItems = cached ? JSON.parse(cached) : [];
      
      // Merge and deduplicate by link
      const itemMap = new Map();
      [...existingItems, ...newItems].forEach(item => {
        const existing = itemMap.get(item.link);
        if (!existing || new Date(item.pubDate) > new Date(existing.pubDate)) {
          itemMap.set(item.link, item);
        }
      });
      
      const mergedItems = Array.from(itemMap.values());
      mergedItems.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
      
      // Keep only last 500 items
      const itemsToStore = mergedItems.slice(0, 500);
      
      await redis.set(REDIS_KEY, JSON.stringify(itemsToStore));
      await redis.set(REDIS_TIMESTAMP_KEY, now.toString());
      
      await redis.disconnect();
      return NextResponse.json({ items: itemsToStore, count: itemsToStore.length, cached: false });
    }
    
    // Return cached items
    const cached = await redis.get(REDIS_KEY);
    const items = cached ? JSON.parse(cached) : [];
    
    await redis.disconnect();
    return NextResponse.json({ items, count: items.length, cached: true });
    
  } catch (error) {
    console.error('Redis error:', error);
    await redis.disconnect();
    
    // Fallback to direct fetch
    const results = await Promise.all(RSS_FEEDS.map(fetchFeed));
    const items = results.filter(Boolean).flat();
    items.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
    
    return NextResponse.json({ items, count: items.length, cached: false, error: 'Redis unavailable' });
  }
}