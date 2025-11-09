'use client'
import { useState } from 'react';
import { useEthers } from '@usedapp/core';
import Navbar from '../_components/nav';

export default function Stream() {
  const { account, library } = useEthers();
  const [expiry, setExpiry] = useState(60);
  const [loading, setLoading] = useState(false);
  const [streamKey, setStreamKey] = useState('');
  const [error, setError] = useState('');

  const generateStreamKey = async () => {
    setLoading(true);
    setError('');
    setStreamKey('');

    try {
      const response = await fetch('/api/live', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          stream: 'my_stream',
          expiry: expiry,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate stream key');
      }

      // Parse the stream key from the output
      let streamKey = data.output;
      const streamKeyMatch = data.output?.match(/OBS Stream Key: (.+)/);
      if (streamKeyMatch) {
        streamKey = streamKeyMatch[1].trim();
      }

      setStreamKey(streamKey);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(streamKey);
  };

  return (
    <>
      <Navbar />
      <div className="px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl mb-2 leading-tight font-[family-name:var(--font-gt-planar-heading)] pl-[10px]">
          Stream Admin
        </h1>
        <p
          className="font-[family-name:var(--font-dm-mono)] font-normal text-[15px] leading-[20px] tracking-[-0.06em] mb-8 pl-[10px]"
          style={{ color: "#717171" }}
        >
          Configure and manage your live stream settings
        </p>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Generate Stream Key</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Expiry (minutes)
            </label>
            <input
              type="number"
              value={expiry}
              onChange={(e) => setExpiry(parseInt(e.target.value))}
              min="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={generateStreamKey}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Generating...' : 'Generate Stream Key'}
          </button>

          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {streamKey && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-green-900">Stream Key Generated!</h3>
                <button
                  onClick={copyToClipboard}
                  className="text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  Copy
                </button>
              </div>
              <pre className="text-xs bg-white p-3 rounded overflow-x-auto border border-green-300">
                {streamKey}
              </pre>
            </div>
          )}
        </div>
      </div>
    </>
  );
}