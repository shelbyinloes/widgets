import React, { Component } from 'react';
import './App.css';
import Clock from "./components/Clock.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Shelby's Widget Workshop</h1>
        <Clock />
      </div>
    );
  }
}

export default App;
