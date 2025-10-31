// app/api/rss/route.ts
import { NextResponse } from 'next/server';
import { parseStringPromise } from 'xml2js';
import { getRedis } from '../../lib/redis';

const RSS_FEEDS = [
  { name: 'Hacker News', url: 'https://news.ycombinator.com/rss', priority: 3, maxItems: 100, filter: true },
  { name: 'Ars Technica', url: 'https://feeds.arstechnica.com/arstechnica/index', priority: 2, maxItems: 100, filter: true },
  { name: 'TechCrunch', url: 'https://techcrunch.com/feed/', priority: 2, maxItems: 100, filter: true },
  { name: 'The Verge', url: 'https://www.theverge.com/rss/index.xml', priority: 1, maxItems: 10, filter: true },
  { name: 'Wired', url: 'https://www.wired.com/feed/rss', priority: 2, maxItems: 100, filter: true },
  { name: 'CoinDesk', url: 'https://www.coindesk.com/arc/outboundfeeds/rss/', priority: 2, maxItems: 100, filter: true },
  { name: 'Decrypt', url: 'https://decrypt.co/feed', priority: 2, maxItems: 100, filter: true },
  { name: 'The Block', url: 'https://www.theblock.co/rss.xml', priority: 2, maxItems: 100, filter: true },
  { name: 'Krebs on Security', url: 'https://krebsonsecurity.com/feed/', priority: 2, maxItems: 100, filter: true },
  { name: 'Schneier on Security', url: 'https://www.schneier.com/feed/atom/', priority: 2, maxItems: 100, filter: true },
  { name: 'EFF Deeplinks', url: 'https://www.eff.org/rss/updates.xml', priority: 2, maxItems: 100, filter: true },
  { name: 'Privacy Guides', url: 'https://www.privacyguides.org/en/feed_rss_created.xml', priority: 2, maxItems: 100, filter: true },
  { name: 'Ludlow Institute', url: 'https://www.ludlowinstitute.org/sitemap.xml', priority: 2, maxItems: 100, filter: false },
  { name: 'r/Privacy', url: 'https://www.reddit.com/r/privacy/.rss', priority: 3, maxItems: 50, filter: true },
  { name: 'Privacy International', url: 'https://privacyinternational.org/rss.xml', priority: 3, maxItems: 50, filter: false },
  https://privacyinternational.org/rss.xml

];

const REDIS_KEY = 'rss:items';
const KEYWORDS = ['privacy'];

interface RSSItem {
  source: string;
  title: string;
  link: string;
  pubDate: string;
  favicon: string;
}

