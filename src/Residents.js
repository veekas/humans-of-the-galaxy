import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { UnorderedList, ListItem } from './styled/listElements';
import { Loading } from './styled/planetElements';

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

    // prevents memory leak when user navigates away before promise resolves
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
          // render loading icon while request is pending
          residents
            ? <ResidentList residents={residents} />
            : <ListItem><Loading src="loading.svg" alt="Loading..." /></ListItem>
        }
      </UnorderedList>
    );
  }
}

Residents.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  residentUrls: PropTypes.array.isRequired,
};

export default Residents;
