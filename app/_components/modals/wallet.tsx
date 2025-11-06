import { useEthers } from '@usedapp/core';

export const Connect = () => {
  const { account, deactivate, activateBrowserWallet } = useEthers();
  // 'account' being undefined means that we are not connected.
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
