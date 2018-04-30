import React, { Component } from 'react';

import { UnorderedList } from './styled/listElements';
import {
  AppContainer,
  Header,
  Title,
  MainLoading,
  MainContainer,
} from './styled/appElements';

import Planet from './Planet';
import PageControls from './PageControls';

import { getPlanets } from './api';

class App extends Component {
  state = {
    pageNumber: 1,
    planets: [],
  }

  componentDidMount = () => {
    const { pageNumber } = this.state;

    // prevents memory leak when user navigates away before promise resolves
    this.mounted = true;

    getPlanets(pageNumber).then(planets => {
      if (this.mounted) {
        this.setState({
          planets,
        });
      }
    });
  }

  componentWillUnmount = () => {
    this.mounted = false;
  }

  paginate = direction => {
    const { pageNumber } = this.state;

    // get new page number based on direction argument
    let newPage = pageNumber;
    if (direction === 'next' && pageNumber < 7) newPage += 1;
    else if (direction === 'back' && pageNumber > 1) newPage -= 1;

    getPlanets(newPage).then(planets => {
      if (this.mounted) {
        this.setState({ planets, pageNumber: newPage });
      }
    });
  }

  render() {
    const { planets, pageNumber } = this.state;

    return (
      <AppContainer>
        <Header>
          <Title>"Humans" of The Galaxy</Title>
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

        <PageControls
          pageNumber={pageNumber}
          paginate={this.paginate}
        />
      </AppContainer>
    );
  }
}

export default App;
