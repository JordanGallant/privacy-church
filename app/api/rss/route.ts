// app/api/rss/route.ts
import { NextResponse } from 'next/server';
import { parseStringPromise } from 'xml2js';

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
  const results = await Promise.all(RSS_FEEDS.map(fetchFeed));
  const items = results.filter(Boolean).flat();
  
  // Randomize order
  items.sort(() => Math.random() - 0.5);
  
  return NextResponse.json({ items, count: items.length });
}