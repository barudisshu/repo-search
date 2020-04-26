/** @format */

import React from 'react';
import axios, {CancelTokenSource} from 'axios';
import './App.css';
import {Header} from './Header';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
      </div>
    );
  }
}

export default App;
