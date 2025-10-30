// app/_components/news.tsx
'use client'
import { useState, useEffect } from 'react';

interface NewsItem {
  source: string;
  title: string;
  link: string;
  pubDate: string;
  favicon: string;
}

export default function News() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => {
        setItems(data.items.slice(0, 30));
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching news:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen px-8 md:px-12 lg:px-16 py-8">
        <div className="max-w-2xl mx-auto">
          <p className="text-lg font-[family-name:var(--font-gt-planar)]">Loading news...</p>
        </div>
      </div>
    );
  }

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
              <div className="flex-1">
                <h2 className="text-2xl italic font-semibold mb-2 leading-tight font-[family-name:var(--font-gt-planar-black)] group-hover:underline">
                  {item.title}
                </h2>
                <p className="flex items-center gap-2 text-base italic md:text-lg leading-relaxed font-[family-name:var(--font-gt-planar-light)] text-[#A0A0A0]">
                  <img
                    src={item.favicon}
                    alt=""
                    className="w-4 h-4 flex-shrink-0"
                  />
                  <span>{item.source}</span>
                  <span>•</span>
                  <span>
                    {new Date(item.pubDate).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                      timeZone: 'Europe/Amsterdam',
                    })}
                  </span>
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
