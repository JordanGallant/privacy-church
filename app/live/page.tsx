'use client';

import React, { useState, useEffect, useRef } from 'react';

declare global {
  interface Window {
    Hls: any;
  }
}

export default function StreamPlayer() {
  const [isLive, setIsLive] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<any>(null);

  const streamUrl = 'https://stream.slim.community/swarm-hls/video/my_stream/playlist-live.m3u8';

  useEffect(() => {
    const loadHls = async () => {
      if (!videoRef.current) return;

      const video = videoRef.current;

      // Check if HLS is natively supported (Safari)
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = streamUrl;
        video.addEventListener('loadeddata', () => setIsLive(true));
        video.addEventListener('error', () => {
          setIsLive(false);
          setError('Stream not available');
        });
      } else if (window.Hls?.isSupported()) {
        const hls = new window.Hls();
        hlsRef.current = hls;

        hls.on(window.Hls.Events.MANIFEST_PARSED, () => {
          setIsLive(true);
          video.play().catch(() => {});
        });

        hls.on(window.Hls.Events.ERROR, (event: any, data: any) => {
          if (data.fatal) {
            setIsLive(false);
            setError('Stream not available');
          }
        });

        hls.loadSource(streamUrl);
        hls.attachMedia(video);
      } else {
        setError('HLS not supported in this browser');
      }
    };

    // Load HLS.js library
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/hls.js@latest';
    script.async = true;
    script.onload = loadHls;
    document.body.appendChild(script);

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#111111] border border-[#222222] rounded-lg overflow-hidden">
          <video
            ref={videoRef}
            className="w-full aspect-video bg-black"
            controls
            playsInline
            muted
          />
          
          <div className="p-6 border-t border-[#222222]">
            {isLive === null && !error && (
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span>Checking stream...</span>
              </div>
            )}
            
            {isLive === true && (
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="font-medium text-blue-500">LIVE</span>
              </div>
            )}
            
            {isLive === false && (
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-2 h-2 bg-gray-600 rounded-full" />
                <span>Stream not live</span>
              </div>
            )}
            
            {error && (
              <div className="text-gray-400">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}