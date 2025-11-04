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
      {events.map((event, index) => {
        const content = (
          <>
            <div className="">
              {event.ourPick && (
                <Ourpick color={event.pickColor} />
              )}
              <h3 className="text-xl  font-medium mb-2 leading-tight font-[family-name:var(--font-gt-planar-image)]">
                {event.title}
              </h3>
              {event.text && (
                <p className=" text-[15px] leading-[20px] tracking-[-0.06em] font-[family-name:var(--font-dm-mono)] mb-2">
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
            {index < events.length - 1 && (
              <hr className="border-gray-400 my-4" />
            )}
          </>
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