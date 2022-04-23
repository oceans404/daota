import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import './styles/output.css';
import './styles/fonts.css';

const AppText = {
  projectName: 'Daota',
  about: 'About',
};

export default function App() {
  return (
    <Router>
      <div>
        <nav class='font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full'>
          <div class='mb-2 sm:mb-0'>
            <div class='text-2xl no-underline text-grey-darkest hover:text-blue-dark'>
              <Link to='/'>{AppText.projectName}</Link>
            </div>
          </div>
          <div>
            <a
              href='/one'
              class='text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2'
            >
              <Link to='/about'>{AppText.about}</Link>
            </a>
          </div>
        </nav>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className='bg-[blue]'>
      <h2>{AppText.projectName}</h2>
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
  );
}

function About() {
  return <h2>{AppText.about}</h2>;
}
