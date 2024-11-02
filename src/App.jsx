import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';

import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { RequestAirdrop } from './RequestAirdrop';
import { ShowBalance } from './ShowBalance';
import { SendToken } from './SendToken';

function App() {

  return (
    <div>
       <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
          <WalletProvider wallets={[]} autoConnect>
               <WalletModalProvider>
               <div style={{
                   width:'100vw',
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: 8
                }}>
                  <WalletMultiButton />
                  <WalletDisconnectButton />
                  
                </div>
                  <RequestAirdrop/>
                  <ShowBalance/>
                  <SendToken/>
               </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>

    </div>
  )
}

export default App