async function fetchFeed(feed: {
  name: string;
  url: string;
  priority: number;
  maxItems: number;
  filter?: boolean;
}) {
  try {
    console.log(`📡 Fetching ${feed.name}...`);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout

    const response = await fetch(feed.url, {
      cache: 'no-store',
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Accept': 'application/rss+xml, application/xml;q=0.9, */*;q=0.8',
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

    let items: any[] = [];

    // --- Detect feed format ---
    if (parsed?.rss?.channel?.item) {
      // RSS 2.0
      items = Array.isArray(parsed.rss.channel.item)
        ? parsed.rss.channel.item
        : [parsed.rss.channel.item];
    } else if (parsed?.feed?.entry) {
      // Atom
      items = Array.isArray(parsed.feed.entry)
        ? parsed.feed.entry
        : [parsed.feed.entry];
    } else if (parsed?.urlset?.url) {
      // Sitemap XML
      const urls = Array.isArray(parsed.urlset.url)
        ? parsed.urlset.url
        : [parsed.urlset.url];

      items = urls
        .map((u: any) => {
          const loc = u.loc;
          if (!loc) return null;

          // Skip non-article pages
          if (
            loc.includes('/about') ||
            loc.endsWith('/articles') ||
            loc.endsWith('/articles/') || 
            loc.endsWith('/board-of-advisors') ||
             loc.endsWith('/jobs') || 
             loc.endsWith('/home') ||
             loc.endsWith('/community') ||
             loc.endsWith('/graphic-designer') 
          ) {
            return null;
          }

          let title = loc;

          try {
            const url = new URL(loc);
            const pathSegments = url.pathname.split('/').filter(Boolean);
            const lastSegment = pathSegments[pathSegments.length - 1] || '';

            if (lastSegment && /^[a-z0-9-]+$/.test(lastSegment)) {
              // Convert slug → Title Case
              title = lastSegment
                .split('-')
                .map(
                  (word) =>
                    word.length > 1
                      ? word.charAt(0).toUpperCase() + word.slice(1)
                      : word.toUpperCase()
                )
                .join(' ');

              // Fix common contractions
              title = title
                .replace(/\bYoure\b/g, "You're")
                .replace(/\bDont\b/g, "Don't")
                .replace(/\bCant\b/g, "Can't")
                .replace(/\bIm\b/g, "I'm")
                .replace(/\bIsnt\b/g, "Isn't")
                .replace(/\bWasnt\b/g, "Wasn't")
                .replace(/\bHes\b/g, "He's")
                .replace(/\bShes\b/g, "She's");
            } else {
              title = url.hostname.replace('www.', '');
            }
          } catch {
            // Keep raw loc if URL parsing fails
          }

          return {
            title,
            link: loc,
            pubDate: u.lastmod || new Date().toISOString(),
          };
        })
        .filter(Boolean);

      console.log(`🌐 ${feed.name}: parsed ${items.length} sitemap entries.`);
    } else {
      console.warn(`⚠️ ${feed.name}: No recognizable items found`);
      return [];
    }

    // --- Normalize items ---
    const processedItems = items.slice(0, feed.maxItems).map((item: any) => {
      let title =
        item.title?._ ||
        item.title?.['#'] ||
        item.title ||
        'Untitled';
      if (Array.isArray(title)) title = title[0];

      let link = '';
      if (item.link) {
        if (typeof item.link === 'string') {
          link = item.link;
        } else if (Array.isArray(item.link)) {
          const linkObj =
            item.link.find((l: any) => l.href || l.rel === 'alternate') ||
            item.link[0];
          link = linkObj?.href || linkObj?._ || linkObj;
        } else if (item.link.href) {
          link = item.link.href;
        }
      } else if (item.id) {
        link = Array.isArray(item.id) ? item.id[0] : item.id;
      } else if (item.loc) {
        // For sitemap items
        link = item.loc;
      }

      let pubDate =
        item.pubDate ||
        item.published ||
        item.updated ||
        item.lastmod ||
        new Date().toISOString();
      if (Array.isArray(pubDate)) pubDate = pubDate[0];

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

    // --- Apply keyword filtering ---
    let filteredItems = validItems;
    if (feed.filter) {
      filteredItems = validItems.filter((item) => {
        const title = item.title?.toLowerCase() || '';
        return KEYWORDS.some((kw) => title.includes(kw));
      });
      console.log(
        `🔍 ${feed.name}: filtered ${filteredItems.length}/${validItems.length} items by keywords.`
      );
    }

    console.log(`✅ ${feed.name}: ${filteredItems.length} items`);
    return filteredItems;
  } catch (error) {
    console.error(
      `❌ ${feed.name} error:`,
      error instanceof Error ? error.message : error
    );
    return [];
  }
}




export async function POST(request: Request) {
  try {
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

    const allResults = await Promise.all(RSS_FEEDS.map(fetchFeed));
    const allItems: RSSItem[] = allResults.flat();

    console.log(`📊 Total items fetched: ${allItems.length}`);

    if (allItems.length === 0) {
      return NextResponse.json({ error: 'No items fetched', success: false }, { status: 500 });
    }

    // Sort and dedupe
    allItems.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
    const uniqueItems = Array.from(new Map(allItems.map(i => [i.link, i])).values());
    const itemsToStore = uniqueItems.slice(0, 500);

    // Save to Redis
    await redis.set(REDIS_KEY, JSON.stringify(itemsToStore));

    console.log(`💾 Stored ${itemsToStore.length} items.`);

    return NextResponse.json({
      success: true,
      totalItems: itemsToStore.length,
      feedsProcessed: RSS_FEEDS.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('❌ FATAL ERROR:', error);
    return NextResponse.json({
      error: 'Update failed',
      details: error instanceof Error ? error.message : String(error),
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    const redis = getRedis();
    await redis.ping();
    const cached = await redis.get(REDIS_KEY);
    if (!cached) return NextResponse.json([]);
    return NextResponse.json(JSON.parse(cached));
  } catch (error) {
    return NextResponse.json({
      error: 'Failed to read',
      details: error instanceof Error ? error.message : String(error),
    }, { status: 500 });
  }
}
