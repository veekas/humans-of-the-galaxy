import React, { Component } from 'react';

import Planet from './Planet';

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
          <h1 className="App-title">Planets of Star Wars</h1>
        </header>
        <ul className="App-intro">
          {
            planets.map(planet => (
              <Planet
                key={planet.name}
                {...planet}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
