import React, { Component } from 'react';
import './App.css';
import StatsHolder from './StatsHolder.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gas vs. Price Component</h1>
        </header>
        <StatsHolder/>
      </div>
    );
  }
}

export default App;
