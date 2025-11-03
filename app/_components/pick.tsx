"use client"
import Ourpick from "./tiny/ourpick";
import Link from "next/link";

interface SimpleEvent {
  id: number;
  title: string;
  date?: string;
  text?: string; 
  location?: string;
  tag?: string;
  ourPick?: boolean;
  pickColor?: 'green' | 'blue';
  href?: string;
  external?: boolean;
}

interface SimpleEventsListProps {
  events: SimpleEvent[];
}

export default function SimpleEventsList({ events }: SimpleEventsListProps) {
  return (
    <div className="space-y-4">
      {events.map(event => {
        const content = (
          <div className="border-b border-gray-400 pb-4 last:border-b-0">
            {event.ourPick && (
              <Ourpick color={event.pickColor} />
            )}
            <h3 className="text-xl italic font-bold mb-2 leading-tight font-[family-name:var(--font-gt-planar-menu)]">
              {event.title}
            </h3>
            {event.text && (
              <p className="text-base md:text-lg leading-relaxed font-[family-name:var(--font-dm-mono)]">
                {event.text}
              </p>
            )}
            {event.date && (
              <p className="txt-5xl text-white font-semibold mb-2 leading-tight font-[family-name:var(--font-gt-planar-head)]"
                style={{ color: '#A0A0A0' }}
              >
                {new Date(event.date).toLocaleDateString('en-US', {
                  weekday: 'short',
                  day: 'numeric',
                  month: 'short'
                })}
              </p>
            )}
            {event.location && (
              <p className="inline-block px-[2px] mb-2 text-xs uppercase font-[family-name:var(--font-elevatica)]"
                style={{ color: '#A0A0A0' }}
              >
                {event.location}
              </p>
            )}
            {event.tag && (
              <p className="txt-xl font-semibold mb-2 leading-tight font-[family-name:var(--font-gt-planar-head)]"
                style={{ color: '#A0A0A0' }}
              >
                {event.tag}
              </p>
            )}
          </div>
        );

        return event.href ? (
          <Link 
            key={event.id} 
            href={event.href}
            {...(event.external && { target: "_blank", rel: "noopener noreferrer" })}
            className="block hover:opacity-80 transition-opacity"
          >
            {content}
          </Link>
        ) : (
          <div key={event.id}>
            {content}
          </div>
        );
      })}
    </div>
  );
}