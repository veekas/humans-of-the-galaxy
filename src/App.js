import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getPlanets } from './api';

class App extends Component {
  state = {
    planets: [],
  }

  componentDidMount = () => {
    getPlanets().then(planets => this.setState({ planets }));
  }

  render() {
    const { planets } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <ul>{planets.map(planet => <li>{planet.name}</li>)}</ul>
        </p>
      </div>
    );
  }
}

export default App;
