// app/api/rss/route.ts
import { NextResponse } from 'next/server';
import { parseStringPromise } from 'xml2js';
import { getRedis } from '../../lib/redis';

const RSS_FEEDS = [
  { name: 'Hacker News', url: 'https://news.ycombinator.com/rss', priority: 3, maxItems: 60 },
  { name: 'Ars Technica', url: 'https://feeds.arstechnica.com/arstechnica/index', priority: 2, maxItems: 40 },
  { name: 'TechCrunch', url: 'https://techcrunch.com/feed/', priority: 2, maxItems: 40 },
  { name: 'The Verge', url: 'https://www.theverge.com/rss/index.xml', priority: 1, maxItems: 10 },
  { name: 'Decrypt', url: 'https://decrypt.co/feed', priority: 2, maxItems: 40 },
  { name: 'The Block', url: 'https://www.theblock.co/rss.xml', priority: 2, maxItems: 40 },
  { name: 'Krebs on Security', url: 'https://krebsonsecurity.com/feed/', priority: 2, maxItems: 40 },
  { name: 'Schneier on Security', url: 'https://www.schneier.com/feed/atom/', priority: 2, maxItems: 40 },
  { name: 'EFF Deeplinks', url: 'https://www.eff.org/rss/updates.xml', priority: 2, maxItems: 40 },
  { name: 'Privacy Guides', url: 'https://www.privacyguides.org/en/feed_rss_created.xml', priority: 2, maxItems: 40 },
];

const REDIS_KEY = 'rss:items';

interface RSSItem {
  source: string;
  title: string;
  link: string;
  pubDate: string;
  favicon: string;
}

