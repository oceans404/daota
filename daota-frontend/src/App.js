import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WalletConnect from '@walletconnect/client';
import QRCodeModal from '@walletconnect/qrcode-modal';
import { OrbitProvider } from 'react-orbitdb';
import Container from './components/Container';
import Form from './components/Form';
import DaoList from './pages/DaoList';
import DaoDash from './pages/DaoDash';

import './App.css';
import './styles/output.css';
import './styles/fonts.css';

const AppText = {
  projectName: 'Daota',
  createTask: 'Create Task',
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
    console.log(connector);
  }, []);

  const handleConnectWallet = () => {
    if (!connector.connected || !walletAccount) {
      connector.createSession();
      connector.on('connect', (error, payload) => {
        if (error) {
          throw error;
        }

        // Get provided accounts and chainId
        const { accounts, chainId } = payload.params[0];
        setWalletAccount(accounts && accounts[0]);
        console.log(chainId);
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
    <OrbitProvider>
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
                <Link to='/new-task'>{AppText.createTask}</Link>
              </div> */}
                <div className='text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2'>
                  {walletAccount ? (
                    <span>
                      👋🏽 {walletAccount.substring(0, 6)}...
                      {walletAccount.substring(38)}
                    </span>
                  ) : (
                    <button onClick={handleConnectWallet}>
                      Connect Wallet
                    </button>
                  )}
                </div>
              </div>
            </Container>
          </nav>

          <Routes>
            <Route path='/new-task' element={<NewTask />} />
            <Route path='/daos/:id' element={<DaoDash />} />
            <Route path='/daos' element={<DaoList />}></Route>

            <Route path='/' element={<Home walletInfo={{ walletAccount }} />} />
          </Routes>
        </div>
      </Router>
    </OrbitProvider>
  );
}

function Home(props) {
  const {
    walletInfo: { walletAccount = null },
  } = props;

  const endpoint =
    '/orbitdb/zdpuB2ALKMKkhTJzVwAQ7rQeVkxnBYBP9Zs2J4GD2aYMdbjCX/daota-tasks';
  return (
    <>
      {walletAccount && (
        <div>
          <Container addClasses='flex flex-row'>
            <div className='w-1/2'>
              <h1>Your Tasks</h1>
              <ul>
                <li>a</li>
                <li>b</li>
                <li>c</li>
              </ul>
            </div>
            <div className='w-1/2'>
              <h1>Your DAOs</h1>
              <DaoList max={2} />
            </div>
          </Container>
        </div>
      )}

      <div>
        <Container>
          <h1>All DAOs</h1>
          <DaoList />
        </Container>
      </div>
    </>
  );
}

function NewTask() {
  return (
    <div>
      <Container>
        <h2>{AppText.createTask}</h2>
        <Form />
      </Container>
    </div>
  );
}
