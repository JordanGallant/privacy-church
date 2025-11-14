import { useEffect } from 'react';

export default function PageLoader({ isLoading = true }) {
  useEffect(() => {
    if (isLoading) {
      // Optional: Add any entrance animations here
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <>
      <style>{`
        @keyframes scan {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .gradient-scan {
          animation: scan 0.75s ease-in-out infinite;
        }
      `}</style>
      
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black md:bg-transparent md:-mt-[20px]">
        <div className="relative w-full h-full md:w-[420px] md:h-[calc(100vh-40px)] md:rounded-[32px] overflow-hidden bg-white">
          <div 
            className="gradient-scan absolute inset-0 bg-gradient-to-r from-transparent via-[#dc510f] to-transparent"
            style={{ width: '100%' }}
          />    
        </div>
      </div>
    </>
  );
}