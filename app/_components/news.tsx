'use client'
import { useState, useEffect } from 'react';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  color: 'blue' | 'green';
}

export default function NewsFeed() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => {
        setNews(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching news:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-[var(--font-gt-planar)]">Loading news...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-8 md:px-12 lg:px-16 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="space-y-6">
          {news.map((item) => (
            <div key={item.id} className="flex items-start gap-4">
              <div 
                className="w-6 h-6 rounded-full flex-shrink-0 mt-1"
                style={{
                  backgroundColor: item.color === 'blue' ? '#2509fb' : '#bff921'
                }}
              />
              <div className="flex-1">
                <h2 className="text-xl italic font-bold mb-2 leading-tight font-[family-name:var(--font-gt-planar-black)]">
                  {item.title}
                </h2>
                <p className="text-base italic md:text-lg leading-relaxed font-[family-name:var(--font-gt-planar-light)] text-[#A0A0A0]">
                  {new Date(item.date).toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                  })}, {new Date(item.date).toLocaleDateString('en-US', {
                    month: '2-digit',
                    day: '2-digit',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}