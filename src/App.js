import React from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my world!
        </p>
        <a
          className="App-link"
          href="https://www.dr.dk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read News
        </a>
      </header>
    </div>
  );
}

export default App;
