'use client'

import { DAppProvider, Gnosis } from '@usedapp/core';
import { ReactNode } from 'react';

const config = {
  readOnlyChainId: Gnosis.chainId,
  readOnlyUrls: {
    [Gnosis.chainId]: 'https://rpc.gnosischain.com',
  },
};

export function Providers({ children }: { children: ReactNode }) {
  return (
    <DAppProvider config={config}>
      {children}
    </DAppProvider>
  );
}