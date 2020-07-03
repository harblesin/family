import React from 'react';
import logo from './Images/homepagelogo.png';
import './App.css';
import HomePage from "./Components/HomePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>Welcome You Stupid Cunt</h4>
      </header>
      <HomePage />
    </div>
  );
}

export default App;
