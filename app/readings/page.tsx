'use client'

import { useState } from 'react';

interface BeeAddresses {
  overlay?: string;
  underlay?: string[];
  ethereum?: string;
  publicKey?: string;
  pssPublicKey?: string;
}

export default function BeeAddressTester() {
  const [data, setData] = useState<BeeAddresses | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAddresses = async (): Promise<void> => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://bee-app.proudpebble-a87a48df.eastus.azurecontainerapps.io/addresses');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const json: BeeAddresses = await response.json();
      setData(json);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Bee Node Address Tester</h1>
        
        <button
          onClick={fetchAddresses}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          {loading ? 'Loading...' : 'Fetch Addresses'}
        </button>

        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <h2 className="text-red-800 font-semibold mb-2">Error:</h2>
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {data && (
          <div className="mt-6 p-4 bg-white border border-gray-200 rounded-lg">
            <h2 className="text-lg font-semibold mb-3">Response:</h2>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
              {JSON.stringify(data, null, 2)}
            </pre>
            
            {data.ethereum && (
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
                <p className="text-sm font-semibold text-green-800">Ethereum Address:</p>
                <p className="text-green-600 font-mono break-all">{data.ethereum}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}