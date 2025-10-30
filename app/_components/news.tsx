// app/_components/news.tsx
import { createClient } from 'redis';

const REDIS_URL = process.env.REDIS_URL!;
const REDIS_KEY = 'rss:items';

interface NewsItem {
  source: string;
  title: string;
  link: string;
  pubDate: string;
  favicon: string;
}

async function getTopNews(): Promise<NewsItem[]> {
  const redis = createClient({ url: REDIS_URL });
  
  try {
    await redis.connect();
    const cached = await redis.get(REDIS_KEY);
    await redis.disconnect();
    
    if (!cached) return [];
    
    const items = JSON.parse(cached);
    return items.slice(0, 30);
  } catch (error) {
    console.error('Redis error:', error);
    return [];
  }
}

export default async function News() {
  const items = await getTopNews();
  
  return (
    <div className="min-h-screen px-8 md:px-12 lg:px-16 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="space-y-6">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group"
            >
              <img 
                src={item.favicon} 
                alt="" 
                className="w-6 h-6 flex-shrink-0 mt-1"
              />
              <div className="flex-1">
                <h2 className="text-2xl italic font-semibold mb-2 leading-tight font-[family-name:var(--font-gt-planar-black)] group-hover:underline">
                  {item.title}
                </h2>
                <p className="text-base italic md:text-lg leading-relaxed font-[family-name:var(--font-gt-planar-light)] text-[#A0A0A0]">
                  {item.source} • {new Date(item.pubDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}