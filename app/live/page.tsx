'use client'
import { useEffect, useRef, useState } from 'react';
import { attach, detach, EVENTS, playerBee  } from '@solarpunkltd/swarm-stream-js';
import Navbar from '../_components/nav';

const readBeeUrl = process.env.NEXT_PUBLIC_READ_BEE_URL!;
playerBee.setBee(readBeeUrl);

export default function LiveStreamPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsRef = useRef<any>(null);
  
  const [topic, setTopic] = useState('');
  const [owner, setOwner] = useState('');
  const [watching, setWatching] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (watching && videoRef.current && topic && owner) {
      const controls = attach({ 
        media: videoRef.current, 
        address: owner.replace('0x', ''), 
        topic 
      });
      
      controlsRef.current = controls;
      controls.on(EVENTS.LOADING_PLAYING_CHANGE, (loading: boolean) => setLoading(loading));
      controls.on(EVENTS.IS_PLAYING_CHANGE, (playing: boolean) => setIsPlaying(playing));
      
      controls.play();
    }

    return () => {
      if (controlsRef.current) detach();
    };
  }, [watching, topic, owner]);

  const startWatching = () => {
    if (topic && owner) setWatching(true);
  };

  return (
    <>
      <Navbar/>
      <div className="px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl mb-2 leading-tight font-[family-name:var(--font-gt-planar-heading)] pl-[10px]">
          Live Stream
        </h1>
        <p className="font-[family-name:var(--font-dm-mono)] text-[15px] mb-4 pl-[10px]" style={{ color: "#717171" }}>
          Watch live streams from the swarm
        </p>
        
        {!watching ? (
          <div className="space-y-3 mb-4">
            <input
              type="text"
              placeholder="Stream topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-4 py-2 border rounded font-[family-name:var(--font-dm-mono)] text-sm"
            />
            <input
              type="text"
              placeholder="Owner address (0x...)"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              className="w-full px-4 py-2 border rounded font-[family-name:var(--font-dm-mono)] text-sm"
            />
            <button
              onClick={startWatching}
              className="w-full bg-blue-500 text-white py-2 rounded font-[family-name:var(--font-dm-mono)]"
            >
              Watch
            </button>
          </div>
        ) : (
          <div className="mb-4">
            {loading && <p className="text-sm mb-2">Loading...</p>}
            <video 
              ref={videoRef}
              controls
              autoPlay
              className="w-full rounded"
              style={{ maxHeight: '600px' }}
            />
          </div>
        )}
      </div>
    </>
  );
}