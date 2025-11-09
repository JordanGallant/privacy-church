// components/EventsList.tsx
'use client';
import { MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import OurPick from './tiny/ourpick';

interface Event {
  id: number;
  title: string;
  date: string;
  link: string;
  location: {
    city: string;
    country: string;
  };
  img?: string;
}

interface EventsListProps {
  argentina?: boolean;
}

export default function EventsList({ argentina = false }: EventsListProps) {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('/api/events');
        if (!response.ok) throw new Error('Failed to fetch events');
        
        const data: Event[] = await response.json();
        
        let filteredEvents: Event[];
        
        if (argentina) {
          // Show only events with IDs from 14 to 32
          filteredEvents = data.filter(event => event.id >= 2 && event.id <= 32);
        } else {
          // Only show event with id 1
          filteredEvents = data.filter(event => event.id === 1);
        } 
        
        setEvents(filteredEvents);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, [argentina]);

  if (loading) {
    return <div className="p-6">Loading events...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      
      <div className="space-y-4">
        {events.map((event, index) => (
          argentina ? (
            <a
              key={event.id}
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:shadow-md transition-shadow"
            >
              <div
                className="rounded-lg flex-shrink-0 relative overflow-hidden"
                style={{
                  width: '100px',
                  height: '100px'
                }}
              >
                {event.img && (
                  <img 
                    src={event.img} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                )}
                {index < 1 && (
                  <div className="absolute top-2 left-2">
                    <OurPick color="green" />
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-xl leading-tight tracking-[-0.01em] font-medium mb-2 leading-tight font-[family-name:var(--font-gt-planar-image)]">
                  {event.title}
                </h3>
                <div className="flex gap-4 sm:gap-2">
                  <p className="txt-xl font-thin mb-2 leading-tight font-[family-name:var(--font-gt-planar-head)] whitespace-nowrap"
                    style={{ color: '#A0A0A0' }}>
                    {event.date}
                  </p>
                  <p className="txt-xl font-thin mb-2 leading-tight font-[family-name:var(--font-gt-planar-head)] flex items-center gap-1 whitespace-nowrap"
                    style={{ color: '#A0A0A0' }}>
                    <MapPin className="w-5 h-5" />
                    {event.location.city}
                  </p>
                </div>
              </div>
            </a>
          ) : (
            <a
              key={event.id}
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col justify-end relative"
              style={{
                height: '200px'
              }}
            >
              {event.img && (
                <img 
                  src={event.img} 
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <div className="relative z-10 p-5" style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)'
              }}>
                {index === 0 && <OurPick color="green" />}
                <h3 className="text-xl text-white mb-2 leading-tight font-[family-name:var(--font-gt-planar-image)]">
                  {event.title}
                </h3>
                <p className="txt-xl font-semibold mb-2 leading-tight font-[family-name:var(--font-gt-planar-head)]"
                  style={{ color: '#A0A0A0' }}
                >
                  {new Date(event.date).toLocaleDateString('en-US', {
                    weekday: 'short',
                    day: 'numeric',
                    month: 'short'
                  })}, {event.location.city}
                </p>
              </div>
            </a>
          )
        ))}
      </div>
      
      {events.length === 0 && (
        <p className="text-gray-500 text-center">No events found.</p>
      )}
    </div>
  );
}