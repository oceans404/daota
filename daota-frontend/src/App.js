import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WalletConnect from '@walletconnect/client';
import QRCodeModal from '@walletconnect/qrcode-modal';
import Container from './components/Container';

import logo from './logo.svg';
import './App.css';
import './styles/output.css';
import './styles/fonts.css';

const AppText = {
  projectName: 'Daota',
  about: 'About',
};

const connector = new WalletConnect({
  bridge: 'https://bridge.walletconnect.org', // Required
  qrcodeModal: QRCodeModal,
});

export default function App() {
  const [walletAccount, setWalletAccount] = useState(null);

  useEffect(() => {
    if (connector?.connected) {
      setWalletAccount(connector?.accounts && connector.accounts[0]);
    }
  }, []);

  const handleConnectWallet = () => {
    if (!connector.connected) {
      connector.createSession();
      connector.on('connect', (error, payload) => {
        if (error) {
          throw error;
        }

        // Get provided accounts and chainId
        const { accounts, chainId } = payload.params[0];
        setWalletAccount(accounts && accounts[0]);
      });

      connector.on('session_update', (error, payload) => {
        if (error) {
          throw error;
        }

        // Get updated accounts and chainId
        const { accounts, chainId } = payload.params[0];
        setWalletAccount(accounts && accounts[0]);
      });

      connector.on('disconnect', (error, payload) => {
        if (error) {
          throw error;
        }
        setWalletAccount(null);
      });
    }
  };

  return (
    <Router>
      <div>
        <nav className='font-sans sm:text-left  bg-white shadow sm:items-baseline w-full'>
          <Container addClasses='flex flex-col text-center sm:flex-row sm:justify-between'>
            <div className='mb-2 sm:mb-0'>
              <div className='text-2xl no-underline text-grey-darkest hover:text-blue-dark'>
                <Link to='/'>{AppText.projectName}</Link>
              </div>
            </div>
            <div>
              {/* <div className='text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2'>
                <Link to='/about'>{AppText.about}</Link>
              </div> */}
              <div className='text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2'>
                {walletAccount ? (
                  <span>
                    Connected as {walletAccount.substring(0, 6)}...
                    {walletAccount.substring(38)}
                  </span>
                ) : (
                  <button onClick={handleConnectWallet}>Connect Wallet</button>
                )}
              </div>
            </div>
          </Container>
        </nav>

        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Home walletInfo={{ walletAccount }} />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home(props) {
  const {
    walletInfo: { walletAccount = null },
  } = props;
  return (
    <Container>
      <div className='bg-[blue]'>
        <h2>
          Connected as {walletAccount || ''} to {AppText.projectName}
        </h2>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </div>
    </Container>
  );
}

function About() {
  return <h2>{AppText.about}</h2>;
}
