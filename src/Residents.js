import React, { Component } from 'react';

import { UnorderedList, ListItem } from './styled/listElements';
import { Loading } from './styled/residentElements';

import { getPlanetResidents } from './api';
import ResidentList from './ResidentList';

class Residents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      residents: null,
    };
  }

  componentDidMount = () => {
    const { residentUrls } = this.props;
    this.mounted = true;
    getPlanetResidents(residentUrls)
      .then(residents => {
        if (this.mounted) {
          this.setState({ residents });
        }
      });
  }

  componentWillUnmount = () => {
    this.mounted = false;
  }

  render() {
    const { residents } = this.state;

    return (
      <UnorderedList>
        {
          residents
            ? <ResidentList residents={residents} />
            : <ListItem><Loading src="loading.svg" alt="Loading..." /></ListItem>
        }
      </UnorderedList>
    );
  }
}

export default Residents;