async function fetchFeed(feed: { name: string; url: string; priority: number; maxItems: number }) {
  try {
    console.log(`📡 Fetching ${feed.name}...`);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout

    const response = await fetch(feed.url, {
      cache: 'no-store',
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/rss+xml, application/xml;q=0.9, */*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error(`❌ ${feed.name} failed: ${response.status} ${response.statusText}`);
      return [];
    }

    const xmlText = await response.text();
    const parsed = await parseStringPromise(xmlText, {
      explicitArray: false,
      mergeAttrs: true,
      trim: true,
      normalize: true,
    });

    // --- Determine feed type ---
    let items: any[] = [];

    if (parsed?.rss?.channel?.item) {
      // RSS feed
      items = Array.isArray(parsed.rss.channel.item)
        ? parsed.rss.channel.item
        : [parsed.rss.channel.item];
    } else if (parsed?.feed?.entry) {
      // Atom feed
      items = Array.isArray(parsed.feed.entry)
        ? parsed.feed.entry
        : [parsed.feed.entry];
    } else {
      console.warn(`⚠️ ${feed.name}: No recognizable items found`);
      return [];
    }

    // --- Normalize items ---
    const processedItems = items.slice(0, feed.maxItems).map((item: any) => {
      // --- Title ---
      let title =
        item.title?._ ||
        item.title?.['#'] ||
        item.title ||
        'Untitled';

      if (Array.isArray(title)) title = title[0];

      // --- Link ---
      let link = '';
      if (item.link) {
        if (typeof item.link === 'string') {
          link = item.link;
        } else if (Array.isArray(item.link)) {
          const linkObj = item.link.find((l: any) => l.href || l.rel === 'alternate') || item.link[0];
          link = linkObj?.href || linkObj?._ || linkObj;
        } else if (item.link.href) {
          link = item.link.href;
        }
      } else if (item.id) {
        link = Array.isArray(item.id) ? item.id[0] : item.id;
      }

      // --- Publication Date ---
      let pubDate =
        item.pubDate ||
        item.published ||
        item.updated ||
        new Date().toISOString();

      if (Array.isArray(pubDate)) pubDate = pubDate[0];

      // --- Favicon ---
      let favicon = '';
      try {
        if (link) {
          const url = new URL(link);
          favicon = `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=128`;
        }
      } catch {
        favicon = '';
      }

      return {
        source: feed.name,
        title: title.toString(),
        link: link.toString(),
        pubDate: pubDate.toString(),
        favicon,
      };
    });

    const validItems = processedItems.filter((i) => i.link);
    console.log(`✅ ${feed.name}: ${validItems.length} items`);

    return validItems;
  } catch (error) {
    console.error(`❌ ${feed.name} error:`, error instanceof Error ? error.message : error);
    return [];
  }
}


export async function POST(request: Request) {
  
  try {
    // Auth
    const authHeader = request.headers.get('authorization');
    const vercelCronAuth = request.headers.get('x-vercel-cron-secret');
    const expectedAuth = `Bearer ${process.env.CRON_SECRET}`;
    
    if (!process.env.CRON_SECRET) {
      console.error('❌ CRON_SECRET not set');
      return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
    }
    const isAuthorized = authHeader === expectedAuth || vercelCronAuth === process.env.CRON_SECRET;
    if (!isAuthorized) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const redis = getRedis();
    await redis.ping();
    const allResults = await Promise.all(
      RSS_FEEDS.map(feed => fetchFeed(feed))
    );
    const allItems: RSSItem[] = allResults.flat();
    
    console.log(`\n📊 Total items fetched: ${allItems.length}`);
    
    if (allItems.length === 0) {
      console.error('❌ NO ITEMS FETCHED FROM ANY FEED!');
      return NextResponse.json({ 
        error: 'No items fetched',
        success: false 
      }, { status: 500 });
    }

    allItems.sort((a, b) => {
      const dateA = new Date(a.pubDate).getTime();
      const dateB = new Date(b.pubDate).getTime();
      return dateB - dateA; 
    });

    console.log('🔄 Removing duplicates...');
    const uniqueItems: RSSItem[] = [];
    const seenLinks = new Set<string>();
    
    for (const item of allItems) {
      if (!seenLinks.has(item.link)) {
        seenLinks.add(item.link);
        uniqueItems.push(item);
      }
    }
    
    console.log(`✅ Unique items: ${uniqueItems.length}`);

    // Keep only the 500 most recent
    const itemsToStore = uniqueItems.slice(0, 500);
    
    console.log(`\n💾 Storing ${itemsToStore.length} items in Redis...`);
    console.log(`📅 Date range: ${itemsToStore[0]?.pubDate} to ${itemsToStore[itemsToStore.length-1]?.pubDate}`);

    // WRITE TO REDIS
    const jsonData = JSON.stringify(itemsToStore);
    const result = await redis.set(REDIS_KEY, jsonData);
    
    if (result !== 'OK') {
      throw new Error(`Redis SET failed: ${result}`);
    }
    
    console.log('🔍 Verifying write...');
    const verify = await redis.get(REDIS_KEY);
    
    if (!verify) {
      throw new Error('Verification failed: no data found');
    }
    
    const verifiedItems = JSON.parse(verify);
 

    return NextResponse.json({ 
      success: true,
      totalItems: itemsToStore.length,
      feedsProcessed: RSS_FEEDS.length,
      itemsBySource: RSS_FEEDS.map(feed => ({
        source: feed.name,
        count: itemsToStore.filter(item => item.source === feed.name).length,
        priority: feed.priority,
        maxItems: feed.maxItems
      })),
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('\n❌❌❌ FATAL ERROR ❌❌❌');
    console.error(error);
    return NextResponse.json({ 
      error: 'Update failed',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}

// GET endpoint
export async function GET() {
  try {
    const redis = getRedis();
    await redis.ping();
    
    const cached = await redis.get(REDIS_KEY);
    
    if (!cached) {
      return NextResponse.json([]);
    }
    
    const items = JSON.parse(cached);
    
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json({ 
      error: 'Failed to read',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}
