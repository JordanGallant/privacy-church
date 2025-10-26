
"use client"
import Ourpick from "./tiny/ourpick";


interface SimpleEvent {
  id: number;
  title: string;
  date: string;
  location?: string;
  tag?: string;
  ourPick?: boolean;
}

interface SimpleEventsListProps {
  events: SimpleEvent[];
}

export default function SimpleEventsList({ events }: SimpleEventsListProps) {
  return (
    <div className="space-y-4">
      {events.map(event => (
        <div
          key={event.id}
          className="border-b border-gray-200 pb-4 last:border-b-0"
        >
          {event.ourPick && (
            <Ourpick/>
          )}
          <h3 className="text-lg font-semibold mb-1">
            {event.title}
          </h3>
          <p className="text-sm text-gray-500 italic mb-1">
            {new Date(event.date).toLocaleDateString('en-US', {
              weekday: 'short',
              day: 'numeric',
              month: 'short'
            })}
          </p>
          {event.location && (
            <p className="text-sm text-gray-600 flex items-center gap-1">
            {event.location}
            </p>
          )}
          {event.tag && (
            <p className="text-sm text-gray-600">
              #{event.tag}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}