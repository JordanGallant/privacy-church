// app/api/rss/route.ts
import { NextResponse } from 'next/server';
import { parseStringPromise } from 'xml2js';
import { getRedis } from '../../lib/redis';

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

const REDIS_KEY = 'rss:items';

interface RSSItem {
  source: string;
  title: string;
  link: string;
  pubDate: string;
  favicon: string;
}

async function fetchFeed(feed: { name: string; url: string }): Promise<RSSItem[]> {
  try {
    console.log(`📡 Fetching ${feed.name}...`);
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);
    
    const response = await fetch(feed.url, { 
      cache: 'no-store',
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; RSSReader/1.0)'
      }
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      console.error(`❌ ${feed.name} failed: HTTP ${response.status}`);
      return [];
    }
    
    const xmlText = await response.text();
    const parsed = await parseStringPromise(xmlText);
    
    // Handle both RSS and Atom feeds
    let items: any[] = [];
    if (parsed.rss?.channel?.[0]?.item) {
      items = parsed.rss.channel[0].item;
    } else if (parsed.feed?.entry) {
      items = parsed.feed.entry;
    }
    
    if (items.length === 0) {
      console.warn(`⚠️ ${feed.name} returned 0 items`);
      return [];
    }
    
    // Take first 30 items from each feed
    const itemsToProcess = items.slice(0, 30);
    
    const processedItems = itemsToProcess.map((item: any) => {
      // Extract link
      let link = '';
      if (item.link) {
        if (typeof item.link === 'string') {
          link = item.link;
        } else if (Array.isArray(item.link)) {
          link = item.link[0]?._ || item.link[0]?.$.href || item.link[0];
        } else if (item.link.$?.href) {
          link = item.link.$.href;
        }
      }
      if (!link && item.id) {
        link = Array.isArray(item.id) ? item.id[0] : item.id;
      }
      
      // Extract title
      let title = '';
      if (item.title) {
        title = Array.isArray(item.title) ? (item.title[0]?._ || item.title[0]) : item.title;
      }
      
      // Extract date
      let pubDate = '';
      if (item.pubDate) {
        pubDate = Array.isArray(item.pubDate) ? item.pubDate[0] : item.pubDate;
      } else if (item.published) {
        pubDate = Array.isArray(item.published) ? item.published[0] : item.published;
      } else if (item.updated) {
        pubDate = Array.isArray(item.updated) ? item.updated[0] : item.updated;
      }
      
      // Get favicon
      let favicon = '';
      try {
        if (link) {
          const url = new URL(link);
          favicon = `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=128`;
        }
      } catch (e) {
        favicon = '';
      }
      
      return {
        source: feed.name,
        title: title || 'Untitled',
        link: link || '',
        pubDate: pubDate || new Date().toISOString(),
        favicon
      };
    }).filter(item => item.link); // Only keep items with valid links
    
    console.log(`✅ ${feed.name}: ${processedItems.length} items`);
    return processedItems;
    
  } catch (error) {
    console.error(`❌ ${feed.name} error:`, error instanceof Error ? error.message : error);
    return [];
  }
}

export async function POST(request: Request) {
  console.log('\n========================================');
  console.log('🚀 RSS UPDATE STARTED:', new Date().toISOString());
  console.log('========================================\n');
  
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
      console.error('❌ Unauthorized');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.log('✅ Authorized\n');

    // Connect to Redis
    const redis = getRedis();
    await redis.ping();
    console.log('✅ Redis connected\n');

    // Fetch ALL feeds
    console.log(`📡 Fetching ${RSS_FEEDS.length} RSS feeds...\n`);
    
    const allResults = await Promise.all(
      RSS_FEEDS.map(feed => fetchFeed(feed))
    );
    
    // Flatten all items into one array
    const allItems: RSSItem[] = allResults.flat();
    
    console.log(`\n📊 Total items fetched: ${allItems.length}`);
    
    if (allItems.length === 0) {
      console.error('❌ NO ITEMS FETCHED FROM ANY FEED!');
      return NextResponse.json({ 
        error: 'No items fetched',
        success: false 
      }, { status: 500 });
    }

    // Sort by date - NEWEST FIRST
    console.log('🔄 Sorting by date (newest first)...');
    allItems.sort((a, b) => {
      const dateA = new Date(a.pubDate).getTime();
      const dateB = new Date(b.pubDate).getTime();
      return dateB - dateA; // Descending order (newest first)
    });

    // Remove duplicates by link
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
    
    console.log('✅ Written to Redis');

    // VERIFY
    console.log('🔍 Verifying write...');
    const verify = await redis.get(REDIS_KEY);
    
    if (!verify) {
      throw new Error('Verification failed: no data found');
    }
    
    const verifiedItems = JSON.parse(verify);
    console.log(`✅ Verified: ${verifiedItems.length} items in Redis`);
    
    // Show sample of what was stored
    console.log('\n📰 Sample of stored items (first 3):');
    itemsToStore.slice(0, 3).forEach((item, i) => {
      console.log(`${i+1}. [${item.source}] ${item.title.substring(0, 60)}...`);
      console.log(`   ${item.pubDate}`);
    });

    console.log('\n========================================');
    console.log('✅ RSS UPDATE COMPLETED SUCCESSFULLY');
    console.log('========================================\n');
    
    return NextResponse.json({ 
      success: true,
      totalItems: itemsToStore.length,
      feedsProcessed: RSS_FEEDS.length,
      itemsBySource: RSS_FEEDS.map(feed => ({
        source: feed.name,
        count: itemsToStore.filter(item => item.source === feed.name).length
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