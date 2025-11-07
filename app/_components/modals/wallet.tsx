import { useEthers } from '@usedapp/core';
import { useEffect } from 'react';

export const Connect = () => {
  const { account, deactivate, activateBrowserWallet } = useEthers();

  // Log the connected account to the console whenever it changes
  useEffect(() => {
    if (account) {
      console.log('Connected account:', account);
    } else {
      console.log('No account connected');
    }
  }, [account]);

  if (account)
    return (
      <button className="connect" onClick={() => deactivate()}>
        Disconnect
      </button>
    );

  return (
    <button className="connect" onClick={() => activateBrowserWallet()}>
      Connect
    </button>
  );
};
