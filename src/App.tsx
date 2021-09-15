import React from 'react';
import logo from './logo.svg';
import './App.css';
import FileExplorer from './components/FileExplorer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <div className="App-intro">
        <FileExplorer />
      </div>
    </div>
  );
}

export default App;
