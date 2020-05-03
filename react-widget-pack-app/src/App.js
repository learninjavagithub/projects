import React from 'react';
import logo from './logo.png';
import './App.css';
import { ReactWidgetPack } from 'react-widget-pack';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p />
        <ReactWidgetPack id={1} enable={true} />
      </header>
    </div>
  );
}

export default App;
