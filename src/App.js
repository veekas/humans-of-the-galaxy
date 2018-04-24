import React, { Component } from 'react';

import { AppContainer, Header, Title, MainLoading, MainContainer } from './styled/appElements';
import { UnorderedList } from './styled/listElements';

import Planet from './Planet';
import PageControls from './PageControls';

import { getPlanets } from './api';

class App extends Component {
  state = {
    planets: [],
    loading: true,
  }

  componentDidMount = () => {
    getPlanets().then(planets => {
      this.setState({
        planets,
        loading: !this.state.loading,
      });
    });
  }

  render() {
    const { planets, loading } = this.state;

    return (
      <AppContainer>
        <Header>
          <Title>People of Star Wars</Title>
        </Header>

        <MainContainer>
          <UnorderedList>
            {
              !loading && planets.length
                ?
                planets.map(planet => (
                  <Planet
                    key={planet.name}
                    {...planet}
                  />
                ))
                : <MainLoading src="loading.svg" alt="Loading..." />
            }
          </UnorderedList>
        </MainContainer>

        <PageControls />
      </AppContainer>
    );
  }
}

export default App;
