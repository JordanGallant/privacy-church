// app/_components/news.tsx
import { createClient } from 'redis';

const REDIS_URL = 'redis://default:zQ7dv6aT4ZNa9d4bspA1T02M9OyydbcX@redis-17712.c282.east-us-mz.azure.redns.redis-cloud.com:17712';
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
    <div className="px-6 pb-12">
      <div className="space-y-4">
        {items.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start gap-3">
              <img 
                src={item.favicon} 
                alt="" 
                className="w-5 h-5 mt-1 flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-lg mb-1 line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="font-[family-name:var(--font-dm-mono)]">
                    {item.source}
                  </span>
                  <span>•</span>
                  <time>
                    {new Date(item.pubDate).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </time>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}