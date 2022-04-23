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
        <ul>
          <li>
            <Link to='/'>{AppText.projectName}</Link>
          </li>
          <li>
            <Link to='/about'>{AppText.about}</Link>
          </li>
        </ul>

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
