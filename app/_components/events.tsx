// components/EventsList.tsx
'use client';

import { useEffect, useState } from 'react';
import OurPick from './tiny/ourpick';

interface Event {
  id: number;
  title: string;
  date: string;
  location: {
    city: string;
    country: string;
  };
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
          // Show all events in Argentina
          filteredEvents = data.filter(
            event => event.location.country === 'Argentina'
          );
        } else {
          // Show top 3 events from bottom of JSON (last 3 events)
          filteredEvents = data.slice(-3);
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
            // Argentina style - green square with text
            <div
              key={event.id}
              className="flex items-center gap-4 hover:shadow-md transition-shadow"
            >
              <div
                className="rounded-lg flex-shrink-0"
                style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: '#BFF921'
                }}
              />
              <div>
                {index < 2 && <OurPick color="green" />}
                <h3 className="text-xl italic font-bold mb-2 leading-tight font-[family-name:var( )]">
                  {event.title}
                </h3>
                <p className="inline-block px-[2px] mb-2 text-xs uppercase font-[family-name:var(--font-elevatica)]"
                    style={{ color: '#A0A0A0' }}>
                  {event.date}
                </p>
                <br/>
                <p className="inline-block px-[2px] mb-2 text-xs uppercase font-[family-name:var(--font-elevatica)]"
                 style={{ color: '#A0A0A0' }}>
                  {event.location.city}
                </p>
              </div>
            </div>
          ) : (
            <div
              key={event.id}
              className="rounded-lg p-5 hover:shadow-lg transition-shadow flex flex-col justify-end"
              style={{
                background: 'linear-gradient(to top, #000000, #FF6213)',
                height: '200px'
              }}
            >
              <div>
                {index === 0 && <OurPick color="green" />}
                <h3 className="text-xl  text-white mb-2 leading-tight font-[family-name:var(--font-gt-planar-image)]">
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
            </div>
          )
        ))}
      </div>
      
      {events.length === 0 && (
        <p className="text-gray-500 text-center">No events found.</p>
      )}
    </div>
  );
}