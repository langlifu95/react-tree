import React from 'react';
import logo from './logo.svg';
import './App.css';
import FileExplorer from './components/FileExplorer';

function App() {
  return (
    <div className="App">
      <div className="App-intro">
        <FileExplorer />
      </div>
    </div>
  );
}

export default App;
