import React, { Component } from 'react';

import { UnorderedList } from './styled/listElements';
import {
  AppContainer,
  Header,
  Title,
  MainLoading,
  MainContainer,
  Control,
  ControlsContainer,
} from './styled/appElements';

import Planet from './Planet';

import { getPlanets } from './api';

class App extends Component {
  state = {
    pageNumber: 1,
    planets: [],
  }

  componentDidMount = () => {
    const { pageNumber } = this.state;
    getPlanets(pageNumber).then(planets => {
      this.setState({ planets });
    });
  }

  getPrevPage = () => {
    const { pageNumber } = this.state;
    const newPage = pageNumber - 1;
    if (pageNumber > 1) {
      getPlanets(newPage).then(planets => {
        this.setState({ planets, pageNumber: newPage });
      });
    }
  }

  getNextPage = () => {
    const { pageNumber } = this.state;
    const newPage = pageNumber + 1;
    if (pageNumber < 7) { // there are 7 pages total
      getPlanets(newPage).then(planets => {
        this.setState({ planets, pageNumber: newPage });
      });
    }
  }

  render() {
    const { planets, pageNumber } = this.state;

    return (
      <AppContainer>
        <Header>
          <Title>People of The Galaxy</Title>
        </Header>

        <MainContainer>
          {
            planets.length
                ?
                  <UnorderedList>
                    {
                      planets.map(planet => (
                        <Planet
                          key={planet.name}
                          {...planet}
                        />
                      ))
                    }
                  </UnorderedList>
                : <MainLoading src="loading.svg" alt="Loading..." />
            }
        </MainContainer>

        <ControlsContainer>
          <Control src="back.svg" onClick={this.getPrevPage} />
          <Title>Page {pageNumber} of 7</Title>
          <Control src="next.svg" onClick={this.getNextPage} />
        </ControlsContainer>
      </AppContainer>
    );
  }
}

export default App;
